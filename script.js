// To listen for DeviceOrientationEvent, first check to see if the browser supports the events. Then, attach an event listener to the window object listening for deviceorientation events.
console.log("connected");

var orientation = window.screen.orientation;
console.log(window.screen.height);
window.addEventListener('resize', function() {
  console.log(window.screen.height);
  console.log(window.screen.orientation);
});


// Bind an event to window.orientationchange that, when the device is turned,
// gets the orientation and displays it to on screen.
$( window ).on( "orientationchange", function( event ) {
  $( "#orientation" ).text( "This device is in " + event.orientation + " mode!" );
});

// You can also manually force this event to fire.
$( window ).orientationchange();
