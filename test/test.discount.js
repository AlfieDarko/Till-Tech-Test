/* eslint-env es6, mocha */

describe("Discount", function() {
  let discount;
  let calculate;
  let returnBasket;
  describe(".applyDiscounts()", function() {
    beforeEach(function() {
      discount = new Discount();
    });

    afterEach(function() {
      // Unwraps the spy
    });

    it("applies 5% discount on orders over 50", function() {
      returnBasket = {
        name: "John",
        items: [
          "Affogato",
          "Cafe Latte",
          "Flat White",
          "Affogato",
          "Double Espresso"
        ]
      };
      console.log(returnBasket);
      expect(discount.applyDiscounts(100, returnBasket)).to.eql(95);
    });

    it("applies a 10% discount on orders containing Muffins", function() {
      returnBasket = {
        name: "John",
        items: ["Chocolate Chip Muffin", "Cafe Latte", "Flat White"]
      };

      expect(discount.applyDiscounts(12.7, returnBasket)).to.eql(11.43);
    });
  });
});
