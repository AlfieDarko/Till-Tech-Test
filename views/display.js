let display = {
  viewTotal: function() {
    let totalCalc = till.receipt.total.calculate(till.basket.returnBasket().name)

  console.log(till.basket.returnBasket(), 'what was found outside');
    console.log(till.receipt.total.calculate(till.basket.returnBasket()));

    $("#total-text-area").val(totalCalc)



  }
}
