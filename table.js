function Table() {

	this.setup = function() {
		this.width = 800;
		this.height = 400;

		this.cushionLength = 40;
	}

	this.createSprites = function() {
		this.topCushion = createSprite(this.width/2, this.cushionLength/2, this.width, this.cushionLength);
		this.topCushion.shapeColor = color(0, 80, 20);	

		this.leftCushion = createSprite(this.cushionLength/2, this.height/2, this.cushionLength, this.height);
		this.leftCushion.shapeColor = color(0, 80, 20);	

		this.rightCushion = createSprite(this.width - this.cushionLength/2, this.height/2, this.cushionLength, this.height);
		this.rightCushion.shapeColor = color(0, 80, 20);	

		this.bottomCushion = createSprite(this.width/2, this.height - this.cushionLength/2, this.width, this.cushionLength);
		this.bottomCushion.shapeColor = color(0, 80, 20);	
	}

	this.drawCushions = function() {
		drawSprite(this.topCushion);
		drawSprite(this.leftCushion);
		drawSprite(this.rightCushion);
		drawSprite(this.bottomCushion);
	}

	this.draw = function() {
		fill(0, 120, 20);
		rect(0, 0, this.width, this.height);

		this.drawCushions();
	}

	this.setup();
	this.createSprites();
}