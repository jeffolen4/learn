$(document).ready(function() {

  var form = $("#form-triangle");
  var triType = $("#tri-type");
  var triPic = $("#tri-pic");

  form.submit(function(event) {
    var side1 = parseInt( $("#side1").val() );
    var side2 = parseInt( $("#side2").val() );
    var side3 = parseInt( $("#side3").val() );

    if ( side1 === side2 && side2 === side3 ) {
      triType.text("eqilateral");
    } else if ( side1 === side2 || side1 === side3 || side2 === side3 ) {
      triType.text("isosceles");
    } else {
      triType.text("scalene");
    }

    event.preventDefault();
  });

});
