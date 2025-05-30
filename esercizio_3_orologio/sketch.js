function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	
	background(200)
	
	
	let h = hour()
	let m = minute()
	let s = second()
	
	//per avere lo zero prima del numero
	if(h<10) {
		h = "0" + h
	}
	
	if(m<10) {
		m = "0" + m
	}
	
	if(s<10) {
		s = "0" + s
	}

	let ora = h + ":" + m + ":" + s

	
	textAlign(CENTER, CENTER)
	
	textSize(100)
	
	fill(255)
	
	text(ora, width/2, height/2)

	
	
	
	console.log(ora)

}
