$(document).ready(function() {

  var form = $("#entryform");
  var expense = appExpenseTrack.expense;

  var qty = $("#qty");
  var price = $("#price");
  var desc = $("#desc");
  var grandTotal = 0;

  form.submit(function(event) {


    if ( !( $.isNumeric(qty.val()) ) ) {
      alert("Quantity must be a valid number.");
      return false;
    }

    if ( !($.isNumeric(price.val()) ) ) {
      alert("Price must be a valid number.");
      return false;
    }

    var newExpense = new expense( desc.val(), parseInt(qty.val()), parseFloat(price.val()) );
    newExpense.getTotalPrice();

    $("#expense-table > tbody:last").append("<tr class=\"table-striped\">" +
                      "<td>" + newExpense.desc +  "</td>" +
                      "<td>" + newExpense.quantity.toFixed(0) +  "</td>" +
                      "<td>" + newExpense.unitPrice.toFixed(2) +  "</td>" +
                      "<td>" + newExpense.totalPrice.toFixed(2) +  "</td></tr>");

    grandTotal += newExpense.totalPrice;
    $("#grandtotal").text(grandTotal.toFixed(2));

    price.val("");
    qty.val("");
    desc.val("");

    event.preventDefault();
  });

});
