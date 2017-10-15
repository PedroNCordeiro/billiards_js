var table;
var ball;

function setup() {
  table = new Table();
  ball = new Ball(100, 100);
  createCanvas(table.width, table.height);
}

function draw() {
  background(255);

  table.draw();
  ball.draw();
}