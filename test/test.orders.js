/* eslint-env es6, mocha */
let expect = chai.expect;
let assert = chai.assert;

describe("Orders", function() {
	describe(".basket", () => {
		it("contains a property called basket that is an empty array", function() {
			let orders = new Orders();
			expect(orders.basket).to.be.instanceof(Array);
		});
	});

	describe(".clearBasket()", function() {
		it("clears Basket array of all contents", function() {
			let orders = new Orders();
			orders.basket.push("Hipster Coffee");
			orders.clearBasket();
			expect(orders.basket).to.be.empty;
		});
	});

	describe(".showBasket()", function() {
		it("returns the orders Array", () => {
			let orders = new Orders();
			orders.basket.push("Hipster Coffee");
			expect(orders.showBasket()).to.eql(orders.basket);
		});
	});

	describe(".addToBasket()", () => {
		it("adds a name and food item to the order object in the basket", () => {
			let orders = new Orders();
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
			let orders = new Orders();
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
			let orders = new Orders();

			assert.throws(
				() => orders.addToBasket("Anna", "Banana"),
				Error,
				"item doesnt exist"
			);
		});
	});
});
