
function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
noFill();
strokeWeight(.05);
    
  }

function draw() {
background(200);
translate(100,100);
push();
stroke(0);
  

  for(let i = 1; i < 540; i++){


    quad(38, 31, 106, 90, 69, 103, 30, 100);
translate(0,.8);


  }
  

pop();


push();
stroke(145, 145, 145);
translate(0,500);
for(let i = 1; i < 1300; i++){


  quad(38, 31, 86, 20, 69, 63, 30, 76);
rotate(-.1);

}
pop();




push();
stroke(0);
translate(0,500.5);



for(let i = 1; i < 300; i++){


  quad(100, 101, 106, 20, 69, 63, 30, 76);
  translate(.8,0)

}
pop();





push();
stroke(100);
translate(170,630);
rotate(140);
for(let i = 1; i < 550; i++){


  quad(18, 51, 36, 60, 29, 10, 10, 10);
rotate(.11);
translate(.1,1);

}
pop();
}





  









