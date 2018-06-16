(function(exports) {
  function Till(Basket, Payments, Receipt) {
    this.basket = Basket;
    this.payments = Payments;
    this.receipt = Receipt;
  }

  Till.prototype.makePayment = function() {
    let calculatedTotal = this.receipt.total.calculate(
      this.basket.returnBasket().toFixed(2),
      this.basket.returnBasket()
    );
    let applicatedDiscounts = this.receipt.discount.applyDiscounts(
      calculatedTotal
    );
    let applicatedTax = this.tax.applyTax(applicatedDiscounts);
    let verifiedPayment = this.payment.verifiyPayment(applicatedTax);
  };

  Till.prototype.printReceipt = function() {
    this.receipt.printReceipt()
  };

  exports.Till = Till;
})(this);
