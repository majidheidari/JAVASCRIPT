let angle = 0;
let w = 24;
let ma;
let maxD;

function setup() {
  createCanvas(400, 400, WEBGL);
  ma = atan(cos(QUARTER_PI));
  maxD = dist(0, 0, 200, 200);
}

function draw() {
  background(100);
  ortho(-400, 400, 400, -400, 0, 1000);
  ambientLight(164,148,128);
  //var dirX = (mouseX / width - 0.5) * 2;
  //var dirY = (mouseY / height - 0.5) * 2;
  //directionalLight(250, 250, 250, dirX, dirY, 0.25);
  //directionalLight(0, 0, 255, 0, -1 , 0);
  let dirX = (104 / width - 0.5) * 2;
  let dirY = (543 / height - 0.5) * 2;
  directionalLight(150, 150, 150, dirX, dirY , 0.25);

  rotateX(-ma);
  rotateY(-QUARTER_PI)﻿

  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -PI, PI);
      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, 100, 300));
      translate(x - width / 2, 0, z - height / 2);
      ambientMaterial(225, 200, 200);
      noStroke();
      box(w, h, w);
      //rect(x - width / 2 + w / 2, 0, w - 2, h);
      pop();
    }
  }

  angle -= 0.1;
}
