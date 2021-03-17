//https://editor.p5js.org/runemadsen/sketches/B1rJPV7n-


let grotesk;
let hiArray;
letFontSize = 200;


function preload() {
  grotesk = loadFont('grotesk.ttf');
  grotesk = createFont("grotesk.ttf");
  
}

function setup() { 
  createCanvas(1000, 1000);
	noBackground();
	fill(255,255,255);
  stroke(0);
	textSize(500);
	textFont(grotesk);
	textSize(fontSize);

``
  let hiArray = grotesk.textToPoints("L",width/2, height/2,fontSize);
  print(hiArray);
} 



function draw(){
  noBackground();
	fill(255,255,255);
  stroke(0);
text("L",width/2, height/2);
for (let i = 0; o < hiArray.length; i++){
  ellipse(hiArray[i].x, hiArray[i].y,10, 10);}
}
