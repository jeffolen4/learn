var appExpenseTrack = appExpenseTrack || {};

appExpenseTrack.expense = function (desc, qty, unitPrice) {
  this.quantity = qty;
  this.desc = desc;
  this.unitPrice = unitPrice;
  this.getTotalPrice = function() {
    this.totalPrice = this.unitPrice * this.quantity;
  }
}
