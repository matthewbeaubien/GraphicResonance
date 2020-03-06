let mic, fft; 
var canvas;
var h1;

// function windowResized(){
// 	resizeCanvas(windowWidth,windowHeight);
// }

function setup() {
  canvas = createCanvas(599, 500);
  canvas.parent('canvasContainer');
  
  mic = new p5.AudioIn();
  fft = new p5.FFT(.6, 16);
  fft.setInput(mic);                                
  
  pixelDensity(2);
  frameRate(24);

  background(0,0,0);

}


function draw() {

console.log(foo);

}