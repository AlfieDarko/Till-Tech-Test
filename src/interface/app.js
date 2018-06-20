let basket = new Basket();
let payments = new Payments();
let products = new Products();
let total = new Total(products);
let tax = new Tax();
let discount = new Discount();
let receipt = new Receipt(total, tax, discount);
let till = new Till(basket, payments, receipt);
let display = new Display();
let buttons = new Buttons();
// is this the proper way to declare instances in an app like this?
$(document).ready(function() {
  $("#add-name-button").click(function() {
    buttons.addName();
  });

  $("#add-to-cart-button").click(function() {
    buttons.addToCart();
  });

  $("#clear-cart-button").click(function() {
    buttons.clearCart();
  });

  $("#pay-button").click(function() {
    $(".modal").addClass("is-active");
  });

  $("#submit-to-till-button").click(function() {
    buttons.submitToTill();
  });

  $("#cancel-submit-button").click(function() {
    buttons.cancelPayment();
  });

  $(".delete").click(function() {
    $(".modal").removeClass("is-active");
  });
});
