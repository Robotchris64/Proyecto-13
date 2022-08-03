var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;
if(rabbit.isTouching(apple)){
  apple.destroy();
 
 }

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
 
}


function setup(){
  createCanvas(400,400);
garden=createSprite(200,200);
garden.addImage(gardenImg); 
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(180);
  rabbit.x = World.mouseX;
  
 
 
createRed();
createApples();
  createOrange();
   drawSprites();
}

function createApples() {
if(frameCount%80===0){
  var apple = createSprite(356,10,40,40);
  apple.x = Math.round(random(35,365))
apple.addImage(appleImg);
apple.scale=0.08;
apple.lifetime = 135;
apple.velocityY = 3;
apple.depth = apple.depth + 1
}
}

function createOrange() {
  if(frameCount%110 ===0){
var orangeL = createSprite(356,10,40,40)
orangeL.x = Math.round(random(35,365))
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 135;
orangeL.depth = garden.depth + 1
  }
}

function createRed() {
if(frameCount%150 ===0){
var redL = createSprite(356,10,40,40)
redL.x = Math.round(random(35,365))
  redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 135;
  redL.depth = garden.depth + 1
}
}
edges = createEdgeSprite();
rabbit.collide(edges);
