(function(exports) {
  function Total(Products) {
    this.products = Products;
  }

  Total.prototype.calculate = function(args) {
    console.log(args, "calculate args whats inside i cant see");
    let total = 0;
    let self = this;
    let newTotal = 0;

    let Total = args.items.reduce((newTotal, items) => {
      if (self.products.listProducts().hasOwnProperty(items)) {
        return (newTotal += self.products.listProducts()[items]);
      }
    }, 0);

    return Total;
  };

  Total.prototype.calculateEach = function(args) {
    let lineTotal = [];
    let items = args.items;
    let self = this;

    items.reduce((newLineTotal, items) => {
      if (self.products.listProducts().hasOwnProperty(items)) {
        lineTotal.push(self.products.listProducts()[items]);
      }
    }, []);

    return lineTotal;
  };

  exports.Total = Total;
})(this);
