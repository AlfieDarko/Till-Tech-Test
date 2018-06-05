(function(exports) {
  function Receipt() {
    this.total = new Total()
    this.tax = new Tax()
  }

  Receipt.prototype.printReceipt = function(args) {

    const zip = (...arrays) => {
      const length = Math.min(...arrays.map(arr => arr.length));
      return Array.from({
        length
      }, (value, index) => arrays.map((array => array[index])));
    };

    let receiptString = `${args.name}'s Order: \n\n`

    zip(args.items, this.total.calculateEach(args)).forEach(function(lineItem) {
      receiptString += lineItem[0] + ": " + lineItem[1] + "\n";
    });

    receiptString += `
    Total: ${this.total.calculate(args).toFixed(2)}
    `
    receiptString += `Total w/ Tax: ${this.tax.applyTax(this.total.calculate(args))}`

    console.log(receiptString);
    return receiptString

  };
  exports.Receipt = Receipt
})(this)
