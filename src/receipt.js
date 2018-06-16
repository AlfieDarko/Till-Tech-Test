(function(exports) {
  function Receipt(Total, Tax, Discount, Products) {
    this.total = Total;
    this.tax = Tax;
    this.discount = Discount;
    console.log(this.total);
    // this.products = new Products();
  }

  Receipt.prototype.printReceipt = function(args) {
    let self = this;
    let receiptArray = [];
    let lineItemString;
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

    // zip line item and price togethr and push into receipt array
console.log(args.items, 'where the food');
    zip(args.items, total.calculateEach(args)).forEach(function(lineItem) {
      console.log(lineItem, 'is it here');
      receiptArray.push(`${lineItem[0]}: £${lineItem[1]}`);
    });

    console.log( total.calculateEach(args), 'zipped');

    let itemsTotalDiscounts = discount.applyDiscounts(
      total.calculate(args),
      [args]
    );
    let itemsTotalWithoutTax = total.calculate(args).toFixed(2);
    let amountToTax = (
      tax.applyTax(total.calculate(args)).toFixed(2) -
      total.calculate(args).toFixed(2)
    ).toFixed(2);

    let totalWithTax =
      parseFloat(itemsTotalWithoutTax) + parseFloat(amountToTax);

    receiptArray.push(`Total: £${itemsTotalDiscounts.toFixed(2)}`);
    discountDisplayer();
    receiptArray.push(`Tax: £${amountToTax}`);
    receiptArray.push(`Total w/ Tax: £${totalWithTax.toFixed(2)}`);

    console.log(receiptArray);
    return receiptArray;
  };
  exports.Receipt = Receipt;
})(this);
