
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boxBottom= new Dustbin(500,675, 150, 25)
	
	boxLeftSide= new Dustbin(415,615,25, 150)
	
	boxRightSide= new Dustbin(575,615,25, 150)
	


	paper = new Paper(200,200,25);
	ground = new Ground(300,height,700,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  paper.display();
  ground.display();
  boxBottom.display();
  boxLeftSide.display();
  boxRightSide.display();

  
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
		
	}
}

