(function(exports) {
  function Total() {
    this.total = 0
    this.products = new Products().list[0]
  }

  Total.prototype.calculate = function(args) {
    let items = args.items;

    for (let i of items) {
      if (this.products.hasOwnProperty(i)) {
        this.total += this.products[i];
      }
    }

    return this.total;
  };

  exports.Total = Total;
})(this)
