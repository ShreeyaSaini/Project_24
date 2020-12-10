
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var base, side1, side2;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
	ground = new Ground();
	paper = new Paper();
	base = new Dustbin(600,630,200,20);
	side1 = new Dustbin(500,590,20,100);
	side2 = new Dustbin(700,590,20,100)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();
  base.display();
  side1.display();
  side2.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyDown(UP_ARROW)) {
   Matter.Body.applyForce(paper.body, paper.body.position,{x:30, y:-30});
	}
}

