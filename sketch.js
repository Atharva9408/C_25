
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground;
var dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper=new Paper(100,50,100,100);
	ground=new Ground(width/2,height-35,width,20);
	dustbin=new DB(1250,height-145,180,200);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
  paper.display();
  ground.display();
  dustbin.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:2300,y:-2300})
	}
}

