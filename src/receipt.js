(function(exports) {
  class Receipt {
    constructor(Total, Tax, Discount, Products) {
      this.total = Total;
      this.tax = Tax;
      this.discount = Discount;
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
        _receiptArray.push(
          "10% Muffin Discount!",
          "5% Off Purchases over 50 Discount!"
        );
      } else if (discount.returnMuffinDiscountBool(args)) {
        _receiptArray.push("10% Muffin Discount!");
      } else if (discount.returnSpendOver50DiscountBool(totalCalculated)) {
        _receiptArray.push("5% Off Purchases over 50 Discount!");
      }
    }

    createReceipt(basket) {
      // adds the dateTime to the receipt
      _receiptArray.push(`${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} \n`)
      // set up variable names for clarification
      let preTotal = total.calculate(basket).toFixed(2);
      let preTotalWithDiscounts = discount.applyDiscounts(preTotal, basket);
      _receiptArray.push(`${basket.name}'s Order:`);
      let amountToTax = (
        tax.applyTax(total.calculate(basket)).toFixed(2) - preTotal
      ).toFixed(2);
      let totalWithTax =
        parseFloat(preTotalWithDiscounts) + parseFloat(amountToTax);
      // This zips-up item and price together as a line item and push into receipt array
      this.zipItemsAndPrices(basket.items, total.calculateLinePrice(basket)).map(
        lineItem => {
          _receiptArray.push(`${lineItem[0]}: £${lineItem[1]}`);
        }
      );
      // Now we add the discounts and totals info to an receipts array
      this.addDiscountAlertOnReceipt(basket, preTotal);
      discount.resetDiscounts();basket
      _receiptArray.push(
        `===========================`,
        `  Total: £${preTotal}`,
        `  Discount Price: £ ${preTotalWithDiscounts.toFixed(2)}`,
        `  Tax: £${amountToTax}`,
        `---------------------------`,
        `  Total w/ Tax: £${totalWithTax.toFixed(2)}`,
        `---------------------------`,
      );
    }

    addCashPaidFromTillToReceipt(cashPaid){
      _receiptArray.push(`    Amount Paid: £${cashPaid}`)
    }

    addChangeGivenFromTillToReceipt(changeGiven){
      _receiptArray.push(`    Change Given: £${changeGiven}`)
    }

    printReceipt() {
      return _receiptArray
    }

    clearReceipt(){
      _receiptArray.length = 0
    }
  }

  let  _receiptArray = [];

  exports.Receipt = Receipt;
})(this);
