/* eslint-env es6, mocha */
let expect = chai.expect;
let assert = chai.assert;

describe("Basket", function() {
  let orders;
  describe(".basket", () => {
    beforeEach(function() {
      orders = new Basket();
    });
  });

  describe(".addToBasket()", () => {
    beforeEach(function() {
      orders = new Basket();
      orders.clearBasket()
    });

    it("adds a name and food item to the order object in the basket", () => {
      let tomsOrder = [
        {
          name: "Tom",
          items: ["Cafe Latte"]
        }
      ];
      orders.addToBasket("Tom", "Cafe Latte");
      console.log(orders.returnBasket());
      expect(orders.returnBasket()).to.eql(tomsOrder);
    });

    it("adds a name and multiple food items to the order object", () => {
      let annasOrder = [
        {
          name: "Anna",
          items: ["Cafe Latte", "Single Espresso", "Cortado"]
        }
      ];
      orders.addToBasket("Anna", "Cafe Latte", "Single Espresso", "Cortado");
      expect(orders.returnBasket()).to.eql(annasOrder);
    });
  });



  describe(".clearBasket()", function() {
    beforeEach(function() {
      orders = new Basket();
    });

    it("clears Basket array of all contents", function() {
      // let orders = new Basket();
      orders.addToBasket("Tom", "Cafe Latte");
      orders.clearBasket();
      expect(orders.returnBasket()).to.be.empty;
    });
  });
});
