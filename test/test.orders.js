/* eslint-env es6, mocha */
let expect = chai.expect;
let assert = chai.assert;

describe("Orders", function() {
	let orders;
	describe(".basket", () => {
		beforeEach(function() {
			orders = new Orders();
		});
	});

	describe(".addToBasket()", () => {
		beforeEach(function() {
			orders = new Orders();
		});

		it("adds a name and food item to the order object in the basket", () => {
			let tomsOrder = [
				{
					name: "Tom",
					items: ["Cafe Latte"]
				}
			];
			orders.addToBasket("Tom", "Cafe Latte");
			expect(orders.showBasket()).to.eql(tomsOrder);
		});

		it("adds a name and multiple food items to the order object", () => {
			let annasOrder = [
				{
					name: "Anna",
					items: ["Cafe Latte", "Single Espresso", "Cortado"]
				}
			];
			orders.addToBasket("Anna", "Cafe Latte", "Single Espresso", "Cortado");
			expect(orders.showBasket()).to.eql(annasOrder);
		});

		it("throws error if food is not on the menu", () => {
			assert.throws(
				() => orders.addToBasket("Anna", "Banana"),
				Error,
				"item doesnt exist"
			);
		});
	});

	describe(".showBasket()", function() {
		beforeEach(function() {
			orders = new Orders();
		});

		it("returns the orders Array", () => {
			orders.basket.push("Hipster Coffee");
			expect(orders.showBasket()).to.eql(orders.basket);
		});
	});

	describe(".clearBasket()", function() {
		beforeEach(function() {
			orders = new Orders();
		});

		it("clears Basket array of all contents", function() {
			// let orders = new Orders();
			orders.addToBasket("Tom", "Cafe Latte");
			orders.clearBasket();
			expect(orders.showBasket()).to.be.empty;
		});
	});
});
