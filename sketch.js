var dentro = 0,
	total = 0

function setup() {
	createCanvas(600, 600)
	background(124, 168, 230)
	ellipseMode(RADIUS);
	noFill();
	ellipse(300, 300, 300, 300)
}

const circle = (c, r) => {
	return sqrt(Math.pow(r, 2) - Math.pow((c - 300), 2))
}

function draw() {
	var x = random(0, 600),
		y = random(0, 600)

	noStroke()
	r = map(x,0,600,0,255)
	b = map(y,0,600,0,255)
	fill(r, 118, b)
	ellipse(x, y, 5, 5)
	total = total + 1
	if (x < 300 + circle(y, 300) && y < 300 + circle(x, 300) 
		&& x > 300 - circle(y, 300) && y > 300 - circle(x, 300)) {
		dentro = dentro + 1
	}
	console.log(4*dentro/total)
}

function mousePressed() {
	console.log(mouseX + ',' + mouseY)
	noStroke()
	fill(250, 118, 222)
	total = total + 1
	ellipse(mouseX, mouseY, 5, 5)
	if (mouseX < 300 + circle(mouseY, 300) && mouseY < 300 + circle(mouseX, 300) 
		&& mouseX > 300 - circle(mouseY, 300) && mouseY > 300 - circle(mouseX, 300)) {
		console.log(true)
	} else {
		console.log(false)
	}
}
