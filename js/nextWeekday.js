$(document).ready(function() {

  function nextWeekday(x){
    var now = new Date();
    if ( x === now.getDay() ) {
      now.setDate(now.getDate() + 7);
    } else {
      now.setDate(now.getDate() + (x+(7-now.getDay())) % 7);
    }
    return now.toDateString();
  }


  $("#day").change( function () {
    var dropdown = document.getElementById("day");
    var day = dropdown.options[dropdown.selectedIndex].value;
    $("#result").text(nextWeekday(Number(day)));
  });



  $( "#Monday" ).click(function() {
    $("#result").text(nextWeekday(1));
  });

  $( "#Tuesday" ).click(function() {
    $("#result").text(nextWeekday(2));
  });

  $( "#Wednesday" ).click(function() {
    $("#result").text(nextWeekday(3));
  });

  $( "#Thursday" ).click(function() {
    $("#result").text(nextWeekday(4));
  });

  $( "#Friday" ).click(function() {
    $("#result").text(nextWeekday(5));
  });

  $( "#Saturday" ).click(function() {
    $("#result").text(nextWeekday(6));
  });

  $( "#Sunday" ).click(function() {
    $("#result").text(nextWeekday(0));
  });

});
