
$(document).ready( function() {
  var count = 3;
  var list = $("ul");

  function wait() {

    if ( count >= 1 ) {
      var lineItem = "<li>" + count.toFixed(0) + " bottles of beer on the wall</li>";
      list.append(lineItem);
      count--;
    } else {
      list.append("<li>Get more beer!</li>");
      clearInterval(tid);
    }

  }

  var tid = setInterval( wait , 1500 );

});
