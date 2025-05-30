let coloreOre, coloreMinuti, coloreSecondi;
let prevH, prevM, prevS;

let rotateStartTime = 0;
let rotating = false;
let currentRotation = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	coloreOre = color(random(255), random(255), random(255));
	coloreMinuti = color(random(255), random(255), random(255));
	coloreSecondi = color(random(255), random(255), random(255));
	
	prevH = hour();
	prevM = minute();
	prevS = second();
	
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	const h = hour();
	const m = minute();
	const s = second();

	
	// cambia colore solo se cambia l'ora
	if (h !== prevH) {
		coloreOre = color(random(255), random(255), random(255));
		prevH = h;
	}
	
	// cambia colore solo se cambia il minuto
	if (m !== prevM) {
		coloreMinuti = color(random(255), random(255), random(255));
		prevM = m;
	
		// avvia la rotazione della stella
		rotating = true;
		rotateStartTime = millis();
	}
	
	// cambia colore  solo se cambia il secondo
	if (s !== prevS) {
		coloreSecondi = color(random(255), random(255), random(255));
		prevS = s;
	}
	
	background(255);
	
	translate(width/2, height/2); // il centro è ora l'origine
	
	
	// // stella a 10 punte (sfondo rotante)
	push();

	if (rotating) {
	let elapsed = millis() - rotateStartTime;
	let progress = constrain(elapsed / 1000, 0, 1); // progressione da 0 a 1 in 1 secondo
	currentRotation = progress * TWO_PI;

	if (progress >= 1) {
		rotating = false;
		currentRotation = 0;
	}
	}

	rotate(currentRotation);

	fill(240);
	noStroke();
	beginShape();

	let raggi = [220, 100];

	for (let i = 0; i < 20; i++) {
	let ang = i * PI / 10;
	let r = raggi[i % 2];
	let x = cos(ang) * r;
	let y = sin(ang) * r;
	vertex(x, y);
	}

	endShape(CLOSE);
	pop();
	
	
	noStroke();
	
	
	for(let i=0; i<60; i++){ // tacchette
		push()
		rotate(i/60*TWO_PI)
		
		if(i % 5 == 0){
			fill(255)
			ellipse(0,-180,15)
		} else {
			fill(100)
			ellipse(0,-180,5)
		}
		pop()
		
	}
	
	//ore
	push()
	
	const angoloOre = (hour() /12 + minute() / 60 / 12) * TWO_PI
	rotate(angoloOre) // ruotare di 360° ma in radiandi quindi 2pgreco TWO_PI (=TAU)
	fill(coloreOre)
	rect(-8,20,16,-140)
	
	pop()
	
	
	//minuti
	push() //chiudere tra push e pop la trasformazione
	
	const angoloMinuti = (minute() /60 + second() / 60 / 60) * TWO_PI
	rotate(angoloMinuti) // ruotare di 360° ma in radiandi quindi 2pgreco TWO_PI (=TAU)
	fill(coloreMinuti)
	rect(-8,20,12,-180)
	pop()
	
	
	//secondi
	push() //chiudere tra push e pop la trasformazione
	
	const angoloSecondi = second() /60 * TWO_PI 
	rotate(angoloSecondi) // ruotare di 360° ma in radiandi quindi 2pgreco TWO_PI (=TAU)
	fill(coloreSecondi)
	rect(-3, 20, 6, -200)
	ellipse(0,-180,30)
	pop()
	
	//centro
	fill(255)
	ellipse(0,0,5)
	
	
	
	
	
	
	
	console.log(TAU)

}
