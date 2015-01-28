$(document).ready( function () {

  var shipj = $('#spaceship');
  var space = $('#space');
  var ship = document.getElementById("spaceship");
  var timerId;
  var spacePad = 4;
  var reverse = false;
  var endSpin = false;

  function spinShip () {
    if (endSpin) {
      clearInterval(shipInterval);
      return;
    }
    $("#spaceship").transition({ rotate: '+=360deg', duration: 3000, easing: "linear" });
    $("#space").transition({ rotate: '-=360deg', duration: 3000, easing: "linear" });
  }

  $("#spaceship").click ( function (event) {
    endSpin = true;
    $("#spaceship").transition({ duration: 3000,
                            opacity: '0.0',
                            easing: "linear" });
  })

  $(".container").height( $(window).height() );
  $(".container").width( $(window).width() );
  $("#spaceship").height( $(window).height()*.4 );
  $("#spaceship").width( $(window).width()*.15 );
  $("#space").height( $(window).height()*.5 );
  $("#space").width( $(window).width()*.5 );
  $("#spaceship").transition({ rotate: '+=360deg', duration: 3000, easing: "linear" });
  $("#space").transition({ rotate: '-=360deg', duration: 3000, easing: "linear" });

  var shipInterval = setInterval( spinShip, 3000);

})
