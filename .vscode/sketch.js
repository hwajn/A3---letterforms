//https://editor.p5js.org/aferriss/sketches/BJTw7MJG7
//https://p5js.org/reference/#/p5.Font/textToPoints
//https://p5js.org/reference/#/p5/random
//https://idmnyu.github.io/p5.js-image/Filters/index.html



//import font 
let birch;
let bounds;
let points;
let word = "L";
let size = 10;
const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;

c1 = color(204, 102, 0);
c2 = color(0, 102, 153);



function preload(){
  birch = loadFont('grotesk.ttf');
  
  textFont(birch);
  textSize(size);
  
}
//converting font outline into points
function setup() {
  createCanvas(1000, 1000);
  

  points = birch.textToPoints('L', 0, 0, size, {
    sampleFactor: 100,
    simplifyThreshold: 0
    
  });  
  noStroke();
  
  
  bounds = birch.textBounds(' L ', 0, 0, size);

}



//adding undulation and colour to the points 
function draw() {

  

  
      background(1000);
      translate(300,100);
        textFont(birch);
        textSize(size);
        scale(.7);

        

// purple layer
  blendMode(BURN);
  fill(112, 0, 138,50);
  beginShape();
  translate(-bounds.x * width / bounds.w, -bounds.y * height / bounds.h);
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    
    ellipse(
      p.x * width / bounds.w +
        tan(20 * p.y / bounds.h + millis() / 1000) * width / 30,
      p.y * height / bounds.h,10,10
    );


pop();





// green layer
push();
fill(11,255,1);
translate(15,15);


ellipse(
  p.x * width / bounds.w +
    tan(20 * p.y / bounds.h + millis() / 10) * width / 30,
  p.y * height / bounds.h,10,10
);
pop();



pop();

}  }


