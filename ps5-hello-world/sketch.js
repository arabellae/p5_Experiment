function setup() {
  createCanvas(800, 600);
}
function draw() {
// Set background color to yellow as shown in Step 5
  background("yellow");
  //when mouse button is pressed, circles turn black
if (mouseIsPressed === true) {
    fill(0);
  } else {
    fill(255);
  }

 //Draw a white circle at mouse position (mouseX, mouseY) with a width of 100 similar to Step 6
  circle(mouseX, mouseY, 100);
}