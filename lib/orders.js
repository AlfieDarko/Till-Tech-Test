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
		// take a name, and take a food item
		let self = this;
		let args = [];

		function verifyItem(args) {
			for (var i of args) {
				if (self.products.hasOwnProperty(i)) {
				} else {
					throw new Error("item doesnt exist");
				}
			}
		}

		for (var i = 1; i < arguments.length; i++) {
			args.push(arguments[i]);
		}

		verifyItem(args);

		let newOrder = {
			name,
			items: [...args]
		};

		this.basket.push(newOrder);
	};

	exports.Orders = Orders;
})(this);
