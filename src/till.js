(function(exports) {
  class Till {
    constructor(Basket, Payments, Receipt) {
      this.basket = Basket;
      this.payments = Payments;
      this.receipt = Receipt;
    }
    makePayment(cashPayment) {
      let preTotal = this.receipt.total.calculate(this.basket.returnBasket());
      let preTotalWithDiscounts = this.receipt.discount.applyDiscounts(
        preTotal,
        this.basket.returnBasket()
      );
      let totalCost = this.receipt.tax.applyTax(preTotalWithDiscounts);
      let expectedPayment = this.payments.setExpectedPayment(totalCost);
      this.payments.takePayment(cashPayment);
      let returnedChange = this.payments.returnChange();
      console.log(returnedChange);
    }
    printReceipt() {
      this.receipt.printReceipt();
    }
  }

  exports.Till = Till;
})(this);
