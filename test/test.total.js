/* eslint-env es6, mocha */

describe('Total', function() {
  let total
  describe('calculate()', function() {
    beforeEach(function() {
      total = new Total()
    });
    it('returns total calculated for one item', function() {

      let basket = {
        name: "Tom",
        items: ["Cafe Latte"]
      }
      expect(total.calculate(basket)).to.eql(4.75)
    });

    it('returns total calculated for two items', function() {

      let basket = {
        name: "Tom",
        items: ["Cafe Latte", "Single Espresso"]
      }
      expect(total.calculate(basket)).to.eql(6.8)

    });

    describe('calculateEach()', function() {
      it('calculates and returns an array of singular item prices', function() {

        let basket = {
          name: "Tom",
          items: ["Cafe Latte", "Single Espresso"]
        }
        expect(total.calculateEach(basket)).to.eql([4.75, 2.05])

      });
    });
  });
});
