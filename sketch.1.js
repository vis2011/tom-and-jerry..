var moving;
var fixed;

function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  moving=createSprite(200 ,400 ,80 ,50);
  moving.shapeColor="green";
  fixed.shapeColor="purple";
}

function draw() {
  background("black");  

moving.x= World.mouseX;
moving.y=World.mouseY;

if(moving.x - fixed.x <=fixed.width/2+moving.width/2 &&
  fixed.x - moving.x <=fixed.width/2+moving.width/2 &&
  fixed.y-moving.y <=fixed.height/2+moving.height/2 &&
  moving.y-fixed.y <=fixed.height/2+moving.height/2){
  moving.shapeColor="red";
  fixed.shapeColor="blue";
}
else{
  moving.shapeColor="green";
  fixed.shapeColor="purple";
}



  drawSprites();
}