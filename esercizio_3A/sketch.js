//creare una variabile: let
let posX, posY

let velX, velY
//lascia che posizione x sia 170 (variabile)
//al centro posso fare width/2 ma solo dopo che il canvas sia creato


function setup() {
	createCanvas(500, 500)
	posX = 200
	velX=7
	
	posY =100
	velY=7
}

function draw() { //questa funzione è un ciclo

	console.log(posX) // questo serve per poter aumentare molto la velocità
	posX = posX + velX //+1=velocità posso aumentare o diminuire
	posY = posY + velY //+1=velocità posso aumentare o diminuire
	
	if(posX >= 500){
		velX=-velX
	} else if(posX< 0){
		velX=-velX
	}

	if(posY >= 500){
		velY=-velY
	} else if(posY< 0){
		velY=-velY
	}

	background(0) // se tolgo sfondo si crea la scia
	noStroke()
	
	ellipse(posX, posY, 25)
	
	//se mouse è cliccato, cambia colore : condizione
	// bisogna selezionare cosa è sotto la condizione
	if(mouseIsPressed){
		//fill(mouseX,mouseY,250-mouseY)
		fill(random(255,), random(255), random(255))
		// posso mettere come ultimo mouseX o mouseY cosi da cambiare le dimensioni
	}
	
}

function keyPressed(){

	if(key=='s') {
		//se premo s salvo
		save("immagine.png")
	}
}



