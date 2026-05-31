// =============================================
// remix.js — your combined sketch
// This is where sketch1 and sketch2 come together
// into something new
// =============================================

// let x = 10;
// let y = 10;
// let xspeed = 5;
// let yspeed = 2;

// let button;

// function setup() {
//   createCanvas(400, 400);

//   button = createButton("reset sketch");
//   button.position(10, 10);
//   button.mousePressed(resetSketch);
// }

// function draw() {
//   background(220);

//   ellipse(x, y, 20, 20);

//   x += xspeed;
//   y += yspeed;

//   if (x >= width || x <= 0) xspeed *= -1;
//   if (y >= height || y <= 0) yspeed *= -1;
// }

// function resetSketch() {
//   x = 10;
//   y = 10;
//   xspeed = 5;
//   yspeed = 2;
// }



// let img1;
// let img2;
// let particleSystem;

// let stations = [
//   { x: 200, y: 200 },
//   { x: 350, y: 200 }
// ];

// function preload() {
//   img1 = loadImage('dev/anime_-smile_with_-sharp_-teeth-jpg-p63eqau3yjbxnj6r.jpg');
//   img2 = loadImage('dev/st,small,507x507-pad,600x600,f8f8f8.u2.jpg');
// }

// function setup() {
//   createCanvas(600, 600);
//   imageMode(CENTER);
//   particleSystem = new ParticleSystem();
// }

// function draw() {
//   background(0);


//   // SCALE CONTROL

//   let imgScale = 1.6;

//   // MOVING LINE

//   let lineY = frameCount % height;

 
//   // IMAGE SIZE

//   let squareSize = map(
//     noise(frameCount * 0.02),
//     0,
//     1,
//     120,
//     220
//   );

//   let scaledSize = squareSize * imgScale;

//   let squareX = width / 2;
//   let squareY = height / 1.5;

//   // =======================
//   // BASE IMAGE (img2 FIRST)
//   // =======================
//   image(img2, squareX, squareY, scaledSize, scaledSize);

//   // =======================
//   // REVEAL IMAGE (img1 SECOND)
//   // =======================
//   let topEdge = squareY - scaledSize / 2;
//   let revealHeight = constrain(lineY - topEdge, 0, scaledSize);

//   if (revealHeight > 0) {
//     copy(
//       img1,
//       0, 0,
//       img1.width,
//       img1.height * (revealHeight / scaledSize),
//       squareX - scaledSize / 2,
//       squareY - scaledSize / 2,
//       scaledSize,
//       revealHeight
//     );
//   }

//   // =======================
//   // STATIONS
//   // =======================
//   fill("red");
//   noStroke();
//   for (let s of stations) {
//     circle(s.x, s.y, 100);
//   }

//   // =======================
//   // BLACK CIRCLES (ON PRESS)
//   // =======================
//   if (mouseIsPressed) {
//     fill("black");
//     noStroke();
//     for (let s of stations) {
//       circle(s.x, s.y, 30);
//     }

//     // particles
//     for (let s of stations) {
//       particleSystem.origin = createVector(s.x, s.y);

//       for (let i = 0; i < 3; i++) {
//         particleSystem.addParticle();
//       }
//     }
//   }

//   particleSystem.run();

//   // =======================
//   // WHITE LINE
//   // =======================
//   stroke(255);
//   strokeWeight(5);
//   line(0, lineY, width, lineY);
// }


// // =======================
// // PARTICLE SYSTEM
// // =======================

// class ParticleSystem {
//   constructor() {
//     this.particles = [];
//     this.origin = createVector(0, 0);
//   }

//   addParticle() {
//     this.particles.push(new Particle(this.origin.copy()));
//   }

//   run() {
//     for (let i = this.particles.length - 1; i >= 0; i--) {
//       let p = this.particles[i];
//       p.update();
//       p.display();

//       if (p.isDead()) {
//         this.particles.splice(i, 1);
//       }
//     }
//   }
// }

// class Particle {
//   constructor(position) {
//     this.position = position.copy();
//     this.velocity = createVector(random(-1, 1), random(-3, -1));
//     this.acceleration = createVector(0, 0.02);
//     this.lifespan = 255;
//   }

//   update() {
//     this.velocity.add(this.acceleration);
//     this.position.add(this.velocity);
//     this.lifespan -= 4;
//   }

//   display() {
//     noStroke();
//     fill(0, 255, 100, this.lifespan);
//     circle(this.position.x, this.position.y, 10);
//   }

//   isDead() {
//     return this.lifespan <= 0;
//   }
// }

/*
// let x = 10;
// let y = 10;
// let xspeed = 5;
// let yspeed = 2;

// let button;

// let img1;
// let img2;
// let particleSystem;

// let stations = [
//   { x: 200, y: 200 },
//   { x: 350, y: 200 }
// ];

// function preload() {
//   img1 = loadImage('dev/anime_-smile_with_-sharp_-teeth-jpg-p63eqau3yjbxnj6r.jpg');
//   img2 = loadImage('dev/st,small,507x507-pad,600x600,f8f8f8.u2.jpg');
// }

// function setup() {
//   createCanvas(600, 600);
//   imageMode(CENTER);

//   particleSystem = new ParticleSystem();

//   button = createButton("reset sketch");
//   button.position(10, 10);
//   button.mousePressed(resetSketch);
// }

// function draw() {
//   background(0);

//   // IMAGE SYSTEM

//   let imgScale = 1.6;
//   let lineY = frameCount % height;

//   let squareSize = map(noise(frameCount * 0.02), 0, 1, 120, 220);
//   let scaledSize = squareSize * imgScale;

//   let squareX = width / 2;
//   let squareY = height / 1.5;

//   image(img2, squareX, squareY, scaledSize, scaledSize);

//   let topEdge = squareY - scaledSize / 2;
//   let revealHeight = constrain(lineY - topEdge, 0, scaledSize);

//   if (revealHeight > 0) {
//     copy(
//       img1,
//       0, 0,
//       img1.width,
//       img1.height * (revealHeight / scaledSize),
//       squareX - scaledSize / 2,
//       squareY - scaledSize / 2,
//       scaledSize,
//       revealHeight
//     );
//   }

//   // STATIONS

//   fill("red");
//   noStroke();
//   for (let s of stations) {
//     circle(s.x, s.y, 100);
//   }


//   // PARTICLES

//   particleSystem.run();


//   // LINE

//   stroke(255);
//   strokeWeight(5);
//   line(0, lineY, width, lineY);
// }


// // RESET BUTTON

// function resetSketch() {
//   x = 10;
//   y = 10;
//   xspeed = 5;
//   yspeed = 2;

//   particleSystem.particles = [];
// }


// // PARTICLE SYSTEM

// class ParticleSystem {
//   constructor() {
//     this.particles = [];
//     this.origin = createVector(0, 0);
//   }

//   addParticle() {
//     this.particles.push(new Particle(this.origin.copy()));
//   }

//   run() {
//     for (let i = this.particles.length - 1; i >= 0; i--) {
//       let p = this.particles[i];
//       p.update();
//       p.display();

//       if (p.isDead()) {
//         this.particles.splice(i, 1);
//       }
//     }
//   }
// }

// class Particle {
//   constructor(position) {
//     this.position = position.copy();
//     this.velocity = createVector(random(-1, 1), random(-3, -1));
//     this.acceleration = createVector(0, 0.02);
//     this.lifespan = 255;
//   }

//   update() {
//     this.velocity.add(this.acceleration);
//     this.position.add(this.velocity);
//     this.lifespan -= 4;
//   }

//   display() {
//     noStroke();
//     fill(0, 255, 100, this.lifespan);
//     circle(this.position.x, this.position.y, 10);
//   }

//   isDead() {
//     return this.lifespan <= 0;
//   }
// }
*/
// ! the above code blocks are what i tried to add a reset button to from the p5js site we were provided but it also added the ball boucing around the canvas so it will be fixed in the below code

/*
// let x = 10;
// let y = 10;
// let xspeed = 5;
// let yspeed = 2;

// let button;

// let img1;
// let img2;
// let particleSystem;

// let stations = [
//   { x: 200, y: 200 },
//   { x: 350, y: 200 }
// ];

// function preload() {
//   img1 = loadImage('dev/anime_-smile_with_-sharp_-teeth-jpg-p63eqau3yjbxnj6r.jpg');
//   img2 = loadImage('dev/st,small,507x507-pad,600x600,f8f8f8.u2.jpg');
// }

// function setup() {
//   createCanvas(600, 600);
//   imageMode(CENTER);

//   particleSystem = new ParticleSystem();

//   button = createButton("reset sketch");
//   button.position(10, 10);
//   button.mousePressed(resetSketch);
// }

// function draw() {
//   background(0);

//   let imgScale = 1.6;
//   let lineY = frameCount % height;

//   let squareSize = map(noise(frameCount * 0.02), 0, 1, 120, 220);
//   let scaledSize = squareSize * imgScale;

//   let squareX = width / 2;
//   let squareY = height / 1.5;

//   image(img2, squareX, squareY, scaledSize, scaledSize);

//   let topEdge = squareY - scaledSize / 2;
//   let revealHeight = constrain(lineY - topEdge, 0, scaledSize);

//   if (revealHeight > 0) {
//     copy(
//       img1,
//       0, 0,
//       img1.width,
//       img1.height * (revealHeight / scaledSize),
//       squareX - scaledSize / 2,
//       squareY - scaledSize / 2,
//       scaledSize,
//       revealHeight
//     );
//   }

//   // STATIONS

//   fill("red");
//   noStroke();
//   for (let s of stations) {
//     circle(s.x, s.y, 100);
//   }


//   // PARTICLES

//   particleSystem.run();


//   // LINE

//   stroke(255);
//   strokeWeight(5);
//   line(0, lineY, width, lineY);
// }


// // RESET BUTTON

// function resetSketch() {
//   x = 10;
//   y = 10;
//   xspeed = 5;
//   yspeed = 2;

//   particleSystem.particles = [];
// }


// // PARTICLE SYSTEM

// class ParticleSystem {
//   constructor() {
//     this.particles = [];
//     this.origin = createVector(0, 0);
//   }

//   addParticle() {
//     this.particles.push(new Particle(this.origin.copy()));
//   }

//   run() {
//     for (let i = this.particles.length - 1; i >= 0; i--) {
//       let p = this.particles[i];
//       p.update();
//       p.display();

//       if (p.isDead()) {
//         this.particles.splice(i, 1);
//       }
//     }
//   }
// }

// class Particle {
//   constructor(position) {
//     this.position = position.copy();
//     this.velocity = createVector(random(-1, 1), random(-3, -1));
//     this.acceleration = createVector(0, 0.02);
//     this.lifespan = 255;
//   }

//   update() {
//     this.velocity.add(this.acceleration);
//     this.position.add(this.velocity);
//     this.lifespan -= 4;
//   }

//   display() {
//     noStroke();
//     fill(0, 255, 100, this.lifespan);
//     circle(this.position.x, this.position.y, 10);
//   }

//   isDead() {
//     return this.lifespan <= 0;
//   }
// }
*/
// * nothing is working so i went back to the original code above at the top

// !finally figured out working reset button and made it positioned at the bottom of the canvas so it wasn't overlapped with a4-remix text; code below now


let img1;
let img2;
let particleSystem;

let stations = [
  { x: 200, y: 200 },
  { x: 350, y: 200 }
];

let button;

let t = 0;
// *the preload function allows me to add my smile images that are stored under the dev file
// *the preload function also makes sure the images are there before the run through of the 'setch' starts. My images were not load initially so i asked ai to help me identify the reasoning and it said that they were trying to load simultaneously. It helped explain that before setup() runs, it waits for preload() to finish to stop that issue.
function preload() {
  img1 = loadImage('dev/anime_-smile_with_-sharp_-teeth-jpg-p63eqau3yjbxnj6r.jpg');
  img2 = loadImage('dev/st,small,507x507-pad,600x600,f8f8f8.u2.jpg');
}
// *this is part of the initial provided code to make sure the code presents properly by creating the canvas
function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
// *this is when i start to input the particles from the p5js website code from sketch1.js
  particleSystem = new ParticleSystem();
// *this is where i tried added the reset button (which ended up working) before i realized that the rubric specified the keypressed function. I did end up needing google and ai to help me figure out to encorporate this into my code because when i initially used the code from google, the button appeared but it didn't so anything. I asked ai what the problem is and it told me i put in the wrong spot (not under draw() like it should be)
  button = createButton("reset sketch");
  button.position(10, height + 10);
  button.mousePressed(resetSketch);
}
// *this is also part of the code that is initially provided and ended up seeming most important because i forgot a few times to make sure my code was within this function and then my sketch would break
function draw() {
  background(0);
fill(133);
textSize(16);
// *this is one of the codes needing to make the reset button be a keypressed() function too. this adds a label to the sketch to let the user know that clicking the 'r' button will make the sketch reset
text("Press 'R' to reset the sketch or click the button below", 12, 35);
  //  manual time
  t++;
// * I used the square of fluctuating size from my sketch 2 and inputed the images over it. this leads to the bouncing look of the smiles. I also used the code below to specify the scale, center the image, and put it at the height I wanted in respect to the 'eyes'
  let imgScale = 1.6;

  // moving line now uses t
  // *this code is meant to have the line that moves down the sketch work as a timer that resets when it reaches the bottom of the sketch
  let lineY = t % height;

  let squareSize = map(noise(t * 0.02), 0, 1, 120, 220);
  let scaledSize = squareSize * imgScale;

  let squareX = width / 2;
  let squareY = height / 1.5;

  image(img2, squareX, squareY, scaledSize, scaledSize);

  let topEdge = squareY - scaledSize / 2;
  let revealHeight = constrain(lineY - topEdge, 0, scaledSize);

  if (revealHeight > 0) {
    copy(
      img1,
      0, 0,
      img1.width,
      img1.height * (revealHeight / scaledSize),
      squareX - scaledSize / 2,
      squareY - scaledSize / 2,
      scaledSize,
      revealHeight
    );
  }

  fill("red");
  noStroke();
  for (let s of stations) {
    circle(s.x, s.y, 100);
  }
// *this makes it so that when the mouse is pressed it makes the black pupils of the eyes appear
  if (mouseIsPressed) {
    fill("black");
    noStroke();
    for (let s of stations) {
      circle(s.x, s.y, 30);
    }
// *this makes it so that when the mouse is pressed it makes the black pupils of the eyes have green particles appear out of them
    for (let s of stations) {
      particleSystem.origin = createVector(s.x, s.y);

      for (let i = 0; i < 3; i++) {
        particleSystem.addParticle();
      }
    }
  }

  particleSystem.run();

  stroke(255);
  strokeWeight(5);
  line(0, lineY, width, lineY);
}

// *below is the code for both the reset button and the key press 'r' reset

function resetSketch() {
  particleSystem.particles = [];
  t = 0;
}
function keyPressed() {
  if (key === 'r' || key === 'R') {
    resetSketch();
  }
}

// *below is the the particle system code that actually creates the appearence of the particles

class ParticleSystem {
  constructor() {
    this.particles = [];
    this.origin = createVector(0, 0);
  }

  addParticle() {
    this.particles.push(new Particle(this.origin.copy()));
  }

  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];
      p.update();
      p.display();

      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
}
      // This specifies the location of the particles so it looks like they are coming out of the center of the eyes
class Particle {
  constructor(position) {
    this.position = position.copy();
    this.velocity = createVector(random(-1, 1), random(-3, -1));
    this.acceleration = createVector(0, 0.02);
    this.lifespan = 255;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 4;
  }

  display() {
    noStroke();
    fill(0, 255, 100, this.lifespan);
    circle(this.position.x, this.position.y, 10);
  }
// * this allows for the particles to disappear in the order they appeared so that they don't remain stuck on the screen. eventually their 'lifespan' expires and they vanish and either more appear if you continue to hold down the mouse or they slowly clear off the page
  isDead() {
    return this.lifespan <= 0;
  }
}
