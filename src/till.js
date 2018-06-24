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
      this.payments.setExpectedPayment(totalCost);
      this.payments.takePayment(cashPayment);
    }

    printReceipt(args) {
      this.receipt.createReceipt(
        this.basket.returnBasket()
      )
      this.receipt.addCashPaidFromTillToReceipt(this.payments.showAmountGiven())
      this.receipt.addChangeGivenFromTillToReceipt(this.payments.returnChange())
       return this.receipt.printReceipt();
    }

    clearReceipt(){
      this.receipt.clearReceipt()
    }

    returnChange() {
      return this.payments.returnChange();
    }

    returnBasket() {
      return this.basket.returnBasket();
    }

    returnBasketItems(){
      return this.basket.returnBasketItems()
    }

    addToBasket(order) {
      this.basket.addToBasket(order);
    }

    clearBasket() {
      this.basket.clearBasket();
    }

    calculate(basket) {
      return this.receipt.total.calculate(till.basket.returnBasket())
    }

    applyTax(preTotal){
      return this.receipt.tax.applyTax(preTotal)
    }

    applyDiscounts(preTotal, returnBasket){
      return this.receipt.discount.applyDiscounts(
        preTotal,
        this.basket.returnBasket()
      );
    }



  }

  exports.Till = Till;
})(this);
