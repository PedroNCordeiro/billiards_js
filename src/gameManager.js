function GameManager(config) {
	
	var canPlay = true;
	this.shotPower = 5;

	// Check if every ball is still
	this.EveryBallStill = function() {
		for (var i = 0; i < config.balls_array.length; i++) {
			if (config.balls_array[i].sprite.getSpeed() > 0) {
				return false;
			}
		}
		return true;
	}

	this.Shoot = function() {
		var whiteBallPosition = config.balls_array[config.balls.WHITE_IDX].sprite.position;
		delta_x = mouseX - whiteBallPosition.x;
		delta_y = mouseY - whiteBallPosition.y;
		var angle = degrees(atan2(delta_y, delta_x));
		config.balls_array[config.balls.WHITE_IDX].sprite.setSpeed(this.shotPower, angle);
	}

	this.GetShotPower = function() {
		return this.shotPower;
	}

	this.GameLoop = function() {

		// Loop through every ball
		for (var i = 0; i < config.balls_array.length; i++) {

			// Collision detection - Bouncing on each cushion
			for (var j = 0; j < config.table.cushions.length; j++) {
				config.balls_array[i].sprite.bounce(config.table.cushions[j]);	
			}

			// Collision detection - Bouncing on each other ball
			for (var j = i+1; j < config.balls_array.length; j++) {
				config.balls_array[i].sprite.bounce(config.balls_array[j].sprite);	
			}

			// Apply friction
			var currentSpeed = config.balls_array[i].sprite.getSpeed();
			var currentDirection = config.balls_array[i].sprite.getDirection();

			var newSpeed = currentSpeed * config.friction;

			// Limit speed minimum
			if (newSpeed < config.MIN_BALL_SPEED) {
				newSpeed = 0;
			}

			config.balls_array[i].sprite.setSpeed(newSpeed, currentDirection);

		}

		// Player input - Arrow keys to change shot power
		if (canPlay) {
			if (keyWentDown(UP_ARROW)) {
				this.shotPower += 1
			}
			else if (keyWentDown(DOWN_ARROW)) {
				this.shotPower -= 1
			}
		}

		// Player input - Mouse press to make shot
		if (mouseIsPressed && canPlay) {
			canPlay = false;
			this.Shoot();
		}

		if (this.EveryBallStill()) {
			canPlay = true;
		}

	}
}