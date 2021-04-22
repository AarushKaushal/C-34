class Ball{
    constructor(x,y){
        var options={
            'density':10,
            "frictionAir":0
        }

        this.body=Bodies.circle(x,y,20,options);
        World.add(world,this.body);

    }

display(){
    var pos=this.body.position;
    ellipseMode(RADIUS);
    stroke("red")
    ellipse(pos.x,pos.y,40,40);
}
}
