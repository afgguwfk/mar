var mar,mar1,barco,borco1;
function preload(){

mar1=loadAnimation("sea.png")
barco1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(400,400);
  mar=createSprite(200,200)
mar.addAnimation("oceano",mar1)
mar.scale=0.3
barco=createSprite(200,300)
barco.addAnimation("barco2",barco1)
barco.scale=0.1
bloco=createSprite(-840.200,1,1)
mar.velocityX=-5
}

function draw() {
  background("blue");
    drawSprites();
if (mar.isTouching(bloco)){
  mar.x=630
}
 
}
