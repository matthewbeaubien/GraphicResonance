let mic, fft; 
var canvas;
var h1;

// function windowResized(){
// 	resizeCanvas(windowWidth,windowHeight);
// }

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  mic = new p5.AudioIn();
  fft = new p5.FFT(.6, 16);
  fft.setInput(mic);                                
  
  pixelDensity(2);
  frameRate(24);



}


function draw() {

console.log(foo);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}