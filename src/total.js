(function(exports) {
  function Total(Products) {
    this.products = Products;
    console.log(Products);
    // this.products = new Products().list[0];

    // console.log(this.products.listProducts());
    // this.products = this.products.list[0];
  }

  Total.prototype.calculate = function(args) {
    let total = 0;
    let items = args.items;

    console.log(this.products, "this.products");
    console.log(this.products.listProducts, "this.products");

    for (let i of items) {
      if (this.products.hasOwnProperty(i)) {
        console.log(this.products.listProducts, "this.products");
        total += this.products[i];
      }
    }

    return total;
  };

  Total.prototype.calculateEach = function(args) {
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
