function addTribble(addCount) {
  for (i=0; i < addCount; i++) {
    $("ul.tribbles").prepend('<li class="tribble"><img src="img/tribble.jpg" width=50px height=50px></li>');
  }
}

$(document).ready( function() {

  $(".mnu_trigger").hover(
    function() {
      $(".mnu_text").slideUp();
      $(this).next().slideDown();
    } ,
    function() {
      $(".mnu_text").slideUp()
    }
  );

  $("#add1").click( function() {
    addTribble(1);
  });

  $("#add5").click( function() {
    addTribble(5);
  });


  $("#addSmart").click( function() {
    $("ul.tribbles").prepend('<li class="smartTribble" data-transition="fade"><img src="img/tribble.jpg" width=50px height=50px></li>');
  });

  $(".tribbles").on('click','li', function() {
    var trans = $(this).attr("data-transition");
    if ( trans ) {
      $(this).effect(trans);
    } else {
      $(this).remove();
    }
  });

  $(".tribbles smartTribble").on('click','li', function() {
    $(this).animate({left:'250px'});
  });

  $("#phaser").click( function() {
    $(".tribble").fadeOut(700)
  });

});
