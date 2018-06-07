(function(exports) {
  function Orders() {
    this.products = new Products().list[0];
    this.basket = [];
  }

  Orders.prototype.clearBasket = function() {
    this.basket.length = 0;
  };

  Orders.prototype.showBasket = function() {
    return this.basket;
  };

  Orders.prototype.addToBasket = function(name, food) {
    // takes a name, and take a food item

    // so we can extend the scope of this inside of internal functions
    let self = this;

    let args = [];

  // function to verify that the names of the food exist in the database
    function verifyItem(args) {
      for (var i of args) {
        if (self.products.hasOwnProperty(i)) {} else {
          throw new Error("item doesnt exist");
        }
      }
    }

   // so we can skip the name in the arguments and push the food into an array
    for (var i = 1; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    // now we will verify the args array that is full of our food
    verifyItem(args);

    // if it successful we will create an order object with out items and name
    let newOrder = {
      name,
      items: [...args]
    };

    this.basket.push(newOrder);
  };

  exports.Orders = Orders;
})(this);
