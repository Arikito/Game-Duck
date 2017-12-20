(function(){
    "use srtict"
    var ViewWidth = document.body.clientWidth,
        minViewWidth = 500,
        ViewHeight = document.body.clientHeight,
        duck = document.getElementById('duck');
        

    console.log(ViewWidth);

    function DuckObject(x,y){
            var that = this;
            this.id = "duck";
            this.x = x;
            this.y = y;
            this.y = this.y;
            this.file = 'img/duck.svg';
            this.scale = 0.5;
            this.fly = function(i){
                    that.y += 1;
                    that.objct.style.top = that.y;
                    // console.log(that.y);
                    // console.log(that.objct.style.top);
            };
           
            
            this.create = function(i){
                 this.objct.id = this.id;
                 document.body.appendChild(this.objct);
                 this.objct = document.getElementById(this.id);
                 // console.log("done");
                 this.objct.style.left = 100;
                 console.log(this.objct);
                  setInterval(function(){
                   that.fly();
                  },100)

                 // console.log(that.style.top);

                 this.objct.onclick = function(e){
                    var item = e.target;
                    item.className = "dead";
                    item.style.backgroundColor = "red";
                    console.log(item);
                    e.preventDefault();
                    setTimeout(
                        function(){
                            that.die();
                        },1000);
                }



            };

            if(!(this.objct = document.getElementById(this.id))) {
                this.objct = document.createElement("button");
                this.create();
            };

            this.die = function(){
              this.objct.remove();
            }

            
    };

    create.onclick = function debug(msg) {
        var randPointX = Math.floor(Math.random() * (ViewWidth - minViewWidth) + minViewWidth);
        var duckObj = new DuckObject(randPointX,200);
    }

}());