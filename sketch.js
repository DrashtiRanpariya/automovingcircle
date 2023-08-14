function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

let circleX = 33 ;
let incX=5;
let circleY = 296 ;
let incY =5;

function draw() {
  // background(0);
  noStroke();
  fill(255);
  circle(circleX,circleY,10);
  if(circleX>=width)
  {
    incX=abs(incX)*-1 
    //abs(x),gives absolute value of x, |x|,always +ve
  }
  else if(circleX<=0)
  {
    incX=abs(incX)
  }
  if(circleY>=height)
  {
    incY=abs(incY)*-1
  }
  else if(circleY<=0)
  {
    incY=abs(incY)
  }
  circleX = circleX + incX*random() ;
  circleY = circleY + incY*random() ;
}


