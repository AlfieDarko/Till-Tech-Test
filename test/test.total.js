/* eslint-env es6, mocha */

describe('Total', function() {
  describe('calculateTotal()', function() {
    it('returns total calculated for one item', function() {
      let total = new Total()

      let basket = {
        name: "Tom",
        items: ["Cafe Latte"]
      }
      expect(total.calculate(basket)).to.eql(4.75)
    });

    it('returns total calculated for two items', function() {
      let total = new Total()

      let basket = {
        name: "Tom",
        items: ["Cafe Latte", "Single Espresso"]
      }
      expect(total.calculate(basket)).to.eql(6.8)

    });
  });
});
