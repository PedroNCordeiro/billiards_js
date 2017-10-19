function GameManager(config) {
	
	// Check if every ball is still
	this.EveryBallStill = function() {
		for (var i = 0; i < config.balls_array.length; i++) {
			if (config.balls_array[i].sprite.getSpeed() > 0) {
				return false;
			}
		}
		return true;
	}

	this.MakeShot = function() {

		var v1 = createVector(mouseX, mouseY);
		
		var white_ball_position = config.balls_array[config.balls.WHITE_IDX].sprite.position;
		var v2 = createVector(white_ball_position.x, white_ball_position.y);
		var shotAngle = v1.angleBetween(v2);
		// shotAngle = degrees(shotAngle);

		console.log(v1);
		console.log(v2); 
		console.log(shotAngle);

		// shotAngle = -180;
		config.balls_array[config.balls.WHITE_IDX].sprite.setSpeed(6, shotAngle);
	}

	var canPlay = true;
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

		// Player input
		if (mouseIsPressed && canPlay) {
			canPlay = false;
			this.MakeShot();
		}

		if (this.EveryBallStill()) {
			canPlay = true;
		}

	}
}