var inc = 0.1;
var scl = 20;
var cols, rows, slider;

var fr;

var adjust = 0;
var xoff1 = 0;
var colour = 0;
 
var zoff = 0;
var particles = [];

var flowfield;

function setup() {
  //slider = createSlider(5, 40, 10);
  frameRate(30);
  colorMode(HSB);
  var width = window.innerWidth;
  var height = window.innerHeight;
  createCanvas (width, height);
  background(0, 0, 0);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');

  flowfield = new Array(cols * rows)

  for (var i = 0; i < 2048; i++){
    particles[i] = new Particle();
  }

}
function draw() {
  //background(0, 0.01);
  //scl = slider.value();
  cols = floor(width / scl);
  rows = floor(height / scl);
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1.5);
      flowfield[index] = v;
      xoff += inc;
      //push();
      //translate(x * scl, y * scl);
      //rotate(v.heading());
      //line(0, 0, scl, 0);
      //pop();
    }
    yoff += inc;
    zoff += 0.002;
  }
  var l = particles.length;
  for (var i = 0; i < l; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }

  fr.html(floor(frameRate()));

}

function colors() {
  colour = noise(xoff1) * 360 / 10000 + adjust;
  xoff1 += 0.01;
  if (random() < 0.0001) {
    adjust += 5;
  }

  if (colour > 360) {
    colour = 0;
    adjust = 0;
  }
}