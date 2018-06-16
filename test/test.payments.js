/* eslint-env es6, mocha */

describe("Payments", function() {
	let payments;
	let applyTax;



	describe(".takePayment()", function() {
		beforeEach(function() {
			payments = new Payments();

			applyTax = sinon.stub(Tax.prototype, "applyTax");
		});

		afterEach(function() {
			Tax.prototype.applyTax.restore();
		});

		it("only accepts numbers as payment", function() {
			assert.throws(
				() => payments.takePayment("Number"),
				Error,
				"Not a valid number"
			);
		});

		it("throws error if amount isnt more than expected payment", function() {
			applyTax.returns(7.39);
			payments.verifyPayment(applyTax());
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
			applyTax = sinon.stub(Tax.prototype, "applyTax");
		});

		afterEach(function() {
			Tax.prototype.applyTax.restore();
		});

		it("returns the correct amount of change to give to customer", function() {
			applyTax.returns(7.39);
			payments.verifyPayment(applyTax());
			payments.takePayment(10);
			expect(payments.returnChange()).to.eql(2.61);
		});
	});
});
