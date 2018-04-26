let picture;
let canvas;
let ctx;


function handlingInput() {
	let input = document.getElementById('picture').value;
	let source = 'img/' + input;
	picture = new Image();
	picture.src = source;
	creatingCanvas();
	picture.onload = function() {
 	ctx.imageSmoothingEnabled = false;
 	ctx.drawImage(picture, 0, 0, 
 				  picture.naturalWidth, picture.naturalHeight);
 	};
}

function creatingCanvas() {
	canvas = document.createElement('canvas');
	let position = document.getElementById('button');
	canvas.appendChild(position);
	ctx = canvas.getContext('2d');
	resizingCanvas();	
	console.log(canvas);
}

function resizingCanvas() {
	canvas.width = picture.naturalWidth;
	canvas.height = picture.naturalHeight;
}

