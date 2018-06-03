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

	Orders.prototype.verifyItems = function(args) {
		throw "item doesnt exist";
	};

	Orders.prototype.addToBasket = function(name, food) {
		// take a name, and take a food item
		let args = [];
		let products = this.products;

		for (var i = 1; i < arguments.length; i++) {
			args.push(arguments[i]);
		}

		function verifyItem(args) {
			for (var i of args) {
				// console.log(i);
				// console.log(products);
				if (products.hasOwnProperty(i)) {
					// console.log(i);
					// console.log("well done");
				} else {
					throw new Error("item doesnt exist");
				}
			}
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
