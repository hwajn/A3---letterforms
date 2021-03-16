
function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);

stroke(0);
noFill();
strokeJoin(MITER);
  }

//https://www.youtube.com/watch?v=kP-RkS70Lm8



function draw() {
  
background(1000);
translate(width/2,-20);

push();
strokeWeight(2);


for (let i = 0; i < 5000; i++){

  beginShape();
line(0,0,0,300);
  endShape();

scale(.9,1);
translate(i*1,0);
shearY(-1);





}
pop();
push();
strokeWeight(.3);
scale(.5,2);
translate(50,-145);
for (let i = 0; i < 10; i++){


line(-50,300,340,300);
scale(1,1);
translate(i*1,-.00009);
shearY(-.5);


}    pop();                         
                              
}





  









