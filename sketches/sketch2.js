// =============================================
// sketch2.js — your second source sketch
// Paste your source sketch code here and start hacking
// =============================================

/*
let img1;
let img2;

function preload() {
  img1 = loadImage('img1.jpg');
  img2 = loadImage('img2.jpg');
}

function setup() {
  createCanvas(600, 400);
  imageMode(CENTER);
}

function draw() {
  background(0);

  // moving line
  let lineY = frameCount % height;

  // animated square size
  let squareSize = map(
    noise(frameCount * 0.02),
    0,
    1,
    120,
    220
  );

  let squareX = width / 1.7;
  let squareY = height / 1.5;

  // square boundaries
  let topEdge = squareY - squareSize / 2;

  // ===== DRAW IMAGE 1 INSIDE SQUARE =====

  image(img1, squareX, squareY, squareSize, squareSize);

  // ===== REVEAL IMAGE 2 AS LINE PASSES =====

  // how much of square has been crossed by line
  let revealHeight = constrain(lineY - topEdge, 0, squareSize);

  if (revealHeight > 0) {

    copy(
      img2,

      // source image crop
      0,
      0,
      img2.width,
      map(revealHeight, 0, squareSize, 0, img2.height),

      // destination on canvas
      squareX - squareSize / 2,
      squareY - squareSize / 2,
      squareSize,
      revealHeight
    );
  }

  // ===== WHITE MOVING LINE =====

  stroke(255);
  strokeWeight(7);
  line(0, lineY, width, lineY);
}
*/

// let img1;
// let img2;
// let squareX = width / 6.7;
// let squareY = height / 1.5;


// function setup() {
//   createCanvas(600, 400);
//   imageMode(CENTER);
// }

// function draw() {
//   background(0);

//   let lineY = frameCount % height;

//   let squareSize = map(
//     noise(frameCount * 0.02),
//     0,
//     1,
//     120,
//     220
//   );

//   let topEdge = squareY - squareSize / 2;

//   // draw base image
//   image(img1, squareX, squareY, squareSize, squareSize);

//   // reveal second image
//   let revealHeight = constrain(lineY - topEdge, 0, squareSize);

//   if (revealHeight > 0) {
//     copy(
//       img2,
//       0,
//       0,
//       img2.width,
//       img2.height * (revealHeight / squareSize),
//       squareX - squareSize / 2,
//       squareY - squareSize / 2,
//       squareSize,
//       revealHeight
//     );
//   }

//   stroke(255);
//   strokeWeight(7);
//   line(0, lineY, width, lineY);
// }

// console.log(img1, img2);

// ! commented out the above code to try and locate why the images wont move to the right
// let img1;
// let img2;

// function preload() {
//   img1 = loadImage("img1.jpg");
//   img2 = loadImage("img2.jpg");
// }

// function setup() {
//   createCanvas(600, 400);
//   imageMode(CENTER);
// }

/*
function draw() {
  background(0);

  // moving line
  let lineY = frameCount % height;

  // position (TRY mouseX if you want interaction)
  let squareX = width/10;   // LEFT SIDE
  let squareY = height * 0.6;

  // size animation
  let squareSize = map(
    noise(frameCount * 0.02),
    0,
    1,
    180,
    320
  );

  let topEdge = squareY - squareSize / 2;

  // ===== BASE IMAGE (img1) =====
  image(img1, squareX, squareY, squareSize, squareSize);

  // ===== REVEAL IMAGE (img2) =====
  let revealHeight = constrain(lineY - topEdge, 0, squareSize);

  if (revealHeight > 0) {
    copy(
      img2,
      0,
      0,
      img2.width,
      img2.height * (revealHeight / squareSize),
      squareX - squareSize / 2,
      squareY - squareSize / 2,
      squareSize,
      revealHeight
    );
  }

  // ===== WHITE LINE =====
  stroke(255);
  strokeWeight(5);
  line(0, lineY, width, lineY);
}
*/

// function draw() {
//   background(255,0,0);

//   let squareX = mouseX;
//   let squareY = height / 2;

//   fill(255);
//   circle(squareX, squareY, 50);
// }


// just realized i was editing the wrong file so the below code is new and what i tried to do here is complete in the remix to take the ideas in sketch1 and what i had intended for here

// * I messed with this for the challenge in class and put it here because I was able to use it to influence my sketch one to create what become the remix
/*
function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
}

function draw() {
  background(90);

  // -------------------------
  // ELEMENT 1: oscillating circle
  // self-generating value: sin()
  // -------------------------
  
  let circleX = map(
    sin(frameCount * 0.03), // oscillates -1 to 1
    -1,
    1,
    50,
    width - 50
  );

  fill(100, 200, 255);
  noStroke();
  circle(circleX, 100, 60);

  // -------------------------
  // ELEMENT 2: noisy square
  // self-generating value: noise()
  // -------------------------

  let squareSize = map(
    noise(frameCount * 0.02), // smooth random values
    0,
    1,
    40,
    180
  );

  // RULE 4:
  // map circle position to square color
  let squareColor = map(circleX, 50, width - 50, 50, 255);

  fill(squareColor, 50, 255);

  rect(width/1.7, height / 1.5, squareSize, squareSize);

  // -------------------------
  // ELEMENT 3: moving line
  // self-generating value: frameCount
  // -------------------------

  let lineY = frameCount % height;

  // RULE 5:
  // line only appears if BOTH conditions are true:
  // 1. circle is on the right half
  // 2. square is bigger than 100

  if (circleX > width / 7 && squareSize > 90) {
    stroke(355);
    strokeWeight(7);
    line(0, lineY, width, lineY);
  }
}

*/
// ! since for sketch2 i needed to employ code from the p5js site i focused on using the shapes code and applied it to the challenge in class on thursday
// ! i was very confused on how to do the challenge so i asked ai "can you exmplain what this is asking and provide an example". Once it had done so i manipulated the code to figure out how each section functioned and changed it to be what I wanted (colour, position, size, parameters for effect, added components)

let circleColor;
// * function setup() always sets up the canvas
function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
// *circle colour
  circleColor = color(100, 200, 225);
}

function draw() {
  background(90);

// *the below code is for the circle that moves from side to side. it also uses the sin cosine functions from the p5js page but this assignment only asks for one source so i chose the other which felt more vital and prominant
  
  let circleX = map(
    sin(frameCount * 0.03),
    -1,
    1,
    50,
    width - 50
  );

  fill(circleColor);
  noStroke();
  circle(circleX, 100, 60);

// *this used 'noise' to make the square fluctuate in size

  let squareSize = map(
    noise(frameCount * 0.02),
    0,
    1,
    40,
    180
  );
// *this creates a link so that the line is affected by the sixe of the square
  let squareColor = map(circleX, 50, width - 50, 50, 255);

  fill(squareColor, 50, 255);
  rect(width / 1.7, height / 1.5, squareSize, squareSize);


// *the code below makes it so that is the square goes below the specified size (i.e., isn't above '90'), the line will not appear/be visiable
  let lineY = frameCount % height;

  if (circleX > width / 7 && squareSize > 90) {
    stroke(355);
    strokeWeight(7);
    line(0, lineY, width, lineY);
  }
}

// * I added this so that I could change the colour of the circle by pressing a key on my keyboard
// * changes colour from blue to green

function keyPressed() {
  circleColor = color(0, 255, 0); // green
}