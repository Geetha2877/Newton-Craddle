
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 1000);


	engine = Engine.create();
	world = engine.world;

	
	roof=new Roof(width/5,height/8,width/4,20);


	bobDiameter=40;

	startBobPositionX=100
	startBobPositionY=200
	bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);



	rope1=new Rope(bob1.body,roof.body,-bobDiameter*2, 0)

	rope2=new Rope(bob2.body,roof.body,-bobDiameter*1, 0)
	rope3=new Rope(bob3.body,roof.body,0, 0)
	rope4=new Rope(bob4.body,roof.body,bobDiameter*1, 0)
	Engine.run(engine);

	
}


function draw() {
  rectMode(CENTER);
background("grey")


  
  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  roof.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-55,y:-45});

	}
}


