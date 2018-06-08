(function(exports) {
  function Total() {
    this.products = new Products().list[0]
    this.preTaxTotal = 0
  }

  Total.prototype.calculate = function(args) {
    let total = 0
    let items = args.items;

    for (let i of items) {
      if (this.products.hasOwnProperty(i)) {
        total += this.products[i];
      }
    }

    this.preTaxTotal = total
    return total;
  };

  Total.prototype.calculateEach = function(args) {
    console.log(args[0], 'q4tw');
    this.total = 0
    let lineTotal = []
    let items = args.items;

    for (let i of items) {
      if (this.products.hasOwnProperty(i)) {
        lineTotal.push(this.products[i]);
      }
    }

    return lineTotal

  };

  exports.Total = Total;
})(this)
