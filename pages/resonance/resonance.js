let mic, fft, speechRec;   
let lang = navigator.language;

var layer1 = [];
var layer2 = [];
var layer3 = [];
var layer4 = [];
var nums = [256, 246.5,238,229.5,221,212.5,204,195.5,187,178.5,170,161.5,153,144.5,136,127.5,119,110.5,102,93.5,85,76.5,68,59.5,51,42.5,34,25.5,17,8.5, 0];
var canvas;



function preload() {
  for (var i=0; i<30; i++) {
    layer1[i] = loadImage("assets/layer1/frame_00"+i+".jpg"); 
    }
  for (var i=0; i<30; i++) {
    layer2[i] = loadImage("assets/layer2/frame_00"+i+".jpg"); 
    }
  for (var i=0; i<30; i++) {
    layer3[i] = loadImage("assets/layer3/frame_00"+i+".jpg"); 
    }
  for (var i=0; i<30; i++) {
    layer4[i] = loadImage("assets/layer4/frame_00"+i+".jpg"); 
    }
  }




function setup() {
  
if (windowWidth>900){
  var canvas = createCanvas(windowWidth*.27, windowWidth*.48);
} else {
  var canvas = createCanvas(windowHeight*.45, windowHeight*.8);
}

canvas.parent('compositionContainer');


  speechRec = new p5.SpeechRec(lang, showResult);
  let continuous = true;
  let interim = true;
  speechRec.start(continuous, interim);

  mic = new p5.AudioIn();
  fft = new p5.FFT(0.9, 16);
  fft.setInput(mic);                                
 

  
  textFont("aktiv-grotesk-thin");



}



function draw() {

    let spectrum = fft.analyze();
    mic.start();
    
if (windowWidth>900){
  blendMode(MULTIPLY);
    for (i=0;i<nums.length;i++) {
      if ((spectrum[0]<=nums[i]) && (spectrum[0]>nums[i+1])) {
          image(layer1[i], 0, 0, windowWidth*.27, windowWidth*.48);
        }
      }
  blendMode(SCREEN);
    for (i=0;i<nums.length;i++) {
      if ((spectrum[5]<=nums[i]) && (spectrum[5]>=nums[i+1])) {
          image(layer2[i], 0, 0, windowWidth*.27, windowWidth*.48);
        }
      }
  blendMode(MULTIPLY);
    for (i=0;i<nums.length;i++) {
      if ((spectrum[10]<=nums[i]) && (spectrum[10]>=nums[i+1])) {
        image(layer3[i], 0, 0, windowWidth*.27, windowWidth*.48);
        }
      }    
  blendMode(SCREEN);
    for (i=0;i<nums.length;i++) {
      if ((spectrum[15]<=nums[i]) && (spectrum[15]>=nums[i+1])) {
        image(layer4[i], 0, 0, windowWidth*.27, windowWidth*.48);
        }
      }
}if (windowWidth<windowHeight){
   blendMode(MULTIPLY);
    for (i=0;i<nums.length;i++) {
      if ((spectrum[0]<=nums[i]) && (spectrum[0]>nums[i+1])) {
          image(layer1[i], 0, 0, windowHeight*.45, windowHeight*.8);
        }
      }
  blendMode(SCREEN);
    for (i=0;i<nums.length;i++) {
      if ((spectrum[5]<=nums[i]) && (spectrum[5]>=nums[i+1])) {
          image(layer2[i], 0, 0, windowHeight*.45, windowHeight*.8);
        }
      }
  blendMode(MULTIPLY);
    for (i=0;i<nums.length;i++) {
      if ((spectrum[10]<=nums[i]) && (spectrum[10]>=nums[i+1])) {
        image(layer3[i], 0, 0, windowHeight*.45, windowHeight*.8);
        }
      }    
  blendMode(SCREEN);
    for (i=0;i<nums.length;i++) {
      if ((spectrum[15]<=nums[i]) && (spectrum[15]>=nums[i+1])) {
        image(layer4[i], 0, 0, windowHeight*.45, windowHeight*.8);
      }
    }
  }

    var typeSize = map(spectrum[4], 0, 255, 50,100);

    if(speechRec.resultValue==true) {

      // VOICE COMMANDS/type
      if(speechRec.resultString=="Center align"){
        textAlign(CENTER);}
      if(speechRec.resultString=="left-aligned"||speechRec.resultString=="left aligned"||speechRec.resultString=="left align"||speechRec.resultString=="align left"){
        textAlign(LEFT);}
      if(speechRec.resultString=="right aligned"||speechRec.resultString=="right align"||speechRec.resultString=="right-aligned"||speechRec.resultString=="align right"){
        textAlign(RIGHT);}
      if(speechRec.resultString=="bottom aligned"||speechRec.resultString=="align bottom"||speechRec.resultString=="bottom align"||speechRec.resultString=="bottom-aligned"||speechRec.resultString=="align bottom"){
        textAlign(LEFT, BOTTOM);}
      if(speechRec.resultString=="top aligned"||speechRec.resultString=="top align"||speechRec.resultString=="top-aligned"||speechRec.resultString=="align top"){
        textAlign(LEFT, TOP);}
      if(speechRec.resultString=="light"){
        textFont("aktiv-grotesk-thin");}
      if(speechRec.resultString=="extended"){
        textFont("aktiv-grotesk-extended");}
      if(speechRec.resultString=="condensed"){
        textFont("aktiv-grotesk-condensed");}
      if(speechRec.resultString=="bold"){
        textStyle("bold");}
      if(speechRec.resultString=="italic"){
        textStyle("italic");}
      if(speechRec.resultString=="regular"){
        textStyle("normal");}

        //type
        blendMode(DIFFERENCE);
        textSize(typeSize);
        fill('white');
        textLeading(typeSize);
        text(speechRec.resultString, 25, 50, windowWidth*.27, windowWidth*.4);
      }
}

//speech function
function showResult(){}


//resize canvas with window
function windowResized() {
 if (windowWidth>900){
  resizeCanvas(windowWidth*.27, windowWidth*.48);
  }
if (windowWidth<windowHeight){
  resizeCanvas(windowHeight*.45, windowHeight*.8);
  }

}

//print canvas
function printCanvas(){

saveCanvas(canvas, 'Resonant_Graphic', 'jpg')

}



