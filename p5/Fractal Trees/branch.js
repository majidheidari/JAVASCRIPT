function Branch(start, end) {
	this.start = start;
	this.end = end;
	this.drawn = false;

	this.show = function() {
		stroke(255);
		line(this.start.x, this.start.y, this.end.x, this.end.y);
	}

	this.grow = function(angle) {
		let dir = p5.Vector.sub(this.end, this.start);
		dir.rotate(angle);
		dir.mult(0.67);
		var newEnd = p5.Vector.add(this.end, dir);
		let branch = new Branch(this.end, newEnd);
		this.drawn = true;
		return branch;
	}
}

