//1_declare a slider var
let slider;

function setup() {
  createCanvas(480, 120);
  
  //2_init the slider in setup()
  //set the range, pos, size, [Defvalue],[step] [these 2 are optional]
  slider = createSlider(0, 100, 50, 4)
  slider.position(10, 130);
  slider.size(100);
}

function draw() {
  //define the color of our background
  background(128, 0, 0);
  //create a variable for the diameter to be controlled by the slider
 
  //3_in draw, set the slider with the diameter var
  circleDiameter = slider.value();
  
  //    init,    test,          update
  for (Ypos = 0; Ypos <= height; Ypos += 40 ){
    for (Xpos = 0; Xpos <= width; Xpos += 40){
      fill(96, 42, 184);
      //draw the ellipses using the nested loops
      ellipse(Xpos, Ypos, circleDiameter);
    }
  }
}
