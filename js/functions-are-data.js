$(document).ready(function() {

  function countWords(str) {
    return str.split(' ').length;
  }

  function changeToLowerCase( str ) {
    return str.toLowerCase();
  }

  function changeToUpperCase( str ) {
    return str.toUpperCase();
  }

  function btnClicked(event) {
    var actions = {
      'lowercase' : changeToLowerCase,
      'uppercase' : changeToUpperCase,
      'count-words': countWords,
      'count-chars': function(str) {
        return str.length;
      }
    }
    var n = $(this).attr('name');
    var action = actions[n];
    var theText = $('#string-source').val()
    if (action) {
      var result = action(theText);
    }
    $('#results').text(result);
    event.preventDefault();
  }


  $('button').click(btnClicked)
})
