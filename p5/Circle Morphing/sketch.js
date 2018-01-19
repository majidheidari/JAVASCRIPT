let cirPath = [];
let triPath = [];
let spacing = 10;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  let radius = 100;

  for (let a = 0; a < 120; a += spacing) {
    let x = radius * cos(a);
    let y = radius * sin(a);
    let v = createVector(x, y);
    cirPath.push(v);

  }


}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  stroke(0);
  noFill();
  beginShape();
  for (let i = 0; i < cirPath.length; i++) {
    let v = cirPath[i];
    vertex(v.x, v.y);
  }
  endShape();
}
