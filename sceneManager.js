var config;
var gameManager;

function setup() {
  config = new Config();
  config.table = new Table(config.directions);
  config.balls[0] = new Ball(200, 200, 7);
  config.balls[1] = new Ball(100, 202, 2);
  config.balls[2] = new Ball(150, 100, 5);

  gameManager = new GameManager(config);

  createCanvas(config.table.width, config.table.height);
}

function draw() {

  gameManager.gameLoop();

  background(255);

  // Table
  config.table.draw();

  // Balls
  for (var i = 0; i < config.balls.length; i++) {
    config.balls[i].draw();
  }
}