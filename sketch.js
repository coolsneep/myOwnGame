
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var building
var ground
var buildings
var counters = 1

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  building = new Building(200,100,10,10)
  options = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,250,10,10,options)
  World.add(world,ground); 
  
  //buildings = new Group()
}


function draw() 
{
 
   Engine.update(engine);
  background(189);
   createBuilding();

   rect(ground.position.x,ground.position.y,10,10)
 
}
function createBuilding(){
  if(counters === 0){
  building = new Building(200,100,10,10)
  counters = 1
  // rectDraw();
  }
  if (counters===1){
   if(keyDown(37)){
    building.moveLeft();
    }
   if(keyDown(39)){
    building.moveRight();
  }
  
 }
 
 building.display();
 building.freeze();
//  building.test();
}