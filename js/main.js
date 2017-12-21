(function(){
    "use srtict"
    var ViewWidth = document.body.clientWidth,
        minViewWidth = 500,
        ViewHeight = document.body.clientHeight,
        duck = document.getElementById('duck');
        aaa = document.querySelector('.sun');
        

    function DuckObject(x,y){
            var that = this;
            this.id = "duck";
            this.x = x;
            this.y = y;
            this.spedDX = 1;
            this.spedDY = 1;
            this.y = this.y;
            this.file = 'img/duck.svg';
            this.scale = 0.5;
            this.fly = function(i){
                            var topPos = document.documentElement.clientHeight;
                            setInterval(function(){

                            if (that.y == (window.innerHeight - 47) && that.spedDY > 0) {
                                that.spedDY = -1;
                                console.log(that.objct.style.bottom + 'right');
                            // console.log(window.innerWidth);

                            } else if(that.y ==  0 && that.spedDY < 0){
                            that.spedDY = 1;
                            // console.log(window.innerWidth);
                            console.log(that.objct.style.bottom + 'left');
                            }
                            that.y += that.spedDY;
                            that.objct.style.bottom = that.y +"px";


                            if (that.x == (window.innerWidth - 47) && that.spedDX > 0) {
                            that.spedDX = -1;
                            console.log(that.objct.style.left + 'right');
                             // console.log(window.innerWidth);
                             
                            } else if(that.x ==  0 && that.spedDX < 0){
                            that.spedDX = 1;
                             // console.log(window.innerWidth);
                             console.log(that.objct.style.left + 'left');
                            }
                            that.x += that.spedDX;
                            that.objct.style.left = that.x +"px";


                            },5)
                         };


      //       this.fly = function() {
      //         var elem = this.objct.id;
      //         var pos = this.y;
      //         var id = setInterval(frame, 5);
      //         function frame() {
      //           if (pos == 350) {
      //             clearInterval(id);
      //         } else {
      //             pos++; 
      //             elem.style.top = pos + 'px'; 
      //             elem.style.left = pos + 'px'; 
      //         }
      //     }
      // }

            this.create = function(i){
                 this.objct.id = this.id;
                 document.body.appendChild(this.objct);
                 this.objct = document.getElementById(this.id);

                 this.objct.onclick = function(e){
                    e.preventDefault();
                    var item = e.target;
                    item.className = "dead";
                    item.style.backgroundColor = "red";
                    console.log(item);
                    setTimeout(
                        function(){
                            that.die();
                        },1000);
                }

               this.fly();

            };

            if(!(this.objct = document.getElementById(this.id))) {
                this.objct = document.createElement("button");
                this.create();
            };

            this.die = function(){
              this.objct.remove();
              clearInterval(this.fly);
            }

    };

    create.onclick = function debug(msg) {
        var randPointX = Math.floor(Math.random() * (ViewWidth - minViewWidth) + minViewWidth);
        var duckObj = new DuckObject(randPointX,200);
    }



}());