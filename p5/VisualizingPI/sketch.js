let loadedDigits;
let digitsOfPi = [];
let countDigit = [];
let width = 400;
let height = 400;
let w = width / 10;
let index = 0;

function preload() {
	loadedDigits = loadStrings("digitsOfPi.txt");
	digitsOfPi = split(loadedDigits, '');
}

function setup() {
  createCanvas(width,height);
  background(51);
  noLoop();
}

function draw() {
  for(let i = 0; i < 100; i++) {
  	let currectDigit = digitsOfPi[index];
  	console.log(currectDigit);
  	countDigit[currectDigit]++;
  	index++;
  }	

  for(let i = 0; i < 10; i++) {
  	let x = i * w + w / 2; 
  	let y = height / 2;
  	let d = countDigit[i];
    //console.log(d);
  	ellipse(x, y, d, d);
  }

}
