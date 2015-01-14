$(document).ready( function() {

  $("#form-madlib").submit( function() {

    var errorFound = false;

    function displayError ( node ) {
      errorFound = true;
      //node.show();
      node.slideDown(400);
    }

    function checkError(editObject ) {
      var e = $(editObject)
      if ( e.val() == "" ) {
        displayError( e.next() );
      }
    }

    $(".error").slideUp(400);
    //$(".error").hide();

    $(this).find("input").each(
      function(index, f) {
        checkError(f) });

    if (!errorFound) {

      $(".outName1").text( $("#properName1").val()    );
      $(".outNoun1").text( $("#noun1").val()          );
      $(".outAdjective1").text( $("#adjective1").val());
      $(".outVerb1").text( $("#verb1").val() );
      $(".outExclamation1").text( $("#exclamation1").val().toUpperCase() );

      $("#story-text").show();
    }

    event.preventDefault();
  });

  $("#btn-blue").click( function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  });

  $("#btn-green").click( function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("#btn-black").click( function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });

  $("#btn-reset").click( function() {
    $("body").removeClass();
  });

  $("p").click( function() {
    if ( $(this).hasClass("highlight") ) {
      $(this).removeClass();
    } else {
      $(this).addClass("highlight");
    }
  });

});
