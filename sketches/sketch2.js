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


// just realized i was editing the wrong file so the below code is new and what i tried to do here is complete in the remix