function setup() {
  createCanvas(400, 400);

  let boundary = new Rectangle(200, 200, 200, 200);
  let qt = new QuadTree(boundary, 4);
  console.log(qt);

  for (let i = 0; i < 100; i++) {
    let p = new Point(random(width), random(height));
    qt.insert(p);
  }
  background(0);
  qt.show();



}

function draw() {
  //background(51);

}
