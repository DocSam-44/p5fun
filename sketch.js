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

// function setup() {
//   createCanvas(600, 600);
// }

// let circles = [];

// function draw() {
//   background("royalblue");

//   // Big red circle
//   fill("red");
//   circle(200, 200, 100);

//   // Small green circle while mouse pressed
//   if (mouseIsPressed) {
//     fill("green");
//     circle(200, 200, 30);

//     circles.push([mouseX, mouseY]);
//   } else {
//     circles = [];
  
//     console.log(circles);
//   }

//   // Draw saved circles
//   for (let i = 0; i < circles.length; i++) {
//     circle(circles[i][0], circles[i][1], 50);
//   }

//   // Triangle only while key pressed
//   if (keyIsPressed) {
//     fill("yellow");
//     triangle(100, 100, 150, 200, 250, 100);
//   }
// }

/*
let circles = [];
let particleSystem;

function setup() {
  createCanvas(600, 600);

  // Create particle system
  particleSystem = new ParticleSystem();
}

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

    // Move particle emitter to green circle
    particleSystem.origin = createVector(200, 200);

    // Add particles
    for (let i = 0; i < 3; i++) {
      particleSystem.addParticle();
    }
  } else {
    circles = [];
  }

  // Draw saved circles
  fill(255);
  for (let i = 0; i < circles.length; i++) {
    circle(circles[i][0], circles[i][1], 50);
  }

  // Run particles
  particleSystem.run();

  // Triangle only while key pressed
  if (keyIsPressed) {
    fill("yellow");
    triangle(100, 100, 150, 200, 250, 100);
  }
}

// ================= PARTICLE SYSTEM =================

class ParticleSystem {
  constructor() {
    this.particles = [];
    this.origin = createVector(200, 200);
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

class Particle {
  constructor(position) {
    this.position = position;

    // Random movement
    this.velocity = createVector(
      random(-1, 1),
      random(-3, -1)
    );

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

    // Glowing green particles
    fill(0, 255, 100, this.lifespan);

    circle(this.position.x, this.position.y, 10);
  }

  isDead() {
    return this.lifespan <= 0;
  }
}
  */

let particleSystem;

function setup() {
  createCanvas(600, 600);

  // Create particle system
  particleSystem = new ParticleSystem();
}

function draw() {
  background("royalblue");

  // Big red circle
  fill("red");
  circle(200, 200, 100);

  // Small green circle while mouse pressed
  if (mouseIsPressed) {
    fill("green");
    circle(200, 200, 30);

    // Move particle emitter to green circle
    particleSystem.origin = createVector(200, 200);

    // Add particles
    for (let i = 0; i < 3; i++) {
      particleSystem.addParticle();
    }
  }

  // Run particles
  particleSystem.run();

  // Triangle only while key pressed
  if (keyIsPressed) {
    fill("yellow");
    triangle(100, 100, 150, 200, 250, 100);
  }
}

// ================= PARTICLE SYSTEM =================

class ParticleSystem {
  constructor() {
    this.particles = [];
    this.origin = createVector(200, 200);
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

class Particle {
  constructor(position) {
    this.position = position;

    this.velocity = createVector(
      random(-1, 1),
      random(-3, -1)
    );

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

  isDead() {
    return this.lifespan <= 0;
  }
}