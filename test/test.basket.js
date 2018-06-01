describe('Basket', function() {
  basket = new Basket()
  it('contains a property called basketArray that is an empty array', function() {
    chai.expect(basket.basketArray).to.be.instanceof(Array);
  });

  describe('.clearBasket()', function() {
    it('clears Basket array of all contents', function() {

      basket.basketArray.push('Hipster Coffee')
      basket.clearBasket()
      chai.expect(basket.basketArray).to.be.empty
    });
  });
});
