var myCanvas;
var points = [];
var maxPoints = 5;
var backgroundColor = [242, 237, 230];
//var warmColor = [229, 155, 103];
var objects = [];
var particleMaxAge = 10000;
var particleDefaultSpeed = 3;


function fullCanvas() {
	myCanvas = createCanvas(window.innerWidth,window.innerHeight);
	myCanvas.parent("pageWrapper");
	myCanvas.canvas.classList.add("zm1");
	//myCanvas.canvas.width = window.innerWidth;
	//myCanvas.canvas.height = window.innerHeight;
}

function setup() {
	//myCanvas = createCanvas(window.innerWidth,window.innerHeight);
	//myCanvas.parent("pageWrapper");
	fullCanvas();

	//myCanvas.canvas.classList.add("zm1");

	

}

function draw() {
	background(backgroundColor[0], backgroundColor[1], backgroundColor[2]);
	if (mouseX != 0 || mouseY != 0) {
		points.unshift({x:mouseX,y:mouseY});

		var particleStartPoint = {
			x: random(width),
			y: random(height)
		}
		objects.push(
		new Particle(
			new Vector(particleStartPoint.x, particleStartPoint.y), 
			(new Vector(Math.random()-0.5,Math.random()-0.5))
			.setMagnitude(particleDefaultSpeed)
		)
	);
		
	}

	

	if (points.length > maxPoints) {
		stroke(0);
		for (var i = 0; i < maxPoints; i++) {
			
			line(points[i].x,points[i].y,points[i+1].x,points[i+1].y);
		}
		
		points.splice(maxPoints, 1);
	}

	for (var i = 0; i < objects.length; i++) {
		if (objects[i].age >= particleMaxAge) {
			objects.splice(i,1);
		}
	}
	for (var i = 0; i < objects.length; i++) {
		objects[i].update();
		
	}
	moveParticlesFromMouse();
	
}


function moveParticlesFromMouse(){
	var mouseVector = new Vector(mouseX, mouseY);
	for (var i = 0; i < objects.length; i++) {
		//find vector between mouse and particle
		var movement =objects[i].position.subtract(mouseVector);

		//set particle movement vector to default
		objects[i].movement = movement.setMagnitude(particleDefaultSpeed);
	}
}



function Particle(position, movement){
	this.position = position;
	this.movement = movement;
	this.age = 0;
}

Particle.prototype.update = function() {



	if (this.position.x < 0 || 
		this.position.x > width || 
		this.position.y < 0 || 
		this.position.y > height) {

		this.age = particleMaxAge;
	}else {

		var movementSpeedVector = 
			this.movement.multiply(this.getSpeed());

		//move the particle
		this.position = this.position.add(movementSpeedVector);

		//draw the particle
		push();
			stroke(0);
			strokeWeight(this.getSize());
			point(this.position.x, this.position.y);
		pop();
	}

	this.age++;
};

Particle.prototype.getSpeed = function() {
	return 1 + (this.age/25);
}

Particle.prototype.getSize = function() {
	return 2+(this.age/40);
};


window.onresize = function(){
	fullCanvas();
}



