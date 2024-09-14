function setup() {
//create canvas, background color, and set the strokeWeight 
createCanvas(480, 120);
background(204);
strokeWeight(8);
}
function draw() {
//constants are declared and init, and are always in caps
const Y = 40
//loop:init;     test;    update; (i=i+60)
for (var i = 20; i < 400; i += 60) {
//func for the lines using the const and i loop var:
line(i, Y, i + 60, Y + 40);
}
