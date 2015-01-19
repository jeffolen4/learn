$(document).ready(function() {

  var form = $("#entryform");
  var triangle = appTriangleTrack.triangle;

  form.submit(function(event) {

    var newTriangle = new triangle();

    newTriangle.sides = [ parseInt($("#side1").val()), parseInt($("#side2").val()), parseInt($("#side3").val()) ]

    if ( !(newTriangle.findtype()) ) {
      alert("Sides do not create a valid triangle. Please try again.");
      return false;
    }

    $("#" + newTriangle.type).append("<p>" + newTriangle.sides.toString() +  "</p>");

    event.preventDefault();
  });

});
