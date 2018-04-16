let snow = [];
let gravity;
let spriteSheet;
let textures = [];

function preload() {
  spriteSheet = loadImage('f32.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 0.001);

  for (let x = 0; x < spriteSheet.width; x += 32) {
    for (let y = 0; y < spriteSheet.height; y += 32) {
      let img = spriteSheet.get(x, y, 32, 32);
      textures.push(img);
    }
  }


  for (let i = 0; i < 400; i++) {
    let x = random(windowWidth);
    let y = random(-30, windowHeight)
    let design = random(textures);
    snow.push(new Snowflake(x, y, design))
  }


}

function draw() {
  background(0);
  //snow.push(new Snowflake());
  for (flake of snow) {
    flake.applyForce(gravity);
    flake.update();
    flake.render();
  }

  for (let j = snow.length; j < 400; j++) {
    x = random(windowWidth);
    y = random(-20, -100);
    let design = random(textures);
    snow.push(new Snowflake(x, y, design));
  }

  for (let i = snow.length - 1; i >= 0; i--) {
    if (snow[i].isOffScreen()) snow.splice(i, 1);
  }
}

function getRandomSize() {
  while (true) {
    let r1 = random(1);
    let r2 = random(1);
    if (r2 > r1) return r1 * 72;
  }
}
