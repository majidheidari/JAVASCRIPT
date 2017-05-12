//Depth-first search recursive backtracker
//pseudo code https://en.wikipedia.org/wiki/Maze_generation_algorithm
//based on https://www.youtube.com/watch?v=HyK_Q5rrcr4

var cols, rows;
var w = 20;
var grid = [];
var stack = [];

var current;


function setup() {
  createCanvas(400,400);
  cols = floor(width/w)-1; //floor zabezpecuje int, sirka canvas/sirka stvorca
  rows = floor(height/w);//vyska canvas/sirka stvorca
  frameRate(60);
  //
  for ( var y = 0; y < rows; y++){ //prejde cez vsetky stlpce
    for ( var x = 0; x < cols; x++){  //v kazdom stlpci prejde cez vsetky riadky
      var cell = new Cell (x, y); //vytvori stvorec
      grid.push(cell); //vytvoreny stvorec vlozi do array
    }
  }

  current = grid[0];

}

function index(x, y) {
  if (x < 0 || y < 0 || x > cols-1 || y > rows-1 ) {
    return -1;
  } //ak je na rohu, tak index bude undefined

  return x + y *cols;
}

function draw() {
  background(255);
  for ( var i = 0; i < grid.length; i++){
    grid[i].show(); //ukaze vsetky stvorce
  }
  ciara();
  current.visited = true;
  current.highlight();
    //Step 1
    var next =  current.checkNeighbours();
    if (next) {
      next.visited = true;
    //Step 2
    stack.push(current);

    //Step 3
    remoweWalls(current, next);


    //Step 4
    current = next;


  } else if (stack.length > 0) {
    current = stack.pop();
  }

}

function remoweWalls(a ,b) {
  var i = a.x - b.x; //odcitanie pozicii stvorcov v riadku
  if (i === 1) {//ak sa sucet rovna jedna, odstrani sa lava stena
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (i === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }
  var j = a.y - b.y; //odcitanie pozicii stvorcov v stlpci
  if (j === 1) {//ak sa sucet rovna jedna, odstrani sa horna stena
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (j === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}

  function ciara() {
    line(0,height-1,width-20,height-1);
    noFill();
  }
