
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var hammer,rubber,stone,plane

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer=new Hammer(760,120,150,PI/7);
	rubber=new Rubber(710,650,70,70)
	stone=new Stone(250,630,70,70);
	plane=new Plane(600,height,1200,30);  

  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");

  
  hammer.display();
  rubber.display();
  stone.display();
  plane.display();
 
}



