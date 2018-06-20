(function(exports) {
  class Receipt {
    constructor(Total, Tax, Discount, Products) {
      this.total = Total;
      this.tax = Tax;
      this.discount = Discount;
      // this.products = new Products();
    }

    zipItemsAndPrices(...arrays) {
      const length = Math.min(...arrays.map(arr => arr.length));
      return Array.from(
        {
          length
        },
        (value, index) => arrays.map(array => array[index])
      );
    }

    addDiscountAlertOnReceipt(args, totalCalculated) {
      if (
        discount.returnMuffinDiscountBool(args) &&
        discount.returnSpendOver50DiscountBool(totalCalculated)
      ) {
        receiptArray.push(
          "10% Muffin Discount!",
          "5% Off Purchases over 50 Discount!"
        );
      } else if (discount.returnMuffinDiscountBool(args)) {
        receiptArray.push("10% Muffin Discount!");
      } else if (discount.returnSpendOver50DiscountBool(totalCalculated)) {
        receiptArray.push("5% Off Purchases over 50 Discount!");
      }
    }

    printReceipt(args) {
      let self = this;
      let lineItemString;
      let totalCalculated = total.calculate(args);
      let preTotal = total.calculate(args).toFixed(2);
      let preTotalWithDiscounts = discount.applyDiscounts(preTotal, args);

      receiptArray.push(`${args.name}'s Order:`);

      // This zips-up item and price together and push into receipt array
      this.zipItemsAndPrices(args.items, total.calculateLinePrice(args)).map(
        lineItem => {
          receiptArray.push(`${lineItem[0]}: £${lineItem[1]}`);
        }
      );

      let amountToTax = (
        tax.applyTax(total.calculate(args)).toFixed(2) - preTotal
      ).toFixed(2);

      let totalWithTax =
        parseFloat(preTotalWithDiscounts) + parseFloat(amountToTax);

      // Now we add all the info to an receipts array
      this.addDiscountAlertOnReceipt(args, preTotal);
      discount.resetDiscounts();
      receiptArray.push(
        `Total: £${preTotal}`,
        `Discount Price: £${preTotalWithDiscounts.toFixed(2)}`,
        `Tax: £${amountToTax}`,
        `Total w/ Tax: £${totalWithTax.toFixed(2)}`
      );

      return receiptArray;
    }
  }

  let receiptArray = [];

  exports.Receipt = Receipt;
})(this);
