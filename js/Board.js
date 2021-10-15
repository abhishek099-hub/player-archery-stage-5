class Board {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/board.png");
    //this.isSink = false;

    World.add(world, this.body);
  }
  /*remove(i){
    
    Matter.body.setVelocity(this.body,{x:0,y:0});
    setTimeout(()=>{
      Matter.World.remove(world,this.body);
      delete board1;
    },1000)
  }*/

  display() {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.width, this.height);
   
    pop();
  }
}
