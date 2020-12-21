
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bod1,bod2,bob3,bob4,bob5,roof1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(370,200,600,30);
	bob1 = new Bob(600,220,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(1);
  roof1.display(); 
  bob1.display(); 
  drawSprites();
 
}



