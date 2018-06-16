(function(exports) {
  function Till(Basket, Payments, Receipt, Total) {
    this.basket = new Basket();
    this.payments = new Payments();
    this.receipt = new Receipt(new Total(new Products()));
  }

  Till.prototype.makePayment = function() {
    let calculatedTotal =this.receipt.total.calculate(this.basket.returnBasket().toFixed(2), this.basket.returnBasket())
    let applicatedDiscounts = this.receipt.discount.applyDiscounts(calculatedTotal)
    let applicatedTax = this.tax.applyTax(applicatedDiscounts)
    let verifiedPayment = this.payment.verifiyPayment(applicatedTax)
  };

  Till.prototype.printReceipt = function () {

  };

  exports.Till = Till;
})(this);
