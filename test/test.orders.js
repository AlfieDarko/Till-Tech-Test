describe("Orders", function() {
	orders = new Orders();
	it("contains a property called basketArray that is an empty array", function() {
		chai.expect(orders.basket).to.be.instanceof(Array);
	});

	describe(".clearBasket()", function() {
		it("clears Basket array of all contents", function() {
			orders.basket.push("Hipster Coffee");
			orders.clearBasket();
			chai.expect(orders.basket).to.be.empty;
		});
	});
});
