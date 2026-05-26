// the setup & draw functions are 'reserved functions' in p5js, meaning p5js uses it internally. notice there are no function calls in this script, yet the code runs in the page! (p5 calls these automatically)
/*
function setup() {
  createCanvas(600, 600);
}
let circles = []

function draw() {
  background("royalblue");
  circle(200,200,100);
    fill('green');
// x-position, y-position, size


if(mouseIsPressed){
circle(200,200,30);
    fill('red');


    circles.push([mouseX, mouseY])
    console.log(circles)
}

if(keyIsPressed){
triangle(100, 100, 150, 200, 250, 100);
fill(yellow)

}



}

*/

/*
function setup() {
  createCanvas(600, 600);
}

let circles = [];

function draw() {
  background("royalblue");

  // Big green circle
  fill("red");
  circle(200, 200, 100);

  // Small red circle while mouse pressed
  if (mouseIsPressed) {
    fill("green");
    circle(200, 200, 30);

    circles.push([mouseX, mouseY]);
    console.log(circles);
  }

  for (i = 0; i < circles.length; i++) {
circle(circles[i][0], circles[i][1], 50)

  }

  // Triangle only while key pressed
  if (keyIsPressed) {
    fill("yellow");
    triangle(100, 100, 150, 200, 250, 100);
  }
}

*/

function setup() {
  createCanvas(600, 600);
}

let circles = [];

function draw() {
  background("royalblue");

  // Big red circle
  fill("red");
  circle(200, 200, 100);

  // Small green circle while mouse pressed
  if (mouseIsPressed) {
    fill("green");
    circle(200, 200, 30);

    circles.push([mouseX, mouseY]);
  } else {
    circles = [];
  
    console.log(circles);
  }

  // Draw saved circles
  for (let i = 0; i < circles.length; i++) {
    circle(circles[i][0], circles[i][1], 50);
  }

  // Triangle only while key pressed
  if (keyIsPressed) {
    fill("yellow");
    triangle(100, 100, 150, 200, 250, 100);
  }
}
