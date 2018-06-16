(function(exports) {
  function Total(Products) {
    this.products = Products;
  }

  Total.prototype.calculate = function(args) {
    let total = 0;
    let items = args.items;
    let self = this

    let Total = items
    .reduce((newTotal, items) => {
      if(self.products.hasOwnProperty(items)) {
        return newTotal += self.products[items]
      }
    }, 0)

    return Total;
  };

  Total.prototype.calculateEach = function(args) {
    let lineTotal = [];
    let items = args.items;
    let self = this

    items
    .reduce((newLineTotal, items) => {
      if (self.products.hasOwnProperty(items)) {
        lineTotal.push(self.products[items]);
    }},[])

    return lineTotal;
  };

  exports.Total = Total;
})(this);
