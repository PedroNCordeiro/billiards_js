function GameManager(config) {
	
	this.gameLoop = function() {

		// Loop through every ball
		for (var i = 0; i < config.balls.length; i++) {
			
			// Collision detection - Bouncing on each cushion
			for (var j = 0; j < config.table.cushions.length; j++) {
				config.balls[i].sprite.bounce(config.table.cushions[j]);	
			}

			// Collision detection - Bouncing on each other ball
			for (var j = i+1; j < config.balls.length; j++) {
				config.balls[i].sprite.bounce(config.balls[j].sprite);	
			}

			// Apply friction
			var currentSpeed = config.balls[i].sprite.getSpeed();
			var currentDirection = config.balls[i].sprite.getDirection();

			config.balls[i].sprite.setSpeed(currentSpeed * config.friction, currentDirection);
		}

	}
}