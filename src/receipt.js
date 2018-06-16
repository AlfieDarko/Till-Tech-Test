(function(exports) {
  function Receipt(Total, Tax, Discount, Products) {
    this.total = new Total(new Products());
    this.tax = new Tax();
    this.discount = new Discount();
  }

  Receipt.prototype.printReceipt = function(args) {
    let self = this;
    let receiptArray = [];
    let lineItemString
    // function to zip the items and price into one array
    function zip(...arrays) {
      const length = Math.min(...arrays.map(arr => arr.length));
      return Array.from(
        {
          length
        },
        (value, index) => arrays.map(array => array[index])
      );
    }

    // function to add the discount strings onto the receiptArray
    function discountDisplayer() {
      if (self.discount.muffinDiscountBool) {
        receiptArray.push("10% Muffin Discount! \n");
      } else if (self.discount.spendOver50DiscountBool) {
        receiptArray.push("5% Off Purchases over 50 Discount!");
      }
    }

    receiptArray.push(`${args.name}'s Order:`);

    zip(args.items, this.total.calculateEach(args)).forEach(function(lineItem) {
      receiptArray.push(`${lineItem[0]}: £${lineItem[1]}`) ;
    });

    let itemsTotalDiscounts = this.discount.applyDiscounts(
      this.total.calculate(args),
      [args]
    );
    let itemsTotalWithoutTax = this.total.calculate(args).toFixed(2);
    let amountToTax = (
      this.tax.applyTax(this.total.calculate(args)).toFixed(2) -
      this.total.calculate(args).toFixed(2)
    ).toFixed(2);

    let totalWithTax =
      parseFloat(itemsTotalWithoutTax) + parseFloat(amountToTax);

    receiptArray.push(`Total: £${itemsTotalDiscounts.toFixed(2)}`);
    discountDisplayer();
    receiptArray.push(`Tax: £${amountToTax}`)
    receiptArray.push(`Total w/ Tax: £${totalWithTax.toFixed(2)}`);

    console.log(receiptArray);
    return receiptArray;
  };
  exports.Receipt = Receipt;
})(this);
