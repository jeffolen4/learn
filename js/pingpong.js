
$(document).ready( function() {
  var current = 1;
  var list = $("ul");
  var numberLeft = $("#number-left");

  function wait() {

    if ( current <= upToNumber ) {
      var outText = "";
      if ( current % 3 == 0 ) {
        outText += "ping";
      }
      if ( current % 5 == 0 ) {
        if ( !outText == "" ) {
          outText += "-"
        }
        outText += "pong";
      }
      if ( outText == "" ) {
        outText = current.toFixed(0);
      }
      list.append("<li>" + outText + "</li>");
      numberLeft.text( (upToNumber - current).toFixed(0) );
      current++;
    } else {
      clearInterval(tid);
    }

  }

  var upToNumber = prompt("Ping pong up to?");
  var tid = setInterval( wait , 500 );

});
