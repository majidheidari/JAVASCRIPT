

function setup() {
  createCanvas (400,400);
  angleMode(DEGREES);
  strokeWeight(4);
}

function draw() {
  background(51);

  translate(200, 200);
  rotate(-90);

  let hr = hour();
  let mnt = minute();
  let scnd = second();

  noFill();

  push();
  let endhr = map(hr % 12, 0 , 11, 0, 360);
  let G = map(endhr, 0, 360, 115, 0);
  stroke(255, G, 255);
  arc(0, 0, 300, 300, 0, endhr);

  rotate(endhr);
  line(0, 0, 50, 0);
  pop();

  push();
  let endmnt = map(mnt, 0 , 60, 0, 360);
  G = map(endmnt, 0, 360, 255, 130);
  stroke(0, G, 255);
  arc(0, 0, 250, 250, 0, endmnt);

  rotate(endmnt);
  line(0, 0, 75, 0);
  pop();

  push();
  let endscnt = map(scnd, 0 , 59, 0, 360);
  G = map(endscnt, 0, 360, 0, 145);
  stroke(255, G, 0);
  arc(0, 0, 200, 200, 0, endscnt);

  rotate(endscnt);
  line(0, 0, 85, 0);
  pop();

  stroke(255);
  point(0, 0);
  //fill(255);
  //noStroke();
  //text(hr + ':' + mnt + ':' + scnd, 10, 200);

}
