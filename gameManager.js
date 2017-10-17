function GameManager(config) {
	
	this.gameLoop = function() {

		// Collision detection
		for (var i = 0; i < config.balls.length; i++) {
			
			// Make balls bounce on cushions
			for (var j = 0; j < config.table.cushions.length; j++) {
				config.balls[i].sprite.bounce(config.table.cushions[j]);	
			}

			// Make balls bounce on other balls
			for (var j = i+1; j < config.balls.length; j++) {
				config.balls[i].sprite.bounce(config.balls[j].sprite);	
			}
		}
	}
}