(function(exports) {
  function Total() {
    this.products = new Products().list[0];
  }

  Total.prototype.calculate = function(args) {
    console.log(args);
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

    return lineTotal;
  };

  exports.Total = Total;
})(this);
