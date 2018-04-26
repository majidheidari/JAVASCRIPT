function Leaf(pos) {
	this.pos = pos;

	this.draw = function() {
		fill(50, 255, 50, 100);
		noStroke()
		ellipse(this.pos.x, this.pos.y, 8, 8);
	}
}