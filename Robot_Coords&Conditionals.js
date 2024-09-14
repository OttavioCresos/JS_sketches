function setup() {
  //create a canvas 400x400 pixels
  createCanvas(400, 400);
}

function draw() {
  //1 integer = black/white, 3 integers = RGB, 'blue' = color
  //choose color for background
  background(200, 100, 50);
  fill('cyan')
  //head circle(X, Y, DIAMETER)
  circle(200, 110, 200);
  //mouth line(Xa, Ya, Xb, Yb)
  line(175, 75, 225, 80);
  fill(255);
  //eye
  circle(200, 40, 50)
  //pupil
  circle(200, 40, 5)
  fill('teal');
  //set border weight
  strokeWeight(5);
  //body square(X, Y, size)
  square(100, 110, 200);
  //a small conditional
  if (mouseIsPressed === true){
    fill(155, 0, 0);
    circle(200, 40, 20);
  }
}
