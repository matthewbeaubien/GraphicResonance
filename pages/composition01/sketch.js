          
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
  
  if (windowWidth>windowHeight){
  var canvas = createCanvas(windowWidth*.27, windowWidth*.48);
  } else {
  var canvas = createCanvas(windowHeight*.45, windowHeight*.8);}

  canvas.parent('compositionContainer');

  speechRec = new p5.SpeechRec(lang, showResult);
  let continuous = true;
  let interim = true;
  speechRec.start(continuous, interim);

  mic = new p5.AudioIn();
  fft = new p5.FFT(.6, 16);
  fft.setInput(mic);                                
 
  frameRate(30);




}



function draw() {

    let spectrum = fft.analyze();
    mic.start();
    var nums = [256, 246.5,238,229.5,221,212.5,204,195.5,187,178.5,170,161.5,153,144.5,136,127.5,119,110.5,102,93.5,85,76.5,68,59.5,51,42.5,34,25.5,17,8.5, 0];
 


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
            image(imgs1[i], 0, 0, windowHeight*.45, windowHeight*.8);
        }
      }
      for (i=0;i<nums.length;i++) {
        if ((spectrum[4]<nums[i]) && (spectrum[4]>nums[i+1])) {
            image(imgs2[i], 0, 0, windowHeight*.45, windowHeight*.8);
        }
      }

    }

}

function mousePressed() {
  clear();
}



function showResult(){
  
  let spectrum = fft.analyze();
    mic.start();


    if(speechRec.resultValue==true) {


      textSize(spectrum[4]/2);
      fill('white');
      textAlign(LEFT, CENTER);
      textLeading(spectrum[4]/2);

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