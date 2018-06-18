/* eslint-env es6, mocha */
let expect = chai.expect;
let assert = chai.assert;

describe("Basket", function() {
  let basket;
  describe(".basket", () => {
    beforeEach(function() {
      basket = new Basket();
    });
  });

  describe(".addToBasket()", () => {
    beforeEach(function() {
      basket = new Basket();
      basket.clearBasket();
    });

    it("adds a name and food item to the order object in the basket", () => {
      let tomsOrder = {
        name: "Tom",
        items: ["Cafe Latte"]
      };
      basket.addToBasket(tomsOrder);
      expect(basket.returnBasket()).to.eql(tomsOrder);
    });

    it("adds a name and multiple food items to the order object", () => {
      let annasOrder = {
        name: "Anna",
        items: ["Cafe Latte", "Single Espresso", "Cortado"]
      };
      basket.addToBasket(annasOrder);
      expect(basket.returnBasket()).to.eql(annasOrder);
    });
  });

  describe(".clearBasket()", function() {
    beforeEach(function() {
      basket = new Basket();
    });

    it("clears Basket array of all contents", function() {
      // let orders = new Basket();
      basket.addToBasket("Tom", "Cafe Latte");
      basket.clearBasket();
      expect(basket.returnBasket()).to.be.eql([]);
    });
  });
});
