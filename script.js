// window.addEventListener('resize', function() {
//   console.log(window.screen.height);
//   console.log(window.screen.orientation);
// });

$.mobile.autoInitializePage = false;
// Bind an event to window.orientationchange that, when the device is turned,
// gets the orientation and displays it to on screen.
$( window ).on( "orientationchange", function( event ) {
  console.log("orientation has changed");
  // $( "#orientation" ).text( "This device is in " + event.orientation + " mode!" );
  if (event.orientation == "landscape") {
    $(".commons, canvas").toggle(100);
    $(".undercommons").toggle(600);
    $("body").css({
      "background-color": "#3F51B5",
      "color" : "mediumvioletred"
    });
  } else {
    $(".undercommons").toggle(100);
    $(".commons, canvas").toggle(600);
    $("body").css({
      "background-color": "ghostwhite",
      "color" : "black"
    });
  }
});

var capture;
let img;

function preload() {
  img = loadImage("qr.png");
}
function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  // capture = createCapture(VIDEO);
  // capture.size(320, 240);
}

function draw() {
  background('rgba(248,248,255, 0)');
  // background(100);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  box(200);
  // capture.resetMatrix();
  // image(capture, 0, 0, 320, 240);
}

// You can also manually force this event to fire.
// $( window ).orientationchange();
