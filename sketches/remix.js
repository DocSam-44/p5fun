// =============================================
// remix.js — your combined sketch
// This is where sketch1 and sketch2 come together
// into something new
// =============================================
let img1;
let img2;
let particleSystem;

let stations = [
  { x: 200, y: 200 },
  { x: 350, y: 200 }
];

function preload() {
  img1 = loadImage('dev/anime_-smile_with_-sharp_-teeth-jpg-p63eqau3yjbxnj6r.jpg');
  img2 = loadImage('dev/st,small,507x507-pad,600x600,f8f8f8.u2.jpg');
}

function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
  particleSystem = new ParticleSystem();
}

function draw() {
  background(0);

  // =======================
  // SCALE CONTROL (CHANGE THIS)
  // =======================
  let imgScale = 1.6;

  // =======================
  // MOVING LINE
  // =======================
  let lineY = frameCount % height;

  // =======================
  // IMAGE SIZE
  // =======================
  let squareSize = map(
    noise(frameCount * 0.02),
    0,
    1,
    120,
    220
  );

  let scaledSize = squareSize * imgScale;

  let squareX = width / 2;
  let squareY = height / 1.5;

  // =======================
  // BASE IMAGE (img1)
  // =======================
  image(img1, squareX, squareY, scaledSize, scaledSize);

  // =======================
  // REVEAL IMAGE (img2)
  // =======================
  let topEdge = squareY - scaledSize / 2;
  let revealHeight = constrain(lineY - topEdge, 0, scaledSize);

  if (revealHeight > 0) {
    copy(
      img2,
      0, 0,
      img2.width,
      img2.height * (revealHeight / scaledSize),
      squareX - scaledSize / 2,
      squareY - scaledSize / 2,
      scaledSize,
      revealHeight
    );
  }

  // =======================
  // STATIONS
  // =======================
  fill("red");
  noStroke();
  for (let s of stations) {
    circle(s.x, s.y, 100);
  }

  // =======================
  // BLACK CIRCLES (ON PRESS)
  // =======================
  if (mouseIsPressed) {
    fill("black");
    noStroke();
    for (let s of stations) {
      circle(s.x, s.y, 30);
    }

    // particles
    for (let s of stations) {
      particleSystem.origin = createVector(s.x, s.y);

      for (let i = 0; i < 3; i++) {
        particleSystem.addParticle();
      }
    }
  }

  particleSystem.run();

  // =======================
  // WHITE LINE
  // =======================
  stroke(255);
  strokeWeight(5);
  line(0, lineY, width, lineY);
}


// =======================
// PARTICLE SYSTEM
// =======================

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

  isDead() {
    return this.lifespan <= 0;
  }
}