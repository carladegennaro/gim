function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {

	background(20, 33, 40)
	
	rotateX(mouseY*-0.01) //ruota sull'asse x ma si muove suolle y
	rotateY(mouseX*-0.01)
	
	
	//box(100) //cubo 

	let dimensione=1000


	for(let i=0; i<1000; i++){ //CICLO da 0, quantià, per incrementare la variabile di 1
		// per evitare di di fare copia incolla 100 vote si fa un ciclo

		let gl = random(10, 150) //min compreso e max nono compreso
		let gx = random(-dimensione, dimensione) //dimensione canvas
		let gy = random(-dimensione, dimensione-gl) 
		let gz = random(-dimensione, dimensione) //dimensione canvas
		
		stroke(255, random(100, 255))
		strokeWeight(random(1, 4))

		line(gx, gy, gz, gx, gy+gl, gz)	//=line(100, 50, 100, 150)
		}
	
	
	
	let audioPlayer;

	function setup() {
		  
		  noCanvas();
		
			audioPlayer = createAudio('/assets/piano-loop.mp3');
		
		  
		  audioPlayer.attribute(
			'aria-description',
			'The playback speed of this audio player is controlled by the position of the mouse. The further to the right the mouse is, the faster the audio will play.'
		  );
		
		  audioPlayer.showControls();
		}
		
		function draw() {
		  
		  audioPlayer.speed(1 + mouseX / windowWidth);
		}



}


	
	

