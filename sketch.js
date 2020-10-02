const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var world,engine;
var box1
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world
  box1=new box(200,300,70,60)
  var options={isStatic:true}
  ground=Bodies.rectangle(400,350,700,20,options)
        World.add(world,ground)
}

function draw() {
  background("black"); 
  Engine.update(engine)
  rectMode(CENTER) 
  rect(ground.position.x,ground.position.y,700,20)
  box1.display();
  
  
  
  
}
