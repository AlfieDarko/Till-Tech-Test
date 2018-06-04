(function(exports) {
  function Receipt() {}

  Receipt.prototype.printReceipt = function(args) {

    let name = args[0]
    // takes orders to parse name a
    // and order items n prices
    // takes total to print totals before tax
    // takes tax to print total afetr tax

    // make it pretty
    return args[0]
  };
  exports.Receipt = Receipt
})(this)
