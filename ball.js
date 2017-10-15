function Ball(x, y) {

	this._createSprite = function(x, y) {
		this.sprite = createSprite(x, y, this.size, this.size);
		this.sprite.setCollider('circle');
		this.draw = function() {
			fill(255, 0, 0);
			ellipse(x, y, this.size);
		}
	}

	this.draw = function() {
		drawSprite(this.sprite);
	}

	this.size = 40;
	this._createSprite(x, y);
}