          
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
  textFont("aktiv-grotesk-thin");



}



function draw() {

    let spectrum = fft.analyze();
    mic.start();

    blendMode(MULTIPLY);

    // TYPE && TYPE VOICE COMMANDS
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
        fill('white');
        textLeading(typeSize);
        text(speechRec.resultString, 25, 50, windowWidth*.27, windowWidth*.4);
      }

if (windowWidth>windowHeight){
      fill(spectrum[15]);
      rect(0, 0, windowWidth*.27, windowWidth*.48);
      
    }else{
      fill(spectrum[15]);
      rect(0, 0, windowWidth*.45, windowWidth*.48);
    }

  }



function showResult(){}

function windowResized() {
 if (windowWidth>windowHeight){
  resizeCanvas(windowWidth*.27, windowWidth*.48);
  } else {
    resizeCanvas(windowHeight*.45, windowHeight*.8);
  }

}

function printCanvas(){

saveCanvas(canvas, 'Resonant_Graphic', 'jpg')

}
