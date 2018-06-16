(function(exports) {
  function Receipt(Total, Tax, Discount, Products) {
    this.total = Total;
    this.tax = Tax;
    this.discount = Discount;
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

    // This zips-up item and price together and push into receipt array
    zip(args.items, total.calculateEach(args))
    .map(lineItem => {
      receiptArray.push(`${lineItem[0]}: £${lineItem[1]}`);
    });

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



    // Clean up? declare them in the order things are happening
    return receiptArray;
  };
  exports.Receipt = Receipt;
})(this);
