var AR, ARimg
var ap, apimg
var axe, axeimg
var betterappartment, baimg
var bk, bkimg
var lmck, lmckimg
var mk, mkimg
var pistol, pistolimg
var bcgwar, bcgwarimg
var ground
var obstacle

function preload(){

  lmckimg = loadImage("images/player.png")
  bcgwarimg = loadImage("images/war.png")
}


function setup() {
  createCanvas(1000,1000);

  

  lmck = createSprite(200,500,20,20)
  lmck.addImage(lmckimg);
  lmck.setCollider("rectangle", 5, -20, 30, 250)
  //lmck.debug = true

  obstacleGroup=new Group();

  obstacle1 = createSprite(440,580, 60, 25)
  obstacle2 = createSprite(485,550, 30, 30)
  obstacle3 = createSprite(530,520, 60, 30);
  obstacle4 = createSprite(560,550, 60, 25)
  obstacle5 = createSprite(590,580, 130, 25)

  obstacleGroup.add(obstacle1);
  obstacleGroup.add(obstacle2);
  obstacleGroup.add(obstacle3);
  obstacleGroup.add(obstacle4);
  obstacleGroup.add(obstacle5);
  
 
 
}



function draw() {
  background(bcgwarimg);
  
  if(keyDown(LEFT_ARROW)){
    fill("BLUE")
    textSize(30)
    text("I should go ahead first", lmck.x-150, 370)
  }

  if(keyDown(RIGHT_ARROW)){
    lmck.x+=4  
  }
 
  /*
  obstacle1.visible=false
  obstacle2.visible=false
  obstacle3.visible=false
  obstacle4.visible=false
  obstacle5.visible=false
  obstacle6.visible=false
*/
  if(keyDown(UP_ARROW)&& lmck.collide(obstacleGroup)){
    lmck.velocityY=-10
  }

  lmck.velocityY+=1.6
  
  lmck.collide(obstacleGroup)

  drawSprites();

}
