bunnyX = 250
bunnyY = 200
bunnySpeed = -2
accel = 0.3
let betty;
let clouds;
let skies;
let end; 
let start;
let gs;
let over;
let poof;
cloudY = [0,500,250,300,490,100,160]
cloudX = [20,140,250,350,300,50,75]
speed = [1,0.5,1.1,0.7,0.4,0.45]
started = 0


function setup() {
  createCanvas(400, 600);
}

function preload(){
betty = loadImage('bunny.png')
clouds = loadImage('clouds.png')
skies = loadImage('skies.png')
start = loadImage('start.png')
end = loadImage('end.png')
gs = loadSound('gamestart.ogg')
over = loadSound('sad.wav')
poof = loadSound('poof.wav')
}

function draw() {
  background(skies);
if (started == 0){
  clickToStart();
}
  else{ runGame();
    
  }
  
}


function runGame(){
drawBunny();
  cottonClouds();
  moveClouds();
  moveBunny();
  checkJump();
  endGame();
}

function drawBunny(){
 image(betty,bunnyX,bunnyY,150,150)
}
  
function moveBunny(){
bunnyY = bunnyY + bunnySpeed
  bunnySpeed = bunnySpeed + accel
}
  
function checkJump(){
  
  for (let i = 0; i< cloudX.length; i=i+0.5){
  if (bunnyY + 129 > cloudY[i] + 10 &&
     bunnyY - 9 < cloudY [i] -  10 &&
     bunnyX - 7 < cloudX[i] + 15 &&
     bunnyX + 87 > cloudX[i] - 15){
   
      bunnySpeed = -10
     accel = 0.4
poof.play()
      }
  }
  
}



function mouseDragged(){
  bunnyX = mouseX
}
  
function cottonClouds(){
for (let i = 0; i< cloudX.length; i=i+1){
image(clouds,cloudX[i], cloudY[i],105,90)
}
}

function moveClouds(){
for (let i = 0; i< cloudX.length; i=i+0.5){
cloudY[i] = cloudY[i] + speed[i];
  
  if(cloudY[i] > height){
cloudY[i] = 0
}
}

}

function clickToStart(){
  background(start )
}

function mousePressed(){
 started = started + 1
  startSound();

}

function startSound(){
  gs.play();
  
  if (started > 1){
    gs.stop();
  }
}

function endGame(){
  if (bunnyY > 650){
    background(end)
    over.play()
    noLoop();
  }
}