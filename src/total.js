(function(exports) {
  function Total(Products) {
    this.products = Products;
  }

  Total.prototype.calculate = function(args) {
    console.log(args, 'what was found inside in');
    console.log(args.name, 'args.name');
    console.log(args.name.items, 'args.name.items');

    let total = 0;
    let items = args.name.items;
    let self = this
    let newTotal = 0
  console.log(items, 'args.items');
    let Total = args.items.reduce((newTotal, items) => {
      if(this.products.hasOwnProperty(items)) {
        console.log(items, 'itemsss');
        return newTotal += self.products[items]
      }
    }, 0)

    console.log(newTotal);
  console.log(Total, 'total');
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
