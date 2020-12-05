class wrecker {
    constructor(x, y, angle){
        var options = {restitution:0.05, density:1, friction:1};
        this.radius = 60;
        this.body = Bodies.circle(x, y, (this.radius-20)/2, options);
        World.add(world, this.body);
    }
     display(){
         var pos = this.body.position;
         var angle = this.body.angle;
         push();
         translate(pos.x, pos.y);
         rotate(angle);
         imageMode(CENTER);
         rectMode(CENTER);
         fill("white");
         ellipse(0, 0, this.radius);
         pop();

     }
}