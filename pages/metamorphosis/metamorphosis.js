          
let mic, fft;   

let lang = navigator.language;
let speechRec;
var imgs0 = [];
var imgs1 = [];
var imgs2 = [];
var imgs3 = [];
var imgs4 = [];
var imgs5 = [];

var canvas;



function preload() {
  //   for (var i=0; i<30; i++) {
  //   imgs0[i] = loadImage("assets/layer6/Noise Vignette_"+i+".jpg"); 
  // }
    for (var i=0; i<30; i++) {
    imgs1[i] = loadImage("assets/layer1/Shape_1_"+i+".png"); 
  }
  for (var i=0; i<30; i++) {
    imgs2[i] = loadImage("assets/layer2/layer"+i+".png"); 
  }
    for (var i=0; i<30; i++) {
    imgs3[i] = loadImage("assets/layer3/frame"+i+".png"); 
  }
    for (var i=0; i<30; i++) {
    imgs4[i] = loadImage("assets/layer5/frame00"+i+".png"); 
  }
//   for (var i=0; i<30; i++) {
//     imgs5[i] = loadImage("assets/Vignette_/Noise Vignette_"+i+".png"); 
//   }
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
 
  frameRate(30);

  background(0);



textFont("aktiv-grotesk-thin");

}



function draw() {

    let spectrum = fft.analyze();
    mic.start();
    var nums = [256, 246.5,238,229.5,221,212.5,204,195.5,187,178.5,170,161.5,153,144.5,136,127.5,119,110.5,102,93.5,85,76.5,68,59.5,51,42.5,34,25.5,17,8.5, 0];
 


 



if (windowWidth>1300){

      blendMode(NORMAL);

      for (i=0;i<nums.length;i++) {
        if ((spectrum[1]<=nums[i]) && (spectrum[1]>nums[i+1])) {
            image(imgs1[i], 0, 0, windowWidth*.27, windowWidth*.48);
        }
      }
      
      for (i=0;i<nums.length;i++) {
        if ((spectrum[5]<=nums[i]) && (spectrum[5]>=nums[i+1])) {
            image(imgs2[i], 0, 0, windowWidth*.27, windowWidth*.48);
        }
      }
          var typeSize = map(spectrum[4], 0, 255, 50,100);

    if(speechRec.resultValue==true) {
      
      // VOICE COMMANDS
      if(speechRec.resultString=="Center align"){
        textAlign(CENTER);}
      if(speechRec.resultString=="left-aligned"||speechRec.resultString=="left aligned"||speechRec.resultString=="left align"){
        textAlign(LEFT);}
      if(speechRec.resultString=="right aligned"||speechRec.resultString=="right align"||speechRec.resultString=="right-aligned"){
        textAlign(RIGHT);}
      if(speechRec.resultString=="bottom aligned"||speechRec.resultString=="align bottom"||speechRec.resultString=="bottom align"||speechRec.resultString=="bottom-aligned"){
        textAlign(LEFT, BOTTOM);}
      if(speechRec.resultString=="top aligned"||speechRec.resultString=="top align"||speechRec.resultString=="top-aligned"){
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

      blendMode(DIFFERENCE);
      textSize(typeSize);
      fill(spectrum[4]);
      textLeading(typeSize);
      text(speechRec.resultString, 25, 50, windowWidth*.27, windowWidth*.4);
    }
      
      blendMode(NORMAL);

    for (i=0;i<nums.length;i++) {
      if ((spectrum[10]<=nums[i]) && (spectrum[10]>=nums[i+1])) {
            image(imgs3[i], 0, 0, windowWidth*.27, windowWidth*.48);
        }
      }
    for (i=0;i<nums.length;i++) {
        if ((spectrum[15]<=nums[i]) && (spectrum[15]>=nums[i+1])) {
            image(imgs4[i], 0, 0, windowWidth*.27, windowWidth*.48);
        }
      }
    }

    if(windowWidth < 1300 && windowWidth > 730){
 
      for (i=0;i<nums.length;i++) {
        if ((spectrum[1]<=nums[i]) && (spectrum[1]>nums[i+1])) {
            image(imgs1[i], 0, 0, windowHeight*.45, windowHeight*.8);
        }
      }
      
      for (i=0;i<nums.length;i++) {
        if ((spectrum[5]<=nums[i]) && (spectrum[5]>=nums[i+1])) {
            image(imgs2[i], 0, 0, windowHeight*.45, windowHeight*.8);
        }
      }
      if(speechRec.resultValue==true) {

      // VOICE COMMANDS
      if(speechRec.resultString=="Center align"){
        textAlign(CENTER);}
      if(speechRec.resultString=="left-aligned"||speechRec.resultString=="left aligned"||speechRec.resultString=="left align"){
        textAlign(LEFT);}
      if(speechRec.resultString=="right aligned"||speechRec.resultString=="right align"||speechRec.resultString=="right-aligned"){
        textAlign(RIGHT);}
      if(speechRec.resultString=="bottom aligned"||speechRec.resultString=="align bottom"||speechRec.resultString=="bottom align"||speechRec.resultString=="bottom-aligned"){
        textAlign(LEFT, BOTTOM);}
      if(speechRec.resultString=="top aligned"||speechRec.resultString=="top align"||speechRec.resultString=="top-aligned"){
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

        blendMode(DIFFERENCE);
        textSize(typeSize);
        fill(spectrum[4]);
        textLeading(typeSize);
        text(speechRec.resultString, 25, 50, windowWidth*.27, windowWidth*.4);
      }
      
      blendMode(NORMAL);
      for (i=0;i<nums.length;i++) {
        if ((spectrum[10]<=nums[i]) && (spectrum[10]>=nums[i+1])) {
            image(imgs3[i], 0, 0, windowHeight*.45, windowHeight*.8);
        }
      }
      for (i=0;i<nums.length;i++) {
        if ((spectrum[15]<=nums[i]) && (spectrum[15]>=nums[i+1])) {
            image(imgs4[i], 0, 0, windowHeight*.45, windowHeight*.8);
        }
      }
      blendMode(NORMAL);
    }

    if(windowWidth < 730){
 
      for (i=0;i<nums.length;i++) {
        if ((spectrum[1]<=nums[i]) && (spectrum[1]>nums[i+1])) {
            image(imgs1[i], 0, 0, windowWidth, windowHeight);
        }
      }
      
      for (i=0;i<nums.length;i++) {
        if ((spectrum[5]<=nums[i]) && (spectrum[5]>=nums[i+1])) {
            image(imgs2[i], 0, 0, windowWidth, windowHeight);
        }
      }
      if(speechRec.resultValue==true) {


      // VOICE COMMANDS
      if(speechRec.resultString=="Center align"){
        textAlign(CENTER);}
      if(speechRec.resultString=="left-aligned"||speechRec.resultString=="left aligned"||speechRec.resultString=="left align"){
        textAlign(LEFT);}
      if(speechRec.resultString=="right aligned"||speechRec.resultString=="right align"||speechRec.resultString=="right-aligned"){
        textAlign(RIGHT);}
      if(speechRec.resultString=="bottom aligned"||speechRec.resultString=="align bottom"||speechRec.resultString=="bottom align"||speechRec.resultString=="bottom-aligned"){
        textAlign(LEFT, BOTTOM);}
      if(speechRec.resultString=="top aligned"||speechRec.resultString=="top align"||speechRec.resultString=="top-aligned"){
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


        blendMode(DIFFERENCE);
        textSize(typeSize);
        fill(spectrum[4]);
        textLeading(typeSize);
        text(speechRec.resultString, 25, 50, windowWidth*.27, windowWidth*.4);
      }
      blendMode(NORMAL);
      for (i=0;i<nums.length;i++) {
        if ((spectrum[10]<=nums[i]) && (spectrum[10]>=nums[i+1])) {
            image(imgs3[i], 0, 0, windowWidth, windowHeight);
        }
      }
      for (i=0;i<nums.length;i++) {
        if ((spectrum[15]<=nums[i]) && (spectrum[15]>=nums[i+1])) {
            image(imgs4[i], 0, 0, windowWidth, windowHeight);
        }
      }
      blendMode(NORMAL);
    }

   

}



function showResult(){}

//resize canvas with window
function windowResized() {
 if (windowWidth>1300){
  resizeCanvas(windowWidth*.27, windowWidth*.48);
  }
if (windowWidth>730 && windowWidth<1300){
  resizeCanvas(windowHeight*.45, windowHeight*.8);
  }
if (windowWidth<730){
  resizeCanvas(windowWidth, windowHeight);
  }
}


function printCanvas(){

saveCanvas(canvas, 'Resonant_Graphic', 'jpg')

}



