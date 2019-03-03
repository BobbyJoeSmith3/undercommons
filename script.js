// window.addEventListener('resize', function() {
//   console.log(window.screen.height);
//   console.log(window.screen.orientation);
// });

// Hide the loading message
$.mobile.autoInitializePage = false;
let underparts = 4;
let rotations = 0;
let colors = ["#64BB98",
"#E13965",
"#EDAD6F",
"#7964A9",
"#E9B8CB",
"#E7E3D8"]
// Bind an event to window.orientationchange that, when the device is turned,
// gets the orientation and displays it to on screen.
$( window ).on( "orientationchange", function( event ) {
  console.log("orientation has changed");
  // $( "#orientation" ).text( "This device is in " + event.orientation + " mode!" );
  if (event.orientation == "landscape") {
    if (rotations < underparts ) {
      rotations++;
    } else {
      rotations = 1;
    }
    $(".commons, canvas").toggle(100);
    $(`div.undercommons, h2.undercommons, .part${rotations}`).toggle(600);

    let bgcolor = getRandomInt(0,5);
    let textcolor = getRandomInt(0,5);
    while (bgcolor == textcolor) {
      textcolor = getRandomInt(0,5);
    }
    $("body").css({
      "background-color": colors[bgcolor],
      "color" : colors[textcolor]
    });
  } else {
    $(`div.undercommons, h2.undercommons, .part${rotations}`).toggle(100);
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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// You can also manually force this event to fire.
// $( window ).orientationchange();
