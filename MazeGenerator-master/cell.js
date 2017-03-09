
function Cell(x, y) {
  this.x = x;
  this.y = y;
  this.walls = [true, true, true, true];
  this.visited = false;

  this.checkNeighbours = function() {
    var neighbours = [];

    var top = grid[index (x, y-1)]; //zada kazdy susediaci stvorec do array
    var right = grid[index (x+1, y)];//ak index je -1 tak right bude undefined
    var bottom = grid[index (x, y+1)];
    var left = grid[index (x-1, y)];


    if (top && !top.visited) { // ak horny sused nebol visited a nie je undefined, prida sa do array neighbours
      neighbours.push(top);
    }
    if (right && !right.visited) {
      neighbours.push(right);
    }
    if (bottom && !bottom.visited) {
      neighbours.push(bottom);
    }
    if (left && !left.visited) {
      neighbours.push(left);
    }

    if (neighbours.length > 0) {
      var r = floor(random(0, neighbours.length)); //vytvori nahodne cislo od nula po pocet susedov
      return neighbours[r];
    } else {
      return undefined; //pravdepodobne by dalo undefined ajktak, ale len pre istotu
    }


  }
  this.highlight = function() {
    var i = this.x*w;
    var j = this.y*w;
    noStroke();
    fill(130, 130, 130);
    rect(i, j, w, w);

  }


  this.show = function () {
    var i = this.x*w; //pozicia krat sirka
    var j = this.y*w;
    stroke(0);
    if ( this.walls[0]) {
      line(i,j,i+w,j); //top
    }
    if ( this.walls[1]) {
      line(i+w,j,i+w,j+w); //right
    }
    if ( this.walls[2]) {
      line(i+w,j+w,i+w,j+w); //bottom
    }
    if ( this.walls[3]) {
      line(i,j+w,i,j); //left
    }

    if (this.visited){
      fill(220, 220, 220,100);
      noStroke();
      rect(i, j, w, w);
    }
  }


}


//Here's a simple optimization for the drawing part: Since any cell's left edge is gonna be its neighbor's right edge, and likewise for top/bottom (edge cases aside), you only need to draw bottom and right.
