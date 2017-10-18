var myCanvas;
var backgroundColor = [240, 230, 230];
var objectMaxAge = 10000;
var objects = [];
var layer1 = [];
var layer2 = [];
var unicornsPerMinute = 120;
var tick = 0;
var unicornsThisMinute = 0;

function fullCanvas() {
	myCanvas = createCanvas(windowWidth, windowHeight);
	//console.log(myCanvas);
	myCanvas.parent("pageWrapper");
	myCanvas.canvas.classList.add("zm1");

}

function setup() {
	fullCanvas();
}

function windowResized() {
	fullCanvas();
}

function draw(){
	background(backgroundColor[0], backgroundColor[1], backgroundColor[2]);

	


	/*
	push();
		textSize(64);
		text("🦄🌈🌈", 120,500);
	pop();
	*/

	if (tick % 30 == 0) {
		var unicornObj = new Unicorn(
			new Vector(windowWidth, random(windowHeight)),
			new Vector(random(-5) -5,0),
			48
			//+Math.random() * 16
			//+random(16)
		);
		layer1.push(unicornObj);
		objects.push(unicornObj);
	}
	tick++;

	for (var i = layer2.length - 1; i >= 0; i--) {
		if (layer2[i].age >= objectMaxAge) {
			layer2.splice(i,1);
		} else {
			layer2[i].draw();
		}
		
	}
	for (var i = layer1.length - 1; i >= 0; i--) {
		if (layer1[i].age >= objectMaxAge) {
			layer1.splice(i,1);
		} else {
			layer1[i].draw();
		}
	}

	for (var i = objects.length - 1; i >= 0; i--) {
		if (objects[i].age >= objectMaxAge) {
			objects.splice(i,1);
		}
	}


	for (var i = 0; i < objects.length; i++) {
		
		objects[i].update();
		
	}
}




	


function Unicorn(position, movement, size){
	this.position = position;
	this.movement = movement;
	this.age = 0;

	this.size = size;
}

Unicorn.prototype.draw = function() {
	push();
		textSize(this.size);
		text("🦄", this.position.x, this.position.y);
	pop();
}

Unicorn.prototype.update = function() {
	this.age++;

	this.position.addTo(this.movement);

	if (this.position.x<= -86 || this.position.y  <= -86 ||
		this.position.x >= 86 + windowWidth || this.position.y >= 86 + windowHeight
		) {
		this.age = objectMaxAge;
	}
	if (this.age % 5 == 0) {
		var rainbowObj = this.makeRainbow()
		objects.push(rainbowObj);
		layer2.push(rainbowObj);
	}

}

Unicorn.prototype.makeRainbow = function(){
	return new Rainbow(this.position.multiply(1), this.size);
}




function Rainbow(position, size){
	this.position = position;
	this.age = 0;

	this.size = size;
}

Rainbow.prototype.draw = function() {
	push();
		textSize(this.size);
		text("🌈", this.position.x, this.position.y);
	pop();
}

Rainbow.prototype.update = function() {
	this.age++;
	if (this.age >= 20) {
		this.size -= 0.5;

		if (this.size<= 0) {
			this.age = objectMaxAge;
		}
	}
}