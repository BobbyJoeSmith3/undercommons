// window.addEventListener('resize', function() {
//   console.log(window.screen.height);
//   console.log(window.screen.orientation);
// });


// Bind an event to window.orientationchange that, when the device is turned,
// gets the orientation and displays it to on screen.
$( window ).on( "orientationchange", function( event ) {
  console.log("orientation has changed");
  $( "#orientation" ).text( "This device is in " + event.orientation + " mode!" );
  $(".undercommons").toggle(400);
});

// You can also manually force this event to fire.
// $( window ).orientationchange();
