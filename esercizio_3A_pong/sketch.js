let paddleLeftX = 20;
let paddleLeftY = 200;

let paddleRightX = 380;
let paddleRightY = 200;

let paddleSpeed = 2;
let paddleHeight = 80;
let paddleWidth = 10;

let leftScore = 0;
let rightScore = 0;

let ballPosX = 200;
let ballPosY = 200;
let ballSpeedX = 0;
let ballSpeedY = 0;
let ballSize = 10;

let ballColor;

let trailLayer;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  fill(255);
  noStroke();
  textSize(40);
  textAlign(CENTER);
  noLoop();

  ballColor = color(random(255), random(255), random(255));
  trailLayer = createGraphics(width, height); // Crea un layer per la scia
  trailLayer.noStroke();
}

function draw() {
  background(0); // Sfondo nero

  // Disegna la scia della pallina
  trailLayer.fill(ballColor);
  trailLayer.ellipse(ballPosX, ballPosY, ballSize);

  // Mostra il layer con la scia sopra lo sfondo
  image(trailLayer, 0, 0);

  // Disegna le racchette (senza scia, bianche)
  fill(255);
  rect(paddleLeftX, paddleLeftY, paddleWidth, paddleHeight);
  rect(paddleRightX, paddleRightY, paddleWidth, paddleHeight);

  // Disegna il punteggio
  text(leftScore, width * 0.25, height * 0.1);
  text(rightScore, width * 0.75, height * 0.1);

  // Muove la pallina
  ballPosX += ballSpeedX;
  ballPosY += ballSpeedY;

  // Gestisce la collisione con la racchetta sinistra
  let leftCollisionLeft = paddleLeftX - paddleWidth / 2 - ballSize / 2;
  let leftCollisionRight = paddleLeftX + paddleWidth / 2 + ballSize / 2;
  let leftCollisionTop = paddleLeftY - paddleHeight / 2 - ballSize / 2;
  let leftCollisionBottom = paddleLeftY + paddleHeight / 2 + ballSize / 2;

  if (
    ballPosX >= leftCollisionLeft &&
    ballPosX <= leftCollisionRight &&
    ballPosY >= leftCollisionTop &&
    ballPosY <= leftCollisionBottom
  ) {
    ballSpeedX = -ballSpeedX; // Rimbalza la pallina
    ballSpeedY = (ballPosY - paddleLeftY) / 20; // Cambia velocità verticale
  }

  // Gestisce la collisione con la racchetta destra
  let rightCollisionLeft = paddleRightX - paddleWidth / 2 - ballSize / 2;
  let rightCollisionRight = paddleRightX + paddleWidth / 2 + ballSize / 2;
  let rightCollisionTop = paddleRightY - paddleHeight / 2 - ballSize / 2;
  let rightCollisionBottom = paddleRightY + paddleHeight / 2 + ballSize / 2;

  if (
    ballPosX >= rightCollisionLeft &&
    ballPosX <= rightCollisionRight &&
    ballPosY >= rightCollisionTop &&
    ballPosY <= rightCollisionBottom
  ) {
    ballSpeedX = -ballSpeedX; // Rimbalza la pallina
    ballSpeedY = (ballPosY - paddleRightY) / 20; // Cambia velocità verticale
  }

  // Gestisce il punteggio e reset della pallina
  if (ballPosX < 0) {
    rightScore += 1;
    resetBall();
  } else if (ballPosX > width) {
    leftScore += 1;
    resetBall();
  } else if (ballPosY < 0 || ballPosY > height) {
    ballSpeedY = -ballSpeedY; // Rimbalza verticalmente
  }

  // Movimento della racchetta sinistra
  let leftDownPressed = keyIsDown(83);
  let leftUpPressed = keyIsDown(87);
  let leftMove = 0;

  if (leftDownPressed) leftMove += paddleSpeed;
  if (leftUpPressed) leftMove -= paddleSpeed;

  paddleLeftY = constrain(paddleLeftY + leftMove, paddleHeight / 2, height - paddleHeight / 2);

  // Movimento della racchetta destra
  let rightDownPressed = keyIsDown(DOWN_ARROW);
  let rightUpPressed = keyIsDown(UP_ARROW);
  let rightMove = 0;

  if (rightDownPressed) rightMove += paddleSpeed;
  if (rightUpPressed) rightMove -= paddleSpeed;

  paddleRightY = constrain(paddleRightY + rightMove, paddleHeight / 2, height - paddleHeight / 2);
}

// Reset della pallina con velocità casuale
function resetBall() {
  ballPosX = width / 2;
  ballPosY = height / 2;
  ballSpeedX = random([-3, 3]);
  ballSpeedY = random([-1, 1]);
  ballColor = color(random(255), random(255), random(255)); // Cambia colore
}

function mousePressed() {
  if (!isLooping()) {
    resetBall();
    loop();
  }
}