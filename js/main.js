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
            this.y = this.y;
            this.file = 'img/duck.svg';
            this.scale = 0.5;
            this.fly = function(i){
                            var topPos = document.documentElement.clientHeight;
                            setInterval(function(){
                                that.y += 1;
                                 that.objct.style.bottom = that.y +"px";
                               console.log(that.objct.style.bottom);
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