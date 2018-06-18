let display = {
  viewTotal: function() {
    let totalCalc = till.receipt.total.calculate(till.basket.returnBasket());

    // $("#total-text-area").val(totalCalc);
  }
};
