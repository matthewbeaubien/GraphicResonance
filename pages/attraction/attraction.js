          
let mic, fft;   

let lang = navigator.language;
let speechRec;
var layer1 = [];
var layer2 = [];
var layer3 = [];
var layer4 = [];

var canvas;



function preload() {

    for (var i=0; i<30; i++) {
    layer1[i] = loadImage("assets/layer1/frame_"+i+".png"); 
  }
  for (var i=0; i<30; i++) {
    layer2[i] = loadImage("assets/layer2/Attraction_"+i+".png"); 
  }
    for (var i=0; i<30; i++) {
    layer3[i] = loadImage("assets/layer3/frame_"+i+".png"); 
  }
    for (var i=0; i<30; i++) {
    layer4[i] = loadImage("assets/layer4/frame_"+i+".png"); 
  }
}



function setup() {

if (windowWidth>1300){
  var canvas = createCanvas(windowWidth*.27, windowWidth*.48);
} else if(windowWidth<1300&&windowWidth>730){
  var canvas = createCanvas(windowHeight*.45, windowHeight*.8);
} else if (windowWidth<730){
  var canvas = createCanvas(windowWidth, windowHeight);
}
 
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
  background('black');
  textFont("aktiv-grotesk-thin");
  textAlign(CENTER);




}



function draw() {


    let spectrum = fft.analyze();
    mic.start();
    var nums = [256, 246.5,238,229.5,221,212.5,204,195.5,187,178.5,170,161.5,153,144.5,136,127.5,119,110.5,102,93.5,85,76.5,68,59.5,51,42.5,34,25.5,17,8.5, 0];
    background('black');
    

  // fill(spectrum[0], spectrum[8], spectrum[15]);



    
      


if (windowWidth>1300){


      for (i=0;i<nums.length;i++) {
        if ((spectrum[0]<=nums[i]) && (spectrum[0]>=nums[i+1])) {
            image(layer4[i], 0, 0, windowWidth*.27, windowWidth*.48);
        }
      }
      for (i=0;i<nums.length;i++) {
        if ((spectrum[15]<=nums[i]) && (spectrum[15]>=nums[i+1])) {
            image(layer2[i], 0, 0, windowWidth*.27, windowWidth*.48);
        }
      }
      for (i=0;i<nums.length;i++) {
        if ((spectrum[5]<=nums[i]) && (spectrum[5]>=nums[i+1])) {
            image(layer3[i], 0, 0, windowWidth*.27, windowWidth*.48);
        }
      }
      for (i=0;i<nums.length;i++) {
        if ((spectrum[8]<=nums[i]) && (spectrum[8]>=nums[i+1])) {
            image(layer1[i], 0, 0, windowWidth*.27, windowWidth*.48);
        }
      }

      
      
    }
  if(windowWidth<1300 && windowWidth > 730){
      for (i=0;i<nums.length;i++) {
        if ((spectrum[0]<nums[i]) && (spectrum[0]>nums[i+1])) {
            image(layer1[i], 0, 0, windowHeight*0.45, windowHeight*0.8);
        }
      }
      for (i=0;i<nums.length;i++) {
        if ((spectrum[5]<nums[i]) && (spectrum[5]>nums[i+1])) {
            image(layer2[i], 0, 0, windowHeight*0.45, windowHeight*0.8);
        }
      }
      for (i=0;i<nums.length;i++) {
        if ((spectrum[10]<nums[i]) && (spectrum[10]>nums[i+1])) {
            image(layer3[i], 0, 0, windowHeight*0.45, windowHeight*0.8);
        }
      }
      for (i=0;i<nums.length;i++) {
        if ((spectrum[15]<nums[i]) && (spectrum[15]>nums[i+1])) {
            image(layer4[i], 0, 0, windowHeight*0.45, windowHeight*0.8);
        }
      }
    }

  if(windowWidth<730){
    for (i=0;i<nums.length;i++) {
        if ((spectrum[0]<nums[i]) && (spectrum[0]>nums[i+1])) {
            image(layer1[i], 0, 0, windowWidth, windowHeight);
        }
      }
      for (i=0;i<nums.length;i++) {
        if ((spectrum[5]<nums[i]) && (spectrum[5]>nums[i+1])) {
            image(layer2[i], 0, 0, windowWidth, windowHeight);
        }
      }
      for (i=0;i<nums.length;i++) {
        if ((spectrum[10]<nums[i]) && (spectrum[10]>nums[i+1])) {
            image(layer3[i], 0, 0, windowWidth, windowHeight);
        }
      }
      for (i=0;i<nums.length;i++) {
        if ((spectrum[15]<nums[i]) && (spectrum[15]>nums[i+1])) {
            image(layer4[i], 0, 0, windowWidth, windowHeight);
        }
      }

  }

    // TYPE && TYPE VOICE COMMANDS
    var typeSize = map(spectrum[4], 0, 255, 25,75);
  

        

        textSize(typeSize);
        fill('red');
        textLeading(typeSize);
        text(speechRec.resultString, 120, 100, windowWidth*.2, windowWidth*.2);

}



function showResult(){}

function windowResized() {
 if (windowWidth>1300){
  resizeCanvas(windowWidth*.27, windowWidth*.48);
  }
if (windowWidth<1300 && windowWidth > 730){
    resizeCanvas(windowHeight*.45, windowHeight*.8);
  }
if (windowWidth>730){
    resizeCanvas(windowWidth, windowHeight);
  }
}


function printCanvas(){

saveCanvas(canvas, 'Resonant_Graphic', 'jpg')

}
