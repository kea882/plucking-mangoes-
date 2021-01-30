
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
	stone=new Bob(100,200,30)
	mango1= new Bob(400,200,30)
	mango2= new Bob(500,200,30)
	mango3= new Bob(600,200,30)
	mango4= new Bob(700,200,30)
	mango5= new Bob(800,200,30)


	



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);

  function keyPressed() {
	  if(keyCode===32){
		  Matter.Body.setPositon(stone.body,{x:235, y=420})
		  launcherObject.attach(stone.body);
	  }
  }


 
  drawSprites();
 
}
function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(mangoBodyPosition.x,mangoBodyPosition.y,stoneBodyPosition.x,stoneBodyPosition.y)
	if(distance<=lmango.r + lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}


}



