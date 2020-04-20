


var imageArray = new Array();


for (var i=0; i<4; i++) {
    imageArray[i] = new Image(); }

for (var i=0; i<4; i++) {
    imageArray[i].src = "assets/gallery/image_"+i+".jpg"; }

    
 


// function getRandomImage() {
//   var index = Math.floor(Math.random() * 4);
//   return imageArray[index];
// }

// $("#textContainer").hover(
//   function() {
//     var coverImage = getRandomImage();
//     $("#coverImage").attr("src", coverImage);
//     console.log(coverImage);
//   });

// $("#textContainer").hover(
// 	function() {
// $('html').css({'#coverImage{background-image': 'url(assets/gallery/image_' + imageArray[Math.floor(Math.random() * 3)] + ')}'});
//   });
// $("#textContainer").hover(
// 	function() 
// 	{document.getElementById("coverImage").style.backgroundImage== getRandomImage();	});