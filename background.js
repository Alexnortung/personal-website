var myCanvas;
var points = [];
var maxPoints = 5;


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
	background(242, 237, 230);
	if (mouseX != 0 && mouseY != 0) {
		points.unshift({x:mouseX,y:mouseY});
	}
	if (points.length > maxPoints) {
		for (var i = 0; i < maxPoints; i++) {
			line(points[i].x,points[i].y,points[i+1].x,points[i+1].y);
		}
		
		points.splice(maxPoints, 1);
	}
	
}

function loop0 () {
	
	
}




window.onresize = function(){
	fullCanvas();
}
