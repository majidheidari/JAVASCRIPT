
let len = 100;
let tree = [];
let leaves = [];
let generation = 0;

function setup() {
  createCanvas (400,400);
  let a = createVector(width / 2, height);
  let b = createVector(width / 2, height - len);
  root = new Branch(a, b);

  tree[0] = root;
  
}

function draw() {
  background(51);
  
  for(let branch of tree) {
  	branch.show();
  }

  for(let leaf of leaves) {
  	leaf.draw();
  }
}

function mousePressed() {
	for(let i = tree.length - 1; i >= 0; i--) {
		if(!tree.finished) {
			tree.push(tree[i].grow(PI/4));
			tree.push(tree[i].grow(-PI/4));
			
		}
	}
	generation++;

	if(generation == 5) {
		for(let i = 0; i < tree.length;i++) {
			if(!tree.finished) {
				let leaf = new Leaf(tree[i].end.copy());
				leaves.push(leaf);
			}
		}
	}

}