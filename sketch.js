var movingrect,fixedrect;


function setup() {
  createCanvas(1200,800);
 movingrect=createSprite(400, 200, 80, 30);
 movingrect.shapeColor="pink"
 fixedrect=createSprite(200,200,50,80);
fixedrect.shapeColor="purple"
}

function draw() {
  background(0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
if(movingrect.x-fixedrect.x===fixedrect.width/2+movingrect.width/2){
  movingrect.shapeColor="red"
  fixedrect.shapeColor="red"
}
else{
  movingrect.shapeColor="blue"
  fixedrect.shapeColor="blue"
}

  drawSprites();
}