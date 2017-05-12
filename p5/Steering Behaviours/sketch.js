var font;

function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
  createCanvas (800,300);
//  textFont(font);
  textSize(128);
  fill(255);
  noStroke();
  text('Brano',10,200);
}

function draw() {
  background(51);

}
