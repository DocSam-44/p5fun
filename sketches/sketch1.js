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
*/
// ! all the above code came with the file for the initial set up to make sure it functions properly. I copied it again below in my code I am actually using. The below that got commented out are multiple failed attempts. I ended up figuring out that the reason nothing was appearing/changing with each save is because i messed up my code changes in this file and then accidently switched files which was why none of my saves were working. I ended up having to go back to a previous commit where everything got messed up and then it was correct.
/*
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
/*
let particleSystem;

function setup() {
  createCanvas(600, 600);
  particleSystem = new ParticleSystem();
}

// stations 150px apart
let stations = [
  { x: 200, y: 200 },
  { x: 350, y: 200 }
];

function draw() {
  background("#c59563");

  // ===== PERMANENT RED CIRCLES =====
  fill("white");
  for (let s of stations) {
    circle(s.x, s.y, 100);
  }

  // ===== GREEN + PARTICLES ONLY WHILE MOUSE PRESSED =====
  if (mouseIsPressed) {

    for (let s of stations) {

      // green circle
      fill("blue");
      circle(s.x, s.y, 30);

      // particles from green circle
      particleSystem.origin = createVector(s.x, s.y);

      for (let i = 0; i < 3; i++) {
        particleSystem.addParticle();
      }
    }
 image(img, 200, 500);
image(img, 350, 500);
  }

  let img;

function preload() {
  img = loadImage(".vscode/st,small,507x507-pad,600x600,f8f8f8.u2.jpg");
}

  particleSystem.run();

  if (keyIsPressed) {
    fill("yellow");
    triangle(150, 100, 150, 200, 250, 100);
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

// ================= PARTICLE =================

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


*/
// *the below code is where the actually functioning and used code begins 
// !the comments in the remix file are very in depth and there is more overlap between it and this sketch so the comments will be more simplified

let particleSystem;
let img;

// * below code makes sure to input the image so it is there for when the sketch starts to run
function preload() {
  // this is the image of the creepy smile
  img = loadImage("st,small,507x507-pad,600x600,f8f8f8.u2.jpg");
}

function setup() {
  createCanvas(600, 600);
  particleSystem = new ParticleSystem();
}

// *makes sure positions are maintained without having to use duplicate code to specify for each which saves time
let stations = [
  { x: 200, y: 200 },
  { x: 350, y: 200 }
];

function draw() {
  background("black");

  // *this creates the red circles which i turned into the eyes.
  fill("red");
  for (let s of stations) {
    circle(s.x, s.y, 100);
  }

//  *the code below pastes the black pupils and the green particles that come out of them as well as specifying position
  if (mouseIsPressed) {
    for (let s of stations) {

      fill("black");
      circle(s.x, s.y, 30);

      particleSystem.origin = createVector(s.x, s.y);

      for (let i = 0; i < 3; i++) {
        particleSystem.addParticle();
      }
    }
  }

  particleSystem.run();

// *this was added to center the image because it was not cooperating and kept trying to stay on the far right and too low
  if (img) {
    let centerX = (stations[0].x + stations[1].x) / 2;
    let imgY = stations[0].y + 80;

    image(img, centerX - 140, imgY, 300, 270);
  }
}

// *this code below is the bulk of how the particles function i used from the p5js wesite is employed including the specification of their positions so that they look like they are coming out of the eyes under clas particle

class ParticleSystem {
  constructor() {
    this.particles = [];
    this.origin = createVector(200, 200);
  }

  addParticle() {
    this.particles.push(new Particle(this.origin.copy()));
  }
// *this connects to the isdead() function at the end of this code to remove the 'dead' particles whose lifespan has reached zero and makes it so it isn't still running in the background by just being invisible
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
    // particle positioning
class Particle {
  constructor(position) {
    this.position = position;

    this.velocity = createVector(random(-1, 1), random(-3, -1));
    this.acceleration = createVector(0, 0.02);
    this.lifespan = 255;
  }
    // particle speed and rate of disappearance after time of first appearance i.e., lifespan

  // *the code below is very useful for making sure the particles diappear a set amount of time after appearing so they don't get stuck as a build up on the screen. It wouldn't look as cool if they stayed
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 4;
  }
// * makes the particles green and uses lifespan function so that the particels fade after a set time
  display() {
    noStroke();
    fill(0, 255, 100, this.lifespan);
    circle(this.position.x, this.position.y, 10);
  }
// * returns the sketch's particles back to original state once lifespan value hits zero
  isDead() {
    return this.lifespan <= 0;
  }
}


