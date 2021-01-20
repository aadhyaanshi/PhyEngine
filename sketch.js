 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(800,400);
  var myengine,myworld;
  myengine = Engine.create();
  myworld = myengine.world;

  var option = {
    isStatic : true
  }

  var option1 = {
    restitution : 1 
  }

  object = Bodies.rectangle(200,200,20,20,option1);
  World.add(myworld,object);

  ground = Bodies.rectangle(0,390,800,10,option);
  World.add(myworld,ground);

  ball = Bodies.circle(100,10,30,option1);
  World.add(myworld,ball);
  


}



function draw() {
  Engine.update(myengine);
  background(255,255,255);  

  rect(object.position.x,object.position.y,20,20);
  rect(ground.position.x , ground.position.y , 800,10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
  drawSprites();
}