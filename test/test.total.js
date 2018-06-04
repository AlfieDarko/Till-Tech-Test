/* eslint-env es6, mocha */
// extract calculateTotal to its own class
describe('Total', function() {
  describe('calculateTotal()', function() {
    it('returns total calculated', function() {
      let total = new Total()

      // let basket = sinon.stub(Orders.prototype, "showBasket").returns([
      //   {
      //     name: "Tom",
      //     items: ["Cafe Latte"]
      //   }
      // ]);

      let basket = {
        name: "Tom",
        items: ["Cafe Latte"]
      }
      expect(total.calculate(basket)).to.eql(4.75)
    });
  });
});
