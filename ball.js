function Ball(x, y, speed) {

	this.size = 30;
	this.speed = speed;

	this._createSprite = function(x, y) {
		this.sprite = createSprite(x, y, this.size, this.size);
		this.sprite.setCollider('circle');
		this.sprite.maxSpeed = 5;
		this.sprite.setSpeed(this.speed, -180);
		// this.sprite.debug = true;
	
		this.sprite.draw = function() {
			fill(this.shapeColor);
			ellipse(0, 0, this._internalHeight);
		}
	}


	this.draw = function() {
		drawSprite(this.sprite);
	}
	
	this._createSprite(x, y);
}