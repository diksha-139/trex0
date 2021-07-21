
var trex ,trex_running, ground,groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,160,10,20);
 trex.addAnimation("runnning",trex_running)
trex.scale = 0.5

//making ground
ground = createSprite(300,180,600,20)
ground.addImage("groundiMg",groundImage);
ground.x = ground.width/2

}


function draw(){
  background("skyblue");

 
  ground.velocityX = -2
  console.log(ground.x);
  
  if(ground.x < 0){
    ground.x = ground.width/2
  }



if(keyDown("space")){
  trex.velocityY= -12
} 
//adding gravity

trex.velocityY = trex.velocityY + 0.5

trex.collide(ground)
  
drawSprites();
}
