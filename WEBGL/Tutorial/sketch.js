let angle = 0;

//https://gist.github.com/simon-tiger/06e865e3012e854e555c0c97757c74d5

let graphics;

function setup() {
  createCanvas (400,400, WEBGL);

  graphics = createGraphics(200, 200);
}

function draw() {
  background(0);
  ambientLight(100);
  directionalLight(255, 255, 255, 0, 0, 1);

  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.7);
  box(100);

  angle += 0.03;
}
