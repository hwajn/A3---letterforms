

let distribution = new Array(360);
function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
  
  translate(400,900);
  push();
  rotate(-45);

  



push();
scale(5);
  for(var i = 0; i <2000000; i++) {
    let r = random(30);
    ellipse(r*35, r/1000, 2000, 2000);
  scale(.999);
  stroke(255,255,255);
  strokeWeight(2);
fill(0);
  }
pop();






}
  









