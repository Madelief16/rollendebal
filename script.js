var x, y;

function setup() {
  createCanvas(500, 400);

  x = 0;
  y = 200;
  v = -1;
}

function draw() {
  background(225);

  ellipse(x ,y , 50, 50);
  x = x + v;

  if (x >= 0){
    v = 1;
  }
 
}