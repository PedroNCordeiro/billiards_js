function Ball(x, y, color) {

	this.size = 30;

	this._createSprite = function(x, y) {
		this.sprite = createSprite(x, y, this.size, this.size);
		this.sprite.setCollider('circle');
	
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