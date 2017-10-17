function Config() {
	 	
	function Directions() {
		this.UP = 0;
		this.LEFT = 1;
		this.RIGHT = 2;
		this.DOWN = 3; 
	}

	this.directions = new Directions();

	this.balls = [{}, {}];

	this.table = {};
}