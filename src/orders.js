(function(exports) {
  function Orders() {
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

    // so we can skip the name in the arguments and push the food into an array
    for (var i = 1; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    // if it successful we will create an order object with out items and name
    let newOrder = {
      name,
      items: [...args]
    };

    this.basket.push(newOrder);
  };

  exports.Orders = Orders;
})(this);
