class Snowflake {

  constructor(tempX, tempY, img) {
    let x = tempX || random(windowWidth);
    let y = tempY || random(-10, -100);
    this.img = img;
    this.xOff = 0;
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector();
    this.r = getRandomSize();
    this.angle = random(TWO_PI);
    this.dir = (random(1) > 0.5) ? 1 : -1;
  }

  applyForce(force) {
    let f = force.copy();
    f.mult(this.r);
    this.acc.add(f);
  }

  update() {
    this.xOff = sin(this.angle) * this.r;
    this.vel.add(this.acc);
    this.vel.limit(this.r * 0.2);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.angle += this.dir * this.vel.mag() / 300;
  }

  isOffScreen() {
    return (this.pos.y > (windowHeight + this.r));
  }

  render() {
    push();
    imageMode(CENTER);
    translate(this.pos.x + this.xOff, this.pos.y);
    rotate(this.angle);
    image(this.img, 0, 0, this.r, this.r);
    pop();

  }
}
