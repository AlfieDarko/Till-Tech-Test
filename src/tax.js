(function(exports) {
  function Tax() {
    this.postTaxTotal = 0
  }

  Tax.prototype.applyTax = function(total) {

    const TAXRATE = 8.64

    let additionalTax = (total / 100) * TAXRATE
    let postTaxTotal = parseFloat((additionalTax + total).toFixed(2))
    this.postTaxTotal = postTaxTotal
    return postTaxTotal
  };

  exports.Tax = Tax;
})(this)
