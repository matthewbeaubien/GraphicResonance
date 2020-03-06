          
let mic, fft;   

let lang = navigator.language;
let speechRec;
var imgs0 = [];
var imgs = [];
var canvas;



function preload() {
  for (var i=0; i<30; i++) {
    imgs0[i] = loadImage("assets/Shape01/LowFrequencyBubbles"+i+".png"); 
  }
  for (var i=0; i<30; i++) {
    imgs[i] = loadImage("assets/Shape02/HighFrequencyBubbles"+i+".png"); 
  }
}




function setup() {
  canvas = createCanvas(windowWidth/2, windowWidth/1.125);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, y);

  speechRec = new p5.SpeechRec(lang, showResult);




  let continuous = true;
  let interim = true;

  speechRec.start(continuous, interim);

  mic = new p5.AudioIn();
  fft = new p5.FFT(.6, 16);
  fft.setInput(mic);                                
  pixelDensity(2);
  frameRate(24);
  // background('white');


}



function draw() {

    let spectrum = fft.analyze();
    mic.start();
    var nums = [256, 246.5,238,229.5,221,212.5,204,195.5,187,178.5,170,161.5,153,144.5,136,127.5,119,110.5,102,93.5,85,76.5,68,59.5,51,42.5,34,25.5,17,8.5, 0];
                             



for (i=0;i<nums.length;i++) {
  if ((spectrum[0]<nums[i]) && (spectrum[0]>nums[i+1])) {
      image(imgs0[i], 0, 0, windowWidth/2, windowWidth/1.125);
  }
}
for (i=0;i<nums.length;i++) {
  if ((spectrum[5]<nums[i]) && (spectrum[5]>nums[i+1])) {
      image(imgs[i], 0, 0, windowWidth/2, windowWidth/1.125);
  }
}


}

// 	let spectrum = fft.analyze();
//   	mic.start();
// 	var nums = [256, 246.5,238,229.5,221,212.5,204,195.5,187,178.5,170,161.5,153,144.5,136,127.5,119,110.5,102,93.5,85,76.5,68,59.5,51,42.5,34,25.5,17,8.5, 0];
                             



//   blendMode(NORMAL);
// background('WHITE');

// // image(img, 0, 0, 1080, 1920);

//   // blendMode(DIFFERENCE);


// // 	for (i=0;i<nums.length;i++) {
// // 	if ((spectrum[5]<nums[i]) && (spectrum[5]>nums[i+1])) {
// // 			image(imgs[i], 0, 0, 1080, 1920);
// // 	}
// // }

// // // for (i=0;i<nums.length;i++) {
// // // 	if ((spectrum[15]<nums[i]) && (spectrum[15]>nums[i+1])) {
// // // 			image(imgs2[i], 0, 0, 1080, 1920);
// // // 	}
// // // }
// // // for (i=0;i<nums.length;i++) {
// // // 	if ((spectrum[15]<nums[i]) && (spectrum[15]>nums[i+1])) {
// // // 			image(imgs3[i], 0, 0, 1080, 1920);
// // // 	}
// // // }


// }


// function print() {
//   window.print();
// }

// function gotSpeech(){
//   if (speechRec.resultValue){
//     (speechRec.resultString);
//   }
// }



  function showResult(){
        let spectrum = fft.analyze();
    mic.start();


    if(speechRec.resultValue==true) {

      textSize(spectrum[0]^2);
      fill('white'); 
      // blendMode(DIFFERENCE);
      textAlign(CENTER, CENTER);
      text(speechRec.resultString, width/2-(windowWidth/4), height/2-(windowWidth/2.25), windowWidth/2, windowWidth/1.125);
      console.log(speechRec.resultConfidence);

    }

  }