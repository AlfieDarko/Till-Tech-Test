(function(exports) {
  class Total {
    constructor(Products) {
      this.products = Products;
    }

    calculate(args) {
      let items = args.items
      let total = 0;
      let self = this;
      let newTotal = 0;
      let Total = items.reduce((newTotal, items) => {
        if (self.products.listProducts().hasOwnProperty(items)) {
          return (newTotal += self.products.listProducts()[items]);
        }
      }, 0);
      return Total;
    }

    calculateLinePrice(args) {
      let lineTotal = [];
      let items = args.items;
      let self = this;

      // am I using reduce efficiently? Not reducing results into the provided
      // array. Not returning.
      items.reduce((newLineTotal, items) => {
        if (self.products.listProducts().hasOwnProperty(items)) {
          lineTotal.push(self.products.listProducts()[items]);
        }
      }, []);
      return lineTotal;
    }
  }

  exports.Total = Total;
})(this);
