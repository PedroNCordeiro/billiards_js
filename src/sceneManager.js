var config;
var gameManager;

function DrawLineHelper() {
  white_ball_position = config.balls_array[config.balls.WHITE_IDX].sprite.position;

  line(mouseX, mouseY, white_ball_position.x, white_ball_position.y);
}

function setup() {
  config = new Config();
  config.table = new Table(config.directions);

  config.balls_array[config.balls.WHITE_IDX] = new Ball(200, 200, config.balls.WHITE_COLOR);
  config.balls_array[config.balls.YELLOW_IDX] = new Ball(100, 202, config.balls.YELLOW_COLOR);
  config.balls_array[config.balls.RED_IDX] = new Ball(150, 100, config.balls.RED_COLOR);

  gameManager = new GameManager(config);

  createCanvas(config.table.width, config.table.height);
}

function draw() {

  gameManager.GameLoop();

  background(255);

  // Table
  config.table.draw();

  // Balls
  for (var i = 0; i < config.balls_array.length; i++) {
    config.balls_array[i].draw();
  }

  // Draw line between mouse and white ball
  DrawLineHelper();
}