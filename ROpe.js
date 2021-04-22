class Rope{
    constructor(BodyA,PointB){
        var option={
            bodyA:BodyA,
            pointB:PointB,
            stiffness:1,
            length:250
        }
        this.bodyA=BodyA;
        this.pointB=PointB;
        this.rope=Constraint.create(option);
        World.add(world,this.rope);
    }
   /* fly(){
        this.rope.bodyA=null;

    }*/
display(){
    if(this.rope.bodyA){
      //  push()
    line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y);
    strokeWeight(4);
    //pop()
    }
}
}