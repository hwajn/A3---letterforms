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
  createCanvas(1000, 1000);
  

  points = birch.textToPoints('L', 0, 0, size, {
    sampleFactor: 100,
    simplifyThreshold: 0
    
  });  
  noStroke();
  
  
  bounds = birch.textBounds(' L ', 0, 0, size);

}

function draw() {
 background(1000);
translate(300,150);
  textFont(birch);
  textSize(size);
  scale(.7);
  blendMode(DIFFERENCE);
  




  
  fill(245, 78, 66);
  beginShape();
  translate(-bounds.x * width / bounds.w, -bounds.y * height / bounds.h);
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    
    ellipse(
      p.x * width / bounds.w +
        tan(20 * p.y / bounds.h + millis() / 1000) * width / 30,
      p.y * height / bounds.h,10,10
    );
    push();

pop();
push();
fill(66, 69, 245);
translate(15,10);

ellipse(
  p.x * width / bounds.w +
    tan(20 * p.y / bounds.h + millis() / 1000) * width / 30,
  p.y * height / bounds.h,10,10
);
pop();


pop();
push();
fill(245, 239, 66);
translate(25,20);

ellipse(
  p.x * width / bounds.w +
    tan(20 * p.y / bounds.h + millis() / 1000) * width / 30,
  p.y * height / bounds.h,10,10
);
pop();
    }


    }
    

  