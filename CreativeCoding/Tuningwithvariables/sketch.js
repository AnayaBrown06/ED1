function setup() {//runs one time

createCanvas (windowWidth, windowHeight);
    
    fill ('white')
  strokeWeight (1);
}

function draw() {//runs in a loop

 var num = 6;
  var sideLen = windowWidth/num;
  
  for (var y = 0; y < windowHeight; y = y + sideLen) {
  for (var x = 0; x < windowWidth; x = x + sideLen) {
    
  quad (
    x,y, 
   x + sideLen,y,
   x + sideLen,y + sideLen,
    x, y + sideLen
  );  
    
  }
  }
}
function windowResized(){
    resizeCanvas (windowWidth, windowHeight);
}
