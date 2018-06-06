describe('Discount', function() {
  let discount
  let calculate
  let showBasket
  describe('.applyDiscounts()', function() {

    beforeEach(function() {
      discount = new Discount()
      calculate = sinon.stub(Total.prototype, "calculate")

      showBasket = sinon.stub(Orders.prototype, "showBasket")

    });

    afterEach(function() {
      Total.prototype.calculate.restore();
      Orders.prototype.showBasket.restore();

      // Unwraps the spy
    });

    it('applies 5% discount on orders over 50', function() {

      calculate.returns(100)
      expect(discount.applyDiscounts(calculate())).to.eql(95)
    });

  });
});
