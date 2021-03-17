var myFont;
function preload() {
  myFont = loadFont('WindNE.ttf');
}

function setup() { 
  createCanvas(800, 500);
	background(230);
	fill(255, 0, 0);
	textSize(100);
	textFont(myFont);
	text("Rune Madsen", 150, height/2);
} 
