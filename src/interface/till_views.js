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
