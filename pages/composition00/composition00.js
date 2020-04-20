          
let mic, fft;   

var canvas;

function setup() {

   if (windowWidth>1300){
  var canvas = createCanvas(windowWidth*.27, windowWidth*.48);
} else if(windowWidth<1300&&windowWidth>730){
  var canvas = createCanvas(windowHeight*.45, windowHeight*.8);
} else if (windowWidth<730){
  var canvas = createCanvas(windowWidth, windowHeight);
}

  canvas.parent('compositionContainer');


  mic = new p5.AudioIn();
  fft = new p5.FFT(.6, 16);
  fft.setInput(mic);                                
 
  frameRate(60);

  stroke('white');
  strokeWeight(1);
      fill('black');
    if(windowWidth>1300){
      rect( -1, -1, windowWidth*.27 + 1, windowWidth*.48 + 1);
      
    }
    if (windowWidth < 1300 && windowWidth < 730){
      rect(-1, -1, windowHeight*0.45 + 1, windowHeight*0.8 + 1);
    }
    if (windowWidth < 730){
      rect(-1, -1, windowWidth + 1, windowHeight + 1);
    }


}



function draw() {

    let spectrum = fft.analyze();
    mic.start();





    noFill();
    
    ellipse(75, 100, spectrum[0]/2, spectrum[0]/2);
    ellipse(150, 100, spectrum[1]/2, spectrum[1]/2);
    ellipse(225, 100, spectrum[2]/2, spectrum[2]/2);
    ellipse(300, 100, spectrum[3]/2, spectrum[3]/2);
    ellipse(75, 200, spectrum[4]/2, spectrum[4]/2);
    ellipse(150, 200, spectrum[5]/2, spectrum[5]/2);
    ellipse(225, 200, spectrum[6]/2, spectrum[6]/2);
    ellipse(300, 200, spectrum[7]/2, spectrum[7]/2);
    ellipse(75, 300, spectrum[8]/2, spectrum[8]/2);
    ellipse(150, 300, spectrum[9]/2, spectrum[9]/2);
    ellipse(225, 300, spectrum[10]/2, spectrum[10]/2);
    ellipse(300, 300, spectrum[11]/2, spectrum[11]/2);
    ellipse(75, 400, spectrum[12]/2, spectrum[12]/2);
    ellipse(150, 400, spectrum[13]/2, spectrum[13]/2);
    ellipse(225, 400, spectrum[14]/2, spectrum[14]/2);
    ellipse(300, 400, spectrum[15]/2, spectrum[15]/2);

}





function windowResized() {
 if (windowWidth>1300){
  resizeCanvas(windowWidth*.27, windowWidth*.48);
  }
if (windowWidth < 1300 && windowWidth > 730){
    resizeCanvas(windowHeight*.45, windowHeight*.8);
  }
if (windowWidth > 730){
    resizeCanvas(windowWidth, windowHeight);
  }
}

function printCanvas(){

saveCanvas(canvas, 'Resonant Graphic', 'jpg')

}
