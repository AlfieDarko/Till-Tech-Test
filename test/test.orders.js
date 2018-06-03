describe("Orders", function() {
	beforeEach(() => {
		orders = new Orders();
	});

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

	describe(".addToBasket", () => {
		it("adds a name and food item to the order object in the basket", () => {
			let tomsOrder = [
				{
					name: "Tom",
					items: ["Cafe Latte"]
				}
			];
			orders.addToBasket("Tom", "Cafe Latte");
			chai.expect(orders.showBasket()).to.eql(tomsOrder);
		});

		it("adds a name and multiple food items to the order object", () => {
			let annasOrder = [
				{
					name: "Anna",
					items: ["Cafe Latte", "Frappachino", "Orange Juice"]
				}
			];

			orders.addToBasket("Anna", "Cafe Latte", "Frappachino", "Orange Juice");

			chai.expect(orders.showBasket()).to.eql(annasOrder);
		});
	});
});
