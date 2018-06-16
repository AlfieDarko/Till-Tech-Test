/* eslint-env es6, mocha */
describe("Total", function() {
  let total;
  let productsStub;
  describe("calculate()", function() {
    beforeEach(function() {
      productsStub = sinon
        .stub(Products.prototype, "listProducts")
        .callsFake(() => ({
          "Cafe Latte": 4.75,
          "Flat White": 4.75,
          Cappucino: 3.85,
          "Single Espresso": 2.05,
          "Double Espresso": 3.75,
          Americano: 3.75,
          Cortado: 4.55,
          Tea: 3.65,
          "Choc Mudcake": 6.4,
          "Choc Mousse": 8.2,
          Affogato: 14.8,
          Tiramisu: 11.4,
          "Blueberry Muffin": 4.05,
          "Chocolate Chip Muffin": 4.05,
          "Muffin Of The Day": 4.55
        }));
      total = new Total(new productsStub());
    });

    afterEach(function() {
      productsStub.restore();
    });

    it("returns total calculated for one item", function() {
      let basket = {
        name: "Tom",
        items: ["Cafe Latte"]
      };
      console.log(products.listProducts());
      expect(total.calculate(basket)).to.eql(4.75);
    });

    it("returns total calculated for two items", function() {
      let basket = {
        name: "Tom",
        items: ["Cafe Latte", "Single Espresso"]
      };
      expect(total.calculate(basket)).to.eql(6.8);
    });

    describe("calculateEach()", function() {
      it("calculates and returns an array of singular item prices", function() {
        let basket = {
          name: "Tom",
          items: ["Cafe Latte", "Single Espresso"]
        };
        expect(total.calculateEach(basket)).to.eql([4.75, 2.05]);
      });
    });
  });
});
