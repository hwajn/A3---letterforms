//https://editor.p5js.org/aferriss/sketches/BJTw7MJG7


let birch;
let points;
let word = "L";
let x;
let y;
let size = 820;


function preload(){
  birch = loadFont('grotesk.ttf');
}

function setup() {
  createCanvas(1000, 1000);
  x = (width/2) -300;
  y = (height/2)+250;
  points = birch.textToPoints(word, x, y, size);
  
  
}

function draw() {
  background(1000);
  
  textFont(birch);
  textSize(size);
  fill(220);
  // text(word, x, y);
  
  for(let i = 0; i < points.length; i++){
    let r = random(25);
    let c = noise(i + frameCount * 0.01 ) * 255;
    fill(50, 50,50);


    
    let pt = points[i];
    
    let nx = noise(i * 10.1 + 0.01) * r - 5.0;
    let ny = noise(i * 10.2 + 0.01) * r - 5.0;

    // pt.x += noise(i * 10.1 + frameCount * 0.01) * 2 - 1.0;
    // pt.y += noise(i * 10.2 + frameCount * 0.01) * 2 - 1.0;
    
    
    noFill();

    stroke(255, 102, 0);
    let steps = 200;
    for (let i = 0; i <= steps; i++) {
      let t = i / steps;

      let tx = bezierTangent(85, r, r, 15, t);
      let ty = bezierTangent(20, 10, 90, r, t);
      let a = atan2(ty, tx);
      a -= HALF_PI;
      rect(pt.x,pt.y,pt.x/3,pt.y/5);
    }
  }
  
}