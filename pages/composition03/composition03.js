          
let mic, fft;   
var canvas;

function setup() {

  if (windowWidth>windowHeight){
     var canvas = createCanvas(windowWidth*.27, windowWidth*.48);
  } else {
      var canvas = createCanvas(windowHeight*.45, windowHeight*.8);}

  canvas.parent('compositionContainer');
 

  mic = new p5.AudioIn();
  fft = new p5.FFT(.6, 16);
  fft.setInput(mic);              

  frameRate(30);




}



function draw() {

    let spectrum = fft.analyze();
    mic.start();

    blendMode(MULTIPLY);

if (windowWidth>windowHeight){
      fill(spectrum[15]);
      rect(0, 0, windowWidth*.27, windowWidth*.48);
      
    }else{
      fill(spectrum[15]);
      rect(0, 0, windowWidth*.45, windowWidth*.48);
    }

  }



function showResult(){
  
  let spectrum = fft.analyze();
    mic.start();


    if(speechRec.resultValue==true) {


      textSize(spectrum[0]/2);
      fill('white');
      textAlign(LEFT, CENTER);

      text(speechRec.resultString, 10, random((windowWidth*.48)/2), windowWidth*.27, windowWidth*.48);

      console.log(speechRec.resultConfidence);

    }
}

function windowResized() {
 if (windowWidth>windowHeight){
  resizeCanvas(windowWidth*.27, windowWidth*.48);
  } else {
    resizeCanvas(windowHeight*.45, windowHeight*.8);
  }

}