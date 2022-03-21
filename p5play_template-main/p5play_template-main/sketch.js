
function setup() {
  createCanvas(600,300);
  box= createSprite(200,200,20,20);
  edges=createEdgeSprites()
}

function draw() 
{
  background(30);

if (keyDown(LEFT_ARROW)){
box.velocityX=-7;
}
if (keyDown(RIGHT_ARROW)){
box.velocityX=9;

}
if (keyDown(UP_ARROW)){
  box.velocityY=-4;
}

if (keyDown(DOWN_ARROW)){
box.velocityY=6;
}
box.bounceOff(edges);
  drawSprites ();

}




