$(document).ready( function() {

  $("#form-info").submit( function() {

    var errorFound = false;

    function displayError( node ) {
      errorFound = true;
      node.slideDown(400);
    }

    function checkError(editObject ) {
      if ( editObject.dataset.edits ) {
        var edits = editObject.dataset.edits.split(",");
        $(edits).each( function( index, value ) {
          console.log("index: " + index.toFixed(0) + "value: " + value );

          // check for blank value
          if ( value == "blank" && editObject.value == "" ) {
            nodeName = "#err-" + editObject.id + "-" + value;
            displayError( $(nodeName) );
          }

          // check for one word name
          if ( value == "short" && editObject.value.split(" ").length == 1 && editObject.value != "" ) {
            nodeName = "#err-" + editObject.id + "-" + value;
            displayError( $(nodeName) );
          }

          // check for valid numeric entry
          if ( value == "numeric" && isNaN(editObject.value) == true && editObject.value != "" ) {
            nodeName = "#err-" + editObject.id + "-" + value;
            displayError( $(nodeName) );
          }
        });
      }
    }

    $(".error").slideUp(400);
    $(".result").slideUp(10);
    event.preventDefault();

    $(this).find("input").each(
      function(index, f) {
        checkError(f) });

        if (!errorFound) {
          var age = $("#info-age").val();
          if ( $("#female").is(":checked") ) {
            var sex = "female"
          } else {
          var sex = "male"
          }

          if ( sex == "male" ) {
            if( age < 30 ) {
              $("#result-head").slideDown(100);
              $(".taylors").slideDown(400);
            } else {
              $("#result-head").slideDown(100);
              $(".hallieb").slideDown(400);
            }
          } else {
            if( age < 30 ) {
              $("#result-head").slideDown(100);
              $(".justint").slideDown(400);
            } else {
              $("#result-head").slideDown(100);
              $(".hughj").slideDown(400);
            }
          }
        }

      });

    });
