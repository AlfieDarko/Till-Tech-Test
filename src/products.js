(function(exports) {
	function Products() {
		this.list = coffeeList[0].prices;
	}

	Products.prototype.listProducts = function() {
		return this.list[0];
	};

	exports.Products = Products;
})(this);
