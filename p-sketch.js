
function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
noFill();
strokeWeight(.5);

  }
//https://www.youtube.com/watch?v=kP-RkS70Lm8
//https://p5js.org/reference/#/p5/curve
function draw() {
background(1000);
translate(200,200);

push();
stroke(0);
rotate(20);


                        

                        for(let i = .000001; i < 40; i++){


                            let t = map(100, 300, width*300, -5, 5);
                        
                            curveTightness(t^2);

                            beginShape();
                          curveVertex(10, 100);
                          curveVertex(0, 20);
                          curveVertex(-10, 250);
                          curveVertex(100, 350);
                          
                          curveVertex(-40, 340);
                                                   
                          endShape();


                          shearY(2);






                    

                        
                          }
pop(); push();
                          for(let i = .5; i < 90; i++){

                      

                            beginShape();
                            line(150,350,-100,500);  
                            shearY(-.3);  


                  
                  






                    

                        
                          }
                                                        
                                        

}





  









