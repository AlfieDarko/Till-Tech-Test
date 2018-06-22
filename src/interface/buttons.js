(function(exports) {
  class Buttons {
    constructor() {
    }

    addName() {
      if ($("#customer-names-input").val()) {
        _customerNameFromInput = $("#customer-names-input").val();
        $("#customer-names-input").prop("disabled", true);
        $("#add-name-button").prop("disabled", true);
      }
    }

    addToCart() {
      if (_customerNameFromInput == null) {
        alert("Enter the customer name!");
      } else {
        let items = [];
        $("#items-in-dropdown option:selected").each(function(indexOfItem, selectedItem) {
          items.push($(selectedItem).val());
        });
        till.addToBasket({
          name: _customerNameFromInput,
          items: [...items]
        });
        till.returnBasketItems().forEach(function(item) {
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
      till.clearBasket();
      $("#cart-with-items")
        .find("option")
        .remove()
        .end();
      $("#add-to-cart-button").prop("disabled", false);
      $("#total-text-area").val(0);
    }

    submitToTill() {
      let moneyInTillTextArea = $("#money-in-till-text-area").val();

      till.makePayment(moneyInTillTextArea);
      display.printReceipt();
      this.closePaymentScreen();
    }

    closePaymentScreen() {
      $(".modal").removeClass("is-active");
    }
  }
  let _customerNameFromInput;

  exports.Buttons = Buttons;
})(this);
