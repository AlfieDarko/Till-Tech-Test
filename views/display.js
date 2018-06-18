let display = {
  viewTotal: function() {
    let basket = till.basket.returnBasket();
    let totalCalculated = till.receipt.total.calculate(basket);
    console.log(totalCalculated);
    let appliedDisc = till.receipt.discount.applyDiscounts(
      totalCalculated,
      basket
    );
    console.log(appliedDisc);
    let itemsTotalDiscounts = till.receipt.discount.applyDiscounts(
      totalCalculated,
      basket
    );
    console.log(itemsTotalDiscounts);
    let itemsTotalWithoutTax = till.receipt.total.calculate(basket).toFixed(2);
    console.log(itemsTotalWithoutTax);
    let appliedTax = till.receipt.tax.applyTax(totalCalculated).toFixed(2);
    console.log(appliedTax);
    let amountToTax = appliedTax - totalCalculated;

    let totalWithTax =
      parseFloat(itemsTotalWithoutTax) + parseFloat(amountToTax);
    console.log(totalWithTax);
    $("#total-text-area").val(totalWithTax.toFixed(2));
  }
};
