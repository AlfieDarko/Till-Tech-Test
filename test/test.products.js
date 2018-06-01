describe('Products', function() {
  products = new Products()
  describe('coffeeList', function() {
    it('is an property that is an array', function() {

      chai.expect(products.coffeeList).to.be.instanceof(Array);;
    });

    it('is an array that contains the coffeeList object', function() {

      chai.expect(products.coffeeList[0]).to.be.instanceof(Object)
    });

  });
});
