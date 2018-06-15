(function(exports) {
  function Till(Orders, Total, Payments, Receipt, Tax, Discount) {
    this.orders = new Orders();
    this.total = new Total();
    this.payments = new Payments();
    this.receipt = new Receipt(Total);
    this.tax = new Tax();
    this.discount = new Discount();
  }

  Till.prototype.printReceipt = function() {};
  exports.Till = Till;
})(this);
