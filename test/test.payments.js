describe('Payments', function() {
  let payments

  describe('.takePayment()', function() {
    beforeEach(function() {
      payments = new Payments()
    });

    it('only accepts numbers as payment', function() {

      assert.throws(() => payments.takePayment("Number"), Error, "Not a valid number")
    });

  });
});
