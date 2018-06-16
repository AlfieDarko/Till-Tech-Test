(function(exports) {
  function Till(Basket, Total, Payments, Receipt, Tax, Discount) {
    this.basket = new Basket();
    this.total = new Total();
    this.payments = new Payments();
    this.receipt = new Receipt();
    this.tax = new Tax();
    this.discount = new Discount();
  }

  Till.prototype.makePayment = function() {
    let calculatedTotal =this.total.calculate(this.basket.returnBasket()[0].toFixed(2), this.basket.returnBasket([0]))
    let applicatedDiscounts = this.discount.applyDiscounts(calculatedTotal)
    let applicatedTax = this.tax.applyTax(applicatedDiscounts)
    let verifiedPayment = this.payment.verifiyPayment(applicatedTax)
  };

  Till.prototype.printReceipt = function () {

  };

  exports.Till = Till;
})(this);
