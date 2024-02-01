//adding a GIF to my grid

let gif;

function preload (){
gif = loadImage ('assets/WinkingEye.gif');

}

function setup() {
//runs one time
createCanvas (windowWidth, windowHeight);
    

}

function draw() {
//runs in a loop
background ('white');

 var num = 6;
  var sideLen = windowWidth/num;
  
  for (var y = 0; y < 2 * windowHeight; y = y + sideLen) {
  //loop to create a grid in the y direction 
  
  for (var x = 0; x < 2 * windowWidth; x = x + sideLen) {
  image (gif, x, y, sideLen, sideLen);
 	 }  
  }
  
  
}
function windowResized(){
    resizeCanvas (windowWidth, windowHeight);
}
