function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(128, 0, 0);
      //init,    test,          update
  for (Ypos = 0; Ypos <= height; Ypos += 40 ){
    for (Xpos = 0; Xpos <= width; Xpos += 40){
      fill(96, 42, 184);
      ellipse(Xpos, Ypos, 40);
    }
  }
}
