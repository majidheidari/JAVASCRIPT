let angle = 0;

let Pablo;
let cam;

function preload() {
	Pablo = loadImage('img/Pablo.jpg');

}

function setup() {
  createCanvas (400,400, WEBGL);
  cam = createCapture(VIDEO);
  cam.size(400, 400);
  cam.hide();

}

function draw() {
  background(51);	

  let x = mouseX - width / 2;
  let y = mouseY - height / 2;
  let v = createVector(x, y, 0);
  v.normalize(); 

  directionalLight(255, 255, 255, v);
  ambientLight(150);

  rotateY(angle);
  angle += 0.01;


  texture(cam);
  plane(100);
  noStroke();
}
