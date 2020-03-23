          
let mic, fft;   

let lang = navigator.language;
let speechRec;
var imgs0 = [];
var imgs1 = [];
var imgs2 = [];
var imgs3 = [];

var canvas;



function preload() {

    for (var i=0; i<30; i++) {
    imgs1[i] = loadImage("assets/Shape02/LowFrequencyBubbles"+i+".png"); 
  }
  for (var i=0; i<30; i++) {
    imgs2[i] = loadImage("assets/Shape03/HighFrequencyBubbles"+i+".png"); 
  }
    for (var i=0; i<30; i++) {
    imgs3[i] = loadImage("assets/Shape04/01_"+i+".png"); 
  }
}




function setup() {

  var canvas = createCanvas(windowWidth, windowHeight);
 
  canvas.parent('compositionContainer');

  speechRec = new p5.SpeechRec(lang, showResult);




  let continuous = true;
  let interim = true;

  speechRec.start(continuous, interim);

  mic = new p5.AudioIn();
  fft = new p5.FFT(.6, 16);
  fft.setInput(mic);                                
  pixelDensity(2);
  frameRate(30);




}



function draw() {

    let spectrum = fft.analyze();
    mic.start();
    var nums = [256, 246.5,238,229.5,221,212.5,204,195.5,187,178.5,170,161.5,153,144.5,136,127.5,119,110.5,102,93.5,85,76.5,68,59.5,51,42.5,34,25.5,17,8.5, 0];
                             
  // fill(spectrum[0], spectrum[8], spectrum[15]);
  blendMode(NORMAL);

if (windowWidth>windowHeight){

      for (i=0;i<nums.length;i++) {
        if ((spectrum[2]<nums[i]) && (spectrum[2]>nums[i+1])) {
            image(imgs1[i], 0, 0, windowWidth*.27, windowWidth*.48);
        }
      }
      for (i=0;i<nums.length;i++) {
        if ((spectrum[4]<nums[i]) && (spectrum[4]>nums[i+1])) {
            image(imgs2[i], 0, 0, windowWidth*.27, windowWidth*.48);
        }
      }
    }else{
      for (i=0;i<nums.length;i++) {
        if ((spectrum[2]<nums[i]) && (spectrum[2]>nums[i+1])) {
            image(imgs1[i], 0, 0, windowWidth, windowWidth*1.777777777777778);
        }
      }
      for (i=0;i<nums.length;i++) {
        if ((spectrum[4]<nums[i]) && (spectrum[4]>nums[i+1])) {
            image(imgs2[i], 0, 0, windowWidth, windowWidth*1.777777777777778);
        }
      }

    }

}



function showResult(){
  
  let spectrum = fft.analyze();
    mic.start();


    if(speechRec.resultValue==true) {


      textSize(spectrum[0]/2);
      fill('white');
      textAlign(LEFT, CENTER);
      text(speechRec.resultString, 0, 0, windowWidth, windowHeight);
      console.log(speechRec.resultConfidence);

    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}