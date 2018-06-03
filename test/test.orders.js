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

	describe(".showBasket()", () => {
		it("returns the orders Array", () => {
			orders.basket.push("Hipster Coffee");

			chai.expect(orders.showBasket()).to.eql(orders.basket);
		});
	});

	// describe(".addToBasket", () => {
	// 	it("adds a food item to the basket", () => {
	// 		let tomsOrder = [
	// 			{
	// 				name: "Tom",
	// 				items: [{ "Cafe Latte": 4.75 }]
	// 			}
	// 		];
	//
	// 		chai
	// 			.expect(orders.addToBasket("Tom", "Cafe Latte"))
	// 			.to.change(orders.basket[0], tomsOrder);
	// 	});
	// });
});