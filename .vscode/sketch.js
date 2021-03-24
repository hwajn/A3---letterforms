var img;
 
function preload()
{
  // load image
  img = loadImage("steptwo.png");
}
 
function setup() 
{
  // set canvas size
  createCanvas(1000, 1000); 
  image(img, 0, 0,1000,1000);
  pixelDensity(1);
}
 
  function draw(){
    background(0);
    push();
    image(img, 0, 0,1000,1000);
    // display image (img, x, y)

    
    loadPixels();

    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
          var index = (x + y * width)*4;
          var r = pixels[index+7];
          var g = pixels[index+1];
          var b = pixels[index+4];
          var a = pixels[index+2];     
          
          pixels[index+0] = r-80;
          pixels[index+1] = g+40;
          pixels[index+2] = 350-b;
    }
  }
  
  updatePixels();
pop();

}
