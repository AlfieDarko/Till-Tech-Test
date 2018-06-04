(function(exports) {
  function Total() {
    this.total = 0
    this.products = new Products().list[0]
  }

  Total.prototype.calculate = function(args) {
    console.log(args);
    // args is o.showBasket()[0].items
    // args2 = o

    // let items = this.orders.showBasket()[0].items;
    // let itemsv2 = this.orders
    // .showBasket()[0].items;
    let items = args.items;

    for (let i of items) {
      console.log(i);
      console.log(this.products);
      if (this.products.hasOwnProperty(i)) {
        this.total += this.products[i];
      }
    }

    return this.total;
  };

  exports.Total = Total;
})(this)

// (function(exports) {
//   function Total() {
//     this.currentTotal = 0
//   }
//
//   Total.prototype.calculateTotal = function(args) {
//     let items = this.orders.showBasket()[0].items;
//
//     for (let i of items) {
//       if (this.orders.products.hasOwnProperty(i)) {
//         this.total += this.orders.products[i];
//       }
//     }
//
//     return this.total;
//   };
//
//   exports.Total = Total
// })(this)