(function(exports) {
  class Total {
    constructor(Products) {
      this.products = Products;
    }

    calculate(args) {
      console.log(args.items);
      let items = args.items
      let self = this;
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
      
      items.map(item => {
        if (self.products.listProducts().hasOwnProperty(item)) {
          lineTotal.push(self.products.listProducts()[item]);
        }
      });

      return lineTotal;
    }
  }

  exports.Total = Total;
})(this);
