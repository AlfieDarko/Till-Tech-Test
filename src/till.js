(function(exports) {
  function Till() {
    this.orders = new Orders();
    this.total = new Total();
    this.payments = new Payments()
    this.receipt = new Receipt()
    this.tax = new Tax()
  }
  exports.Till = Till;
})(this);
