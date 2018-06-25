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
	})

	describe('.resetPayments()', function() {
		it('resets expected payment to default back to 0', function() {
			payments.setExpectedPayment(7.39);
			payments.resetPayments()
			expect(payments.showExpectedPayment()).to.eql(0)
		});

		it('resets the expected0change back to 0', function() {
			payments.setExpectedPayment(7.39);
			payments.takePayment(10);
			payments.resetPayments()
			expect(payments.returnChange()).to.eql(0)
		});

		it('resets amount given back to zero', function() {
			payments.setExpectedPayment(7.39);
			payments.takePayment(10);
			payments.resetPayments()
			expect(payments.showAmountGiven()).to.eql(0)
		});
	});;
});
