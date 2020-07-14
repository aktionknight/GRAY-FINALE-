var User1,User2,User_stable,User_right,User_left,User_jump;
var bg,bgImg
var E1health = 100
var E2health = 100
var E3health = 300
var P1health = 500
gameState = 0
var enemyCount = 2

if(enemyCount === 0)
{
  end.destroy();
  E3bar.visible = true
  var E3health = 300
  
}

function preload(){

  fontH = loadFont("arcadeclassic/ARCADECLASSIC.TTF")
 bgImg = loadImage("images/bg.png")
 bg0Img = loadImage("images/bg0.png")
 bloodImg = loadAnimation("images/blood4.png","images/blood3.png","images/blood2.png","images/blood1.png")
 bg2Img = loadImage("images/bg2.png")
  User_stable = loadAnimation("images/stable1.png","images/stable2.png")
  User_right = loadAnimation("images/frame1.png","images/frame2.png","images/frame3.png","images/frame4.png","images/frame5.png","images/frame6.png","images/frame7.png")
  User_jump = loadAnimation("images/jump1.png","images/jump1.png","images/jump2.png","images/jump3.png","images/jump4.png","images/jump5.png","images/jump6.png","images/jump7.png")
User_left = loadAnimation("images/Oframe1.png","images/Oframe2.png","images/Oframe3.png","images/Oframe4.png","images/Oframe5.png","images/Oframe7.png")
UserShootR = loadAnimation("images/shootR1.png","images/shootR2.png","images/shootR3.png")
UserShootL = loadAnimation("images/shootL1.png","images/shootL2.png","images/shootL3.png")
target = loadImage("images/target.png")
enemy_mov = loadAnimation("images/enemy1.png","images/enemy1.2.png","images/enemy2.png","images/enemy2.2.png")
enemy = loadImage("images/enemy1.png")
enemy_movL = loadAnimation("images/enemyL1.png","images/enemyL1.2.png","images/enemyL2.png","images/enemyL2.2.png")
barricadeImg = loadImage("images/barricade.png")

}



function setup() {
  createCanvas(displayWidth,displayHeight);



 bg =  createSprite(displayWidth/2- 350,displayHeight/2 + 100  ,displayWidth/2,displayHeight/2);
 bg.addImage("bg",bgImg)
 bg2 = createSprite(displayWidth*2 - 500 ,displayHeight/2 - 110 + 100,displayWidth/2,displayHeight/2)
 bg2.addImage("bg2",bg2Img)
 bg0 =  createSprite(displayWidth/2- 1000,displayHeight/2 + 50  ,displayWidth/2,displayHeight/2);
 bg0.addImage("bg0",bg0Img)
 bg0.visible = false
bg0.scale = 0.55

start1 = createSprite(-900,500,30,500)

end = createSprite(3000,500,30,500)
end.visible = false

barricade = createSprite(650,750,200,70)
barricade.addImage("barricade",barricadeImg)
 start = createSprite(350,600,30,1000)  
 start.visible = false;

 start2 = createSprite(1400,600,100,1000)
 //start2.visible = false;
 
ground = createSprite(displayWidth/2,800,displayWidth*20,30)
ground.visible = false;

ground2 = createSprite(950,580,500,50)
ground2.visible = false;

player1 = createSprite(200,600,20,50)
player1.addAnimation("player1",User_stable)
player1.scale = 0.3
player1.velocityY = 9.8


aimleft = createSprite(player1.x + 300,player1.y,20,20)
aimleft.visible = false;
aimleft.addImage("aimleft",target)
aimleft.scale = 2

aimright = createSprite(player1.x - 300,player1.y,20,20)
aimright.visible = true;
aimright.addImage("aimright",target)
aimright.scale = 2



enemy1 = createSprite(1000,-250,30,40)
enemy1.shapeColor = "yellow"
enemy1.addImage("enemy1",enemy)
enemy1.scale = 0.25;
enemy1.visible = false

enemy2 = createSprite(1800,-400,30,40)
enemy2.shapeColor = "yellow"
enemy2.velocityX = 0
enemy2.scale = 0.25;
enemy2.visible = false

enemy3 = createSprite(1800,-400,30,40)
enemy3.shapeColor = "yellow"
enemy3.velocityX = 0
enemy3.scale = 0.4;
enemy3.visible = false


E1bar = createSprite(enemy1.x,enemy1.y - 130,100,20)
E1bar.shapeColor = "red"
E1bar.visible = false;

E2bar = createSprite(enemy2.x,enemy2.y - 130,100,20)
E2bar.shapeColor = "red"
E2bar.visible = true;

E3bar = createSprite(enemy3.x,enemy3.y - 130,100,20)
E3bar.shapeColor = "red"
E3bar.visible = true;


bulletRgroup = new Group();
bulletLgroup = new Group();

finish = createSprite(3600,700,100,230)

camera.position.x = 500
  camera.position.y = 1500

}


function draw() {
  background("white");  
  drawSprites();

  if(gameState === 0)
  {

    // player1.velocityX = 0
    player1.velocityY = 0
    camera.x = 200
    camera.y = 600
    start2.visible = false
    player1.visible = false
    enemy1.visible = false
    enemy2.visible = false
    enemy3.visible = false
    bg2.visible = false
    barricade.visible = false
    aimright.visible = false

    bg.velocityX = 15

    if(bg.x > displayWidth/2 - 400)
    {
bg.x = 0
    }
   

    
    
    textSize(180)
textFont(fontH)
fill("gray")
strokeWeight(15)
stroke("red")
    textS =  text("GRAY",0,400)


    textSize(40)
    textFont(fontH)
    fill("black")
        textS =  text("PRESS 'SPACE' TO START",0,600)



  }

  if(keyDown(32) && gameState === 0)
  {
    gameState = 1
     
    cutscene = createVideo("GRAY.mp4",cutsceneLoad)
    cutscene.size(1500,1000);


  }

if(gameState === 1)
{

  bg.visible = false
  bg0.visible = false
  bg2.visible = false


  
  cutscene.visible = true
//camera.x = 800
//camera.y = 2000

 //cutscene.align(TOP)

 textSize(40)
  textFont(fontH)
  fill("black")
       text("CUTSCENE BELOW",100,800)
       text("PRESS ENTER TO START GRAY",100,900)
  
   
  console.log(gameState)
  
  
  





}

if(keyDown(13) && gameState === 1)
{
  gameState = 2
  cutscene.volume(0)
  cutscene.visible = false
  
  camera.y = player1.y
  
  textSize(40)
  textFont(fontH)
  fill("white")
       text("CUTSCENE BELOW",100,1000)

}
  

  if(gameState === 2)
  {
    //background("gray")
    cutscene.autoplay(false)
    bg.visible = false
    aimright.visible = false
    bg2.visible = false
    bg0.visible = true
player1.visible = true
aimright.visible = false



//player1.x = 800
camera.x = player1.x
camera.y = player1.y

player1.velocityY = 0

if(keyWentDown(68))
{
player1.velocityX = 7
player1.addAnimation("player1",User_right) 
}

if(keyWentUp(68))
{
player1.velocityX = 0
player1.addAnimation("player1",User_stable) 
}



if(keyWentDown(65))
{
player1.velocityX = -7
player1.addAnimation("player1",User_left) 

}

if(keyWentUp(65))
{
player1.velocityX = 0
player1.addAnimation("player1",User_stable) 
}


textSize(40)
textFont(fontH)
fill( "white")
strokeWeight(5)
stroke("black")

console.log(player1.y)

text("USE A AND D TO MOVE LEFT AND RIGHT" ,player1.x - 300 ,player1.y - 200 )

if(player1.isTouching(start1))
{
  player1.velocityY = -4
  player1.velocityX = 0
}

if(player1.y < 200)
{
  gameState = 3
  player1.x = 0
  player1.y = 600
}

  }

if(gameState === 3){

  

  bg.x = displayWidth/2 - 350
  bg.visible = true
  bg0.visible = false
  start2.visible = false
  player1.visible = true
  enemy1.visible = true
  enemy2.visible = true
  enemy3.visible = true
  aimright.visible = true
  
  bg2.visible = true
  barricade.visible = true

  player1.collide(end)

  E1bar.x = enemy1.x
  E1bar.y = enemy1.y - 130

  E2bar.x = enemy2.x
  E2bar.y = enemy2.y - 130

  E3bar.x = enemy3.x
  E3bar.y = enemy3.y - 200

  bg.velocityX = 0

 

  if(enemy1.x > player1.x  ){

    enemy1.velocityX = -4;

    if(frameCount % 10 === 0){
      enemy1.addAnimation("enemy1",enemy_mov)
      }
    
      }
    
      if(enemy1.x < player1.x){
    
        enemy1.velocityX = 4;

        if(frameCount % 10 === 0){
        enemy1.addAnimation("enemy1",enemy_movL)
        }
          }
  
          if(enemy1.isTouching(player1)){
            enemy1.velocityX = 0
            P1health -= 5

            blood = createSprite(player1.x,player1.y,20,20)
            blood.addAnimation("blood",bloodImg)
            enemy1.addAnimation("enemy1",enemy_mov)
            blood.lifetime = 10
            blood.scale = 0.8
            
          }

        
          if(enemy3.isTouching(player1)){
            enemy3.velocityX = 0
            P1health -= 5

            blood = createSprite(player1.x,player1.y,20,20)
            blood.addAnimation("blood",bloodImg)
            enemy3.addAnimation("enemy1",enemy_mov)
            blood.lifetime = 10
            blood.scale = 0.8
            
          }

console.log(E3health);






          if(enemy2.x > player1.x  ){

            enemy2.velocityX = -4;
        
            if(frameCount % 10 === 0){
              enemy2.addAnimation("enemy2",enemy_mov)
              }
            
              }
            
              if(enemy2.x < player1.x){
            
                enemy2.velocityX = 4;
        
                if(frameCount % 10 === 0){
                enemy2.addAnimation("enemy2",enemy_movL)
                }
                  }
          
                  if(enemy2.isTouching(player1)){
                    enemy2.velocityX = 0
                    P1health -= 5
                    enemy2.visible = true
        
                    blood = createSprite(player1.x,player1.y,20,20)
                    blood.addAnimation("blood",bloodImg)
                    enemy2.addAnimation("enemy2",enemy_mov)
                    blood.lifetime = 10
                    blood.scale = 0.8
                    
                  }

         
        
                  if(enemy3.x > player1.x  ){

                    enemy3.velocityX = -4;
                
                    if(frameCount % 10 === 0){
                      enemy3.addAnimation("enemy3",enemy_mov)
                      }
                    
                      }
                    
                      if(enemy3.x < player1.x){
                    
                        enemy3.velocityX = 4;
                
                        if(frameCount % 10 === 0){
                        enemy3.addAnimation("enemy3",enemy_movL)
                        }
                          }


          
          if(P1health < 0)
          {
            player1.destroy();

          }

  aimright.position.x = player1.position.x + 300;
  aimleft.position.x = player1.position.x - 300

  aimright.position.y = player1.position.y
  aimleft.position.y = player1.position.y

  camera.position.x = player1.position.x
camera.position.y = player1.position.y - 100

if(keyWentDown(68))
{
player1.velocityX = 7
player1.addAnimation("player1",User_right) 
}

if(keyWentUp(68))
{
player1.velocityX = 0
player1.addAnimation("player1",User_stable) 
}



if(keyWentDown(65))
{
player1.velocityX = -7
player1.addAnimation("player1",User_left) 

}

if(keyWentUp(65))
{
player1.velocityX = 0
player1.addAnimation("player1",User_stable) 
}

if(keyDown(87)&& player1.y > 600)
{
player1.velocityY = -15
player1.addAnimation("player1",User_jump)
//player1.addAnimation("User_right") 

}




  if(keyWentDown(70 && 65) ){

    aimleft.visible = true;
    aimright.visible = false;
    
    }
    
    if(keyWentUp(70 && 65)){
    
      aimleft.visible = false;
      aimright.visible = true;
      }
    




player1.velocityY += 0.5

if(player1.isTouching(start)){
 
 
  player1.velocityX = 0
  player1.velocityY = 0
  enemy1.velocityY = 9
  enemy1.velocityX = -6
  enemy1.x = 1000
  enemy1.y = 500
  enemy1.visible = true
 E1bar.visible = true;

enemy1.addImage("enemy1",enemy)

  camera.position.x = 800

if(player1.isTouching(start) && frameCount % 50 === 0){

start.destroy();
bgMusic = createAudio('music/bensound-dubstep.mp3')
bgMusic.autoplay(true)
bgMusic.volume(0.1);
bgMusic.loop();
}
    }

    if(player1.isTouching(start2))
    {

enemy2.x = 1800
enemy2.y = 700
enemy2.visible = true;
start2.destroy();



    }

if(E1health < 0)
{
  enemy1.destroy();
  E1bar.destroy();
  
}

if(E2health < 0)
{
  enemy2.destroy();
  E2bar.destroy();
  
}

if(E3health < 0)
{
  enemy3.destroy();
  E3bar.destroy();
  
}

if(E1health < 0 && E2health < 0)
{
  enemyCount = 0
}

if(enemyCount === 2)
{
  
  enemy3.x = 3300
  enemy3.y = 700
  enemy3.visible = false
  E3bar.visible = false
}


if(enemyCount === 0)
{
  end.destroy();
  E3bar.visible = true
  
  //enemy3.x = 3300
  //enemy3.y = 600
}


console.log(E1health)
console.log(E2health)

textSize(40)
textFont(fontH)
fill( "white")
stroke = 10



text("HEALTH -" + P1health,player1.position.x - 130,player1.position.y - 150)

text.x = player1.x - 300

if(P1health < 0)
{
//text.visible = false
}

if(player1.isTouching(finish))
{
  gameState = 4
}
}

if(gameState === 4 && enemyCount === 0)
{
  bg.visible = false
  bg2.visible = false
player1.destroy();
aimright.visible = false
aimleft.visible = false



  textSize(40)
textFont(fontH)
fill( "black")
stroke = 10

text("CONGRATULATION-S FOR COMPLETING THE DEMO " , player1.position.x , player1.position.y)

textSize(20)
textFont(fontH)
fill( "black")
stroke = 10

text("NOW PAY 60$ to get complete edition ... just kiddin we aint Ea ..(pun intended) " ,player1.position.x,player1.position.y)

}

enemy1.collide(ground)
player1.collide(ground)
player1.collide(ground2)

}


function mouseClicked(){

  if(gameState === 3){

  if(P1health > 0){
  gunSound = createAudio('music/12-Gauge-Pump-Action-Shotgun-Far-Gunshot-B-www.fesliyanstudios.com.mp3')
  gunSound.autoplay(true)
  gunSound.volume(0.4)

bulletR = createSprite(player1.position.x,player1.position.y - 10,20,10)
bulletR.velocityX = 40;
bulletR.lifetime = 100;
bulletR.shapeColor = "yellow"
bulletRgroup.add(bulletR);

if(mouseClicked){
player1.addAnimation("player1",UserShootL)
}



if(player1.velocityX === -7){

  
player1.addAnimation("player1",UserShootR)
bulletL = createSprite(player1.position.x,player1.position.y - 10,20,10)
bulletL.velocityX = -40;
bulletL.lifetime = 100;
bulletL.shapeColor = "yellow"
bulletR.destroy();
bulletLgroup.add(bulletL)

}


if(bulletLgroup.isTouching(enemy1) )
{
 E1health -= 40
E1bar.width = E1health
 blood = createSprite(enemy1.x,enemy1.y,20,20)
 blood.addAnimation("blood",bloodImg)
 //enemy1.addAnimation("enemy1",enemy_mov)
 blood.lifetime = 10
 blood.scale = 0.8

 bulletLgroup.destroyEach();

 

}

else
{
bulletLgroup.visible = false;
}



if(bulletLgroup.isTouching(enemy2) )
{
 E2health -= 40
E2bar.width = E2health
 blood = createSprite(enemy2.x,enemy2.y,20,20)
 blood.addAnimation("blood",bloodImg)
 //enemy1.addAnimation("enemy1",enemy_mov)
 blood.lifetime = 10
 blood.scale = 0.8
 
 bulletLgroup.destroyEach();

}

if(bulletLgroup.isTouching(enemy3) )
{
 E3health -= 40
E3bar.width = E3health
 blood = createSprite(enemy3.x,enemy3.y,20,20)
 blood.addAnimation("blood",bloodImg)
 //enemy1.addAnimation("enemy1",enemy_mov)
 blood.lifetime = 10
 blood.scale = 0.8
 
 bulletLgroup.destroyEach();

}


else
{
bulletLgroup.visible = false;
}


//if(keyWentUp(65)){
 // player1.addAnimation("player1",User_stable)
//}




if(bulletRgroup.isTouching(enemy1) )
{
 E1health -= 40
E1bar.width = E1health
 blood = createSprite(enemy1.x,enemy1.y,20,20)
 blood.addAnimation("blood",bloodImg)
 //enemy1.addAnimation("enemy1",enemy_mov)
 blood.lifetime = 10
 blood.scale = 0.8
 
 bulletRgroup.destroyEach();

}






//if(keyWentUp(65)){
 // player1.addAnimation("player1",User_stable)
//}




if(bulletRgroup.isTouching(enemy2) )
{
 E2health -= 40
E2bar.width = E2health
 blood = createSprite(enemy2.x,enemy2.y,20,20)
 blood.addAnimation("blood",bloodImg)
 //enemy1.addAnimation("enemy1",enemy_mov)
 blood.lifetime = 10
 blood.scale = 0.8
 
bulletRgroup.destroyEach();
}

if(bulletRgroup.isTouching(enemy3) )
{
 E3health -= 40
E3bar.width = E3health
 blood = createSprite(enemy3.x,enemy3.y,20,20)
 blood.addAnimation("blood",bloodImg)
 //enemy1.addAnimation("enemy1",enemy_mov)
 blood.lifetime = 10
 blood.scale = 0.8
 
bulletRgroup.destroyEach();
}

if(bulletLgroup.isTouching(end))
{
  bulletLgroup.destroyEach();
}

if(bulletRgroup.isTouching(end))
{
  bulletRgroup.destroyEach();
}

}
}
}
//mousePressed()
//{

 // player1.addAnimation("player1",UserShootR)

//}

//mouseReleased()
//{
 // player1.addAnimation("player1",User_stable) 
//}

function cutsceneLoad() {
  cutscene.loop();
  cutscene.volume(1);

  

  //cutxcene.x = 7000
  //cutscene.y = 600
}
