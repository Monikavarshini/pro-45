var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var astronaut,al1,al2,al3,bullet,cloudimg,astro,cloudgroup,ground;


function preload(){
astronaut = loadAnimation ("as1.png","as2.png","as3.png","as4.png","as5.png","as6.png")
al1 = loadImage("alien 1.png")
al2 = loadImage("aliens 2.png")
al3 = loadImage("aliens3.png")
bullet = loadImage("bullets.png")
cloudimg = loadImage("clouds.png")
night = loadImage("nightsky.png")

}






function setup (){
 createCanvas(windowWidth,1000)

 cloudgroup=new Group();
 

 bgsky=createSprite(width/2,height/2,width,height)
 bgsky.addImage("n",night)
 bgsky.scale= 4
 bgsky.velocityX = -2
 console.log(windowHeight)

 astro = createSprite(50,displayHeight-200,50,50)
 astro.addAnimation("aa",astronaut)
 astro.scale = 0.2

 ground=createSprite(width/2,displayHeight-200,width,30)
 ground.visible=false



}

function draw(){
background(255)
spawnclouds();

astro.collide(ground)


if (bgsky.x<0){
bgsky.x = width+100
}



/*if (keyCode===UP_ARROW){
astro.velocityY= -4
}
astro.velocityY+=0.5

if(keyCode===RIGHT_ARROW){
  astro.velocityX = 0.5
}*/

drawSprites();
}

function spawnclouds(){
  if (frameCount%90===0){
 //var cloud = createSprite(-10,random(50,height/2),20,30)
 

  var rand = Math.round(random(1,2))
  if (rand===1){
  var cloud = createSprite(-10,random(50,height-600),20,30)
  cloud.addImage(cloudimg)
 cloud.scale= 0.3
  cloud.lifetime = width/3
  cloud.velocityX= random(3,6)
  cloudgroup.add(cloud)
  }

  if (rand===2){
    var cloud = createSprite(width+10,random(50,height-600),20,30)
    cloud.addImage(cloudimg)
    cloud.velocityX=random(-3,-5)
 cloud.scale= 0.3
  cloud.lifetime = width/3
  
    cloudgroup.add(cloud)
  }
  }
  
  
}