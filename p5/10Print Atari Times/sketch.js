let x = 0;
let y = 0;
let help = 1;
let colour = 0;
let spacing = 10;

function setup() {
  createCanvas (400,400);
  background(0);
  colorMode(HSB);

}

function draw() {
  stroke(colour, 255, 255) 
  colour += 2;
  if (random() < 0.0001) {
    colour += 5;
  }
  if(colour >= 360) colour = 0;
  if(random(1) < 0.5){
  	line(x, y, x + spacing, y + spacing);
  } else {
  	line(x, y + spacing, x + spacing, y);
  }
  x = x + spacing * help;
  if(x >= 400 || x <= -10) {
  	y += spacing;
  	help *= -1;
  }
  if(y > 400) {
  	background(0);
  	y = 0;
  }

}
