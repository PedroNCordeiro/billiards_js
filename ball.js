function Ball(x, y) {

	this.size = 10;
	this.speed = 10;

	this._createSprite = function(x, y) {
		this.sprite = createSprite(x, y, this.size, this.size);
		this.sprite.setCollider('circle');
		this.sprite.maxSpeed = 5;
		this.sprite.setSpeed(2, -180);
	}

	this.draw = function() {
		drawSprite(this.sprite);
	}
	
	this._createSprite(x, y);
}