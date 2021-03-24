//https://editor.p5js.org/aferriss/sketches/BJTw7MJG7
//https://p5js.org/reference/#/p5.Font/textToPoints
//https://p5js.org/reference/#/p5/random
//https://idmnyu.github.io/p5.js-image/Filters/index.html



//import image 
let img;




function preload(){
    img = loadImage('assets/code-letters_colour-step1.png');
}
function setup() {
    background(0);
  image(img, 0, 0, 1000,1000);
  
}
//converting font outline into points



