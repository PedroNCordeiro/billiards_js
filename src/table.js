function Table(directions) {

	this.cushions = [{}, {}, {}, {}];

	this.setup = function() {
		this.width = 800;
		this.height = 400;

		this.cushionLength = 10;
	}

	this.createSprites = function() {

		this.cushions[directions.UP] = createSprite(this.width/2, this.cushionLength/2, this.width, this.cushionLength);
		this.cushions[directions.UP].shapeColor = color(0, 80, 20);
		this.cushions[directions.UP].immovable = true;

		this.cushions[directions.LEFT] = createSprite(this.cushionLength/2, this.height/2, this.cushionLength, this.height);
		this.cushions[directions.LEFT].shapeColor = color(0, 80, 20);	
		this.cushions[directions.LEFT].immovable = true;

		this.cushions[directions.RIGHT] = createSprite(this.width - this.cushionLength/2, this.height/2, this.cushionLength, this.height);
		this.cushions[directions.RIGHT].shapeColor = color(0, 80, 20);	
		this.cushions[directions.RIGHT].immovable = true;

		this.cushions[directions.DOWN] = createSprite(this.width/2, this.height - this.cushionLength/2, this.width, this.cushionLength);
		this.cushions[directions.DOWN].shapeColor = color(0, 80, 20);	
		this.cushions[directions.DOWN].immovable = true;
	}

	this.drawCushions = function() {
		drawSprite(this.cushions[directions.UP]);
		drawSprite(this.cushions[directions.LEFT]);
		drawSprite(this.cushions[directions.RIGHT]);
		drawSprite(this.cushions[directions.DOWN]);
	}

	this.draw = function() {
		fill(0, 120, 20);
		rect(0, 0, this.width, this.height);

		this.drawCushions();
	}

	this.setup();
	this.createSprites();
}