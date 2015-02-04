$(document).ready( function () {

  var shipj = $('#spaceship');
  var space = $('#space');
  var ship = document.getElementById("spaceship");
  var timerId;
  var spacePad = 4;
  var reverse = false;
  var endSpin = false;


  // shipj.css("-webkit-animation-play-state", "paused");
  $(".row").css('margin-top', '80px');

  function checkMenuDisplay(degree) {
    $("#display").text(degree);
    $("#menu-left").hide();
    $("#menu-top").hide();
    $("#menu-right").hide();
    $("#menu-bottom").hide();

    if (degree > 350 || degree < 10) {
      $("#display").text("show top menu");
      $("#menu-top").show();
    } else if (degree > 80 && degree < 100) {
      $("#display").text("show right menu");
      $("#menu-right").show();
    } else if (degree > 170 && degree < 190) {
      $("#display").text("show bottom menu");
    } else if (degree > 260 && degree < 280) {
      $("#display").text("show left menu");
      $("#menu-left").show();
    }

  }

  var img = $('#spaceship');
   if(img.length > 0){
       var offset = img.offset();
       function mouse(evt){
           var center_x = (offset.left) + (img.width()/2);
           var center_y = (offset.top) + (img.height()/2);
           var mouse_x = evt.pageX; var mouse_y = evt.pageY;
           var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
           var degree = (radians * (180 / Math.PI) * -1) + 180;
           img.css('-moz-transform', 'rotate('+degree+'deg)');
           img.css('-webkit-transform', 'rotate('+degree+'deg)');
           img.css('-o-transform', 'rotate('+degree+'deg)');
           img.css('-ms-transform', 'rotate('+degree+'deg)');
           checkMenuDisplay(degree);
         }
  $(document).mousemove(mouse);
   }


//
// shipj.hover(
//   function (event) {
//     $(this).css("-webkit-animation-play-state", "running");
//   },
//   function (event) {
//     $(this).css("-webkit-animation-play-state", "paused");
//   });

})
