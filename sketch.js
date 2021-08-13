var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var arrowLag;

var score;

var balloonGroup;

var arrowGroup;

var gameSpeed;

var balloonCount;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  arrowLag = 0;

  score = 0;

  balloonGroup = createGroup();

  arrowGroup = createGroup();

  gameSpeed = 0;

  balloonCount = 0;
  
}

function draw() {

  if(balloonCount<75 && frameCount%1 === 0){
    balloonCount+=1;
  }

  if(frameCount%20 === 0 && gameSpeed<5){
    gameSpeed+=0.1;
  }

  if(frameCount%10 === 0){
    score++;
  }

 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space") && arrowLag === 0) {
    arrowLag = 20;
    createArrow();
  }
  
  if(arrowLag>0){
    arrowLag--;
  }

  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (frameCount %  (90-balloonCount) === 0){
    if (select_balloon == 1) {
      redBalloon();
    }

    if (select_balloon == 2) {
      blueBalloon();
    }

    if (select_balloon == 3) {
      pinkBalloon();
    }


    if (select_balloon == 4) {
      greenBalloon();
    }
  }

  if(arrowGroup.isTouching(balloonGroup)){
    if(frameCount%1 === 0){
      score+=1;
    }

    if(frameCount&2 === 0){
      score+=2;
    }
  }
  
  drawSprites();

  fill("black");
  text(score,25,25);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -12;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = random(3+1/2*gameSpeed,6+gameSpeed);
  red.lifetime = 150;
  red.scale = random(0.075,0.125);;
  red.lifetime = 200;
  balloonGroup.add(red);
}

function blueBalloon() {
  //write code for spwaning blue balloons
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = random(5+1/3*gameSpeed,7+gameSpeed);
  blue.lifetime = 150;
  blue.scale = random(0.075,0.125);
  blue.lifetime = 200;
  balloonGroup.add(blue);
}

function greenBalloon() {
  //write code for spwaning green balloons
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = random(2+1/2*gameSpeed,8+gameSpeed);
  green.lifetime = 150;
  green.scale = random(0.075,0.125);;
  green.lifetime = 200;
  balloonGroup.add(green);
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = random(3.5+2/3*gameSpeed,6.5+gameSpeed);
  pink.lifetime = 150;
  pink.scale = random(0.75,1.25);;
  pink.lifetime = 200;  
  balloonGroup.add(pink);
}
