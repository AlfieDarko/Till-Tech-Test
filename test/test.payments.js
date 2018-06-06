describe('Payments', function() {
  let payments
  let applyTax

  describe('.verifyPayment()', function() {
    beforeEach(function() {
      payments = new Payments()
      applyTax = sinon.stub(Tax.prototype, "applyTax")

    });

    afterEach(function() {
      Tax.prototype.applyTax.restore()
    });

    it('verifies how much needs to be paid and sets as the expectecd payment property', function() {
      applyTax.returns(7.39)
      payments.verifyPayment(applyTax())
      expect(payments.expectedPayment).to.equal(7.39);
    });
  });

  describe('.takePayment()', function() {
    beforeEach(function() {
      payments = new Payments()

      // applyTax = sinon.stub(Tax.prototype, "applyTax")

    });

    afterEach(function() {
      // Tax.prototype.applyTax.restore()
    });

    it('only accepts numbers as payment', function() {

      assert.throws(() => payments.takePayment("Number"), Error, "Not a valid number")
    });

    // it('verifies', function() {
    //
    //   applyTax.returns(4.50)
    //   assert.throws(() => payments.takePayment(5), Error, "Not enough to cover purchase")
    //
    // });
  });
});
