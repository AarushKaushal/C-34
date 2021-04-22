const World=Matter.World
const Engine=Matter.Engine
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var ball;
var box3;
var box2;
var box1;
var ground1;
var rope;
function setup() {
  createCanvas(1600,800);
  engine = Engine.create();
   world = engine.world;
  ground1= new Ground(600,690,2000,10);
  box1= new Box(900,500,70,70);
  box2= new Box(900,575,70,70);
  box3= new Box(900,650,70,70);
  box4= new Box(900,425,70,70);
  box5= new Box(900,350,70,70);
  box6= new Box(900,275,70,70);
  box7= new Box(1000,500,70,70);
  box8= new Box(1000,575,70,70);
  box9= new Box(1000,650,70,70);
  box10= new Box(1000,425,70,70);
  box11= new Box(1000,350,70,70);
  box12= new Box(1000,275,70,70);
  box13= new Box(1100,500,70,70);
  box14= new Box(1100,575,70,70);
  box15= new Box(1100,650,70,70);
  box16= new Box(1100,425,70,70);
  box17= new Box(1100,350,70,70);
  box18= new Box(1100,275,70,70);
  ball= new Ball(200,200)
  rope= new Rope(ball.body,{x:700,y:250});
}

function draw() {
  background("black");
  Engine.update(engine);  
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  ball.display();
  rope.display();
}
function mouseReleased(){
  fly();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
