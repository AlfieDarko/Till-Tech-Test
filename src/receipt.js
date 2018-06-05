(function(exports) {
  function Receipt() {
    this.total = new Total()
  }

  Receipt.prototype.printReceipt = function(args) {

    let name = args[0]
    // takes orders to parse name a
    // and order items n prices
    // takes total to print totals before tax
    // takes tax to print total afetr tax

    // make it pretty
    console.log('1st args');
    console.log(args);

    console.log(args.name + "'s Order: " + args.items + ". Total: " + this.total.calculate(args).toFixed(2));
    return args.name + "- " + args.items + ": " + this.total.calculate(args).toFixed(2)

  };
  exports.Receipt = Receipt
})(this)
