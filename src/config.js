function Config() {
	 	
	function Directions() {
		this.UP = 0;
		this.LEFT = 1;
		this.RIGHT = 2;
		this.DOWN = 3; 
	}

	function Balls() {
		this.WHITE_IDX = 0;
		this.YELLOW_IDX = 1;
		this.RED_IDX  = 2;

		this.WHITE_COLOR = color(255, 255, 255);
		this.YELLOW_COLOR = color(0, 255, 255);
		this.RED_COLOR = color(255, 0, 0);
	}

	this.directions = new Directions();
	this.balls = new Balls();

	this.balls_array = [{}, {}, {}];
	this.table = {};

	this.friction = .985;

	this.MAX_BALL_SPEED = 100;
	this.MIN_BALL_SPEED = .2;
}