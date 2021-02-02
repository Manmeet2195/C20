var fixedRect,movingRect;

var rect1,rect2;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  fixedRect=createSprite(400,200,45,30);
  fixedRect.shapeColor="red";
  movingRect=createSprite(400,300,45,30);
  movingRect.shapeColor="red";

  rect1=createSprite(200,100,80,50);
  rect1.shapeColor="pink";
  rect2=createSprite(500,250,50,80);
  rect2.shapeColor="pink";

}

function draw() {
  background("black");  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  console.log(movingRect.x);
  console.log(movingRect.x-fixedRect.x);

  if(isColliding(movingRect,rect1)){
    rect1.shapeColor="green";
    movingRect.shapeColor="green";
  }
  else{
    rect1.shapeColor="pink";
    movingRect.shapeColor="red";
  }
  
  drawSprites();
}