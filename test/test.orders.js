/* eslint-env es6, mocha */
let expect = chai.expect;
describe("Orders", function() {
	it("contains a property called basketArray that is an empty array", function() {
		let orders = new Orders();
		expect(orders.basket).to.be.instanceof(Array);
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

	describe(".addToBasket", () => {
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
					items: ["Cafe Latte", "Frappachino", "Orange Juice"]
				}
			];

			orders.addToBasket("Anna", "Cafe Latte", "Frappachino", "Orange Juice");

			expect(orders.showBasket()).to.eql(annasOrder);
		});
	});
});
