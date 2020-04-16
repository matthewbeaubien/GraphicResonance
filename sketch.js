let mic, fft; 

var canvas;


function setup() {
  createCanvas(windowWidth, windowHeight);
  canvas.parent('main');
  
  mic = new p5.AudioIn();
  fft = new p5.FFT(.6, 64);
  fft.setInput(mic);           

}


function draw() {

var spectrum = fft.analyze();
console.log(spectrum);
stroke(255);

for (var i = 0; i < spectrum.length; i++){
	var amp = spectrum[i];
	var y = map(amp, 0, 255	, height, 0);
	line(i, height, i, y);
}

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}