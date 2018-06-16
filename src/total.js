(function(exports) {
  function Total(Products) {
    this.products = Products;
  }

  Total.prototype.calculate = function(args) {
    let total = 0;
    let items = args.items;

    for (let i of items) {
      if (this.products.hasOwnProperty(i)) {
        total += this.products[i];
      }
    }

    return total;
  };

  Total.prototype.calculateEach = function(args) {
    console.log(args);
    this.total = 0;
    let lineTotal = [];
    let items = args.items;

    for (let i of items) {
      if (this.products.hasOwnProperty(i)) {
        lineTotal.push(this.products[i]);
      }
    }
    console.log(lineTotal, 'line');

    return lineTotal;
  };

  exports.Total = Total;
})(this);
