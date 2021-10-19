var bola;
function setup() {
  createCanvas(400,400);
  bola = createSprite (200,200,15,15);
  background("yellow");
}

function draw() {
  if (keyDown("right")) {
    background("red");
  }

}


