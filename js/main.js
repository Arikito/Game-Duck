;(function(){
	"use srtict";
	var totalScore = 0,
		bullets = 3,
		duckSize = 0;
	var ViewWidth = document.body.clientWidth,
		ViewHeight = document.body.clientHeight,
		// duck = document.getElementById('duck'),
		aaa = document.querySelector('.sun'),
		ui = document.getElementById('ui'),
		nature = document.getElementById('nature'),
		sky = nature.querySelector('.sky');
	function pad(num, size) {
		var s = num+"";
		while (s.length < size) s = "0" + s;
		return s;
	}
	function DuckObject(x, y){
		var that = this;
		this.id = 'duck';
		this.x = x;
		this.y = y;
		var speeds = [-1, 1];
		this.speedX = speeds[Math.floor(Math.random() * speeds.length)];
		this.speedY = -1;
		this.y = this.y;
		this.file = 'img/duck.svg';
		this.scale = 0.5;
		this.fly = function(){
			// Moving by Y axis
			if(that.y == (window.innerHeight - 150) && that.speedY > 0){
				that.speedY = -1;
			}else if(that.y == 0 && that.speedY < 0){
				that.speedY = 1;
			}
			that.y += that.speedY;
			that.objct.style.top = that.y + 'px';
			// Moving by X axis
			if(that.x == (window.innerWidth - duckSize) && that.speedX > 0){
				that.speedX = -1;
			}else if(that.x == 0 && that.speedX < 0){
				that.speedX = 1;
			}
			that.x += that.speedX;
			that.objct.style.left = that.x + 'px';
		};
		this.flyout = function(){
			that.speedY = -1.5;
			that.y += that.speedY;
			if(that.y > -duckSize){
				that.y += that.speedY;
				that.objct.style.top = that.y + 'px';
			}else{
				clearInterval(that.move);
				that.objct.remove();
				game.init();
			}
		};
		this.die = function(){
			clearInterval(this.move);
			setTimeout(function(){
				that.objct.remove();
				game.init();
			}, 1000);
		};
		this.create = function(){
			this.objct.id = this.id;
			document.body.appendChild(this.objct);
			this.objct = document.getElementById(this.id);
			duckSize = this.objct.clientHeight;
			this.x = Math.floor(Math.random() * (ViewWidth-duckSize - duckSize) + duckSize);
			this.y = window.innerHeight-180;
			this.move = setInterval(this.fly, 10);
		};
		if(!(this.objct = document.getElementById(this.id))){
			this.objct = document.createElement("button");
			this.create();
		}
	}
	function DuckHunt(){
		var that = this;
		this.play = false;
		this.life = 3;
		this.bullets = ui.querySelector('.shot .bullets').getElementsByClassName('bullet');
		this.reloadBullets = function(count){
			ui.querySelector('.shot .bullets').innerHTML = '';
			for(var i = 0; i < count; i++){
				var bullet = document.createElement('div');
				bullet.className = 'bullet';
				ui.querySelector('.shot .bullets').appendChild(bullet);
			}
			this.bullets = ui.querySelector('.shot .bullets').getElementsByClassName('bullet');
		};
		this.init = function(){
			this.play = true;
			this.reloadBullets(3);
			ui.querySelector('.shot .lifes .number').innerText = this.life;
			setTimeout(function(){
				if(that.life <= 0){
					game.over();
				}else{
					that.duck = new DuckObject();
					document.body.onmousedown = function(e){
						e.preventDefault();
						if(that.play){
							that.bullets[0].remove();
							if(e.clientX > that.duck.x && e.clientX < (that.duck.x + duckSize) && e.clientY > that.duck.y && e.clientY < (that.duck.y + duckSize)){
								that.play = false;
								totalScore += 500;
								ui.querySelector('.score .number').innerText = pad(totalScore, 8);
								that.duck.die();
							}else{
								sky.className = 'sky red';
								setTimeout(function(){
									sky.className = 'sky';
								}, 100);
								if(that.bullets.length == 0){
									that.play = false;
									that.life--;
									ui.querySelector('.shot .lifes .number').innerText = that.life;
									clearInterval(that.duck.move);
									that.duck.move = setInterval(that.duck.flyout, 5);
								}
							}
						}
					};
				}
			}, 100);
		};
		this.over = function(){
			this.play = false;
			gameOver.style.display = 'block';
		};
	}
	var game = new DuckHunt();

	start.onclick = function(){
		startScreen.style.display = 'none';
		game.init();
		// var randPointX = Math.floor(Math.random() * (ViewWidth - minViewWidth) + minViewWidth);
		// var duckObj = new DuckObject(randPointX,200);
	};

	gameOver.onclick = function(){
		location.reload();
	};

}());