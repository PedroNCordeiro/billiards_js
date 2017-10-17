var config;
var gameManager;

function setup() {
  config = new Config();
  config.table = new Table(config.directions);
  config.balls[0] = new Ball(200, 200, 5);
  config.balls[1] = new Ball(100, 202, 0);

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