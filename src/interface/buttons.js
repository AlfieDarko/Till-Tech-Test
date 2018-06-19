(function(exports) {
  class Buttons {
    constructor() {}

    addName() {
      if ($("#customer-names-input").val()) {
        customerNameFromInput = $("#customer-names-input").val();
        $("#customer-names-input").prop("disabled", true);
        $("#add-name-button").prop("disabled", true);
      }
    }

    addToCart() {
      if (customerNameFromInput == null) {
        alert("Enter the customer name!");
      } else {
        let items = [];
        $("#items-in-dropdown option:selected").each(function(i, sel) {
          items.push($(sel).val());
        });

        till.basket.addToBasket({
          name: customerNameFromInput,
          items: [...items]
        });

        till.basket.returnBasket().items.forEach(function(item) {
          let option = document.createElement("option");
          option.textContent = item;
          option.disabled = true;
          document.getElementById("cart-with-items").appendChild(option);
        });

        $("#add-to-cart-button").prop("disabled", true);
        display.viewTotal();
      }
    }

    clearCart() {
      till.basket.clearBasket();
      $("#cart-with-items")
        .find("option")
        .remove()
        .end();
      $("#add-to-cart-button").prop("disabled", false);
      $("#total-text-area").val(0);
    }

    submitToTill() {
      let moneyInTillTextArea = $("#money-in-till-text-area").val();
      console.log(moneyInTillTextArea);
      till.makePayment(moneyInTillTextArea);
      display.printReceipt();
      this.cancelPaymentScreen();
    }

    cancelPaymentScreen() {
      $(".modal").removeClass("is-active");
    }
  }
  let customerNameFromInput;

  exports.Buttons = Buttons;
})(this);
