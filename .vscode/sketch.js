//https://editor.p5js.org/aferriss/sketches/BJTw7MJG7
//https://p5js.org/reference/#/p5.Font/textToPoints
//https://p5js.org/reference/#/p5/random


let birch;
let bounds;
let points;
let word = "L";
let size = 10;



function preload(){
  birch = loadFont('grotesk.ttf');
  
  textFont(birch);
  textSize(size);
}

function setup() {
  createCanvas(1000, 2000);


  points = birch.textToPoints('L', 0, 0, size, {
    sampleFactor: 5,
    simplifyThreshold: 0
    
  });  
  stroke(.5);
  noFill();
  
  bounds = birch.textBounds(' L ', 0, 0, size);

}

function draw() {
  background(500);

  textFont(birch);
  textSize(size);
  scale(.7,.3);

  beginShape();
  
  translate(100+(-bounds.x * width / bounds.w), -bounds.y * height / bounds.h);
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    let r = random(50);
    let c = noise(i + frameCount) * 300;



    let pt = points[i];
    
    let nx = noise(i * 10) * r - 3.0;
    let ny = noise(i * 10) * r - 3.0;
    
    

    let steps = 300;
    for (let i = 0; i <= steps; i++) {
      let t = i / steps;

      let tx = bezierTangent(850, r*i, r, 15, t);
      let ty = bezierTangent(tan(r), 5, 60, r, t*r);
      let a = atan2(ty, tx);
      
      a -= PI;

      vertex(
        p.x * width / bounds.w +
          tan(r * p.y / bounds.h) * width / 3000,
        p.y * height / (bounds.h)
      );

    translate(.01,.01);

  }
  
  endShape(CLOSE);

  



 
    }
    
  }
  
s