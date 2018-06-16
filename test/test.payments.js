/* eslint-env es6, mocha */

describe("Payments", function() {
	let payments;
	let applyTax;



	describe(".takePayment()", function() {
		beforeEach(function() {
			payments = new Payments();
		});

		afterEach(function() {
		});

		it("only accepts numbers as payment", function() {
			assert.throws(
				() => payments.takePayment("Number"),
				Error,
				"Not a valid number"
			);
		});

		it("throws error if amount isnt more than expected payment", function() {
			payments.setExpectedPayment(7.39);
			assert.throws(
				() => payments.takePayment(5),
				Error,
				"Not enough to make payment"
			);
		});
	});

	describe(".returnChange()", function() {
		beforeEach(function() {
			payments = new Payments();
		});

		afterEach(function() {
		});

		it("returns the correct amount of change to give to customer", function() {
			payments.setExpectedPayment(7.39);
			payments.takePayment(10);
			expect(payments.returnChange()).to.eql(2.61);
		});
	});
});
