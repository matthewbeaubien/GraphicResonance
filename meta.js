let mic, fft; 
var canvas;
var h1;

// function windowResized(){
// 	resizeCanvas(windowWidth,windowHeight);
// }

function setup() {
  canvas = createCanvas(windowWidth*.27, windowHeight*.48);
  canvas.parent('textContainer');
  
  mic = new p5.AudioIn();
  fft = new p5.FFT(.6, 16);
  fft.setInput(mic);                                
  


}


function draw() {
textSize(16);
text
fill(0);
text('Spectrum analysis', 10, 10);


}
