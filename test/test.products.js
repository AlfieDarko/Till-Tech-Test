describe("Products", function() {
	products = new Products();
	describe("list", function() {
		it("is an property that is an array", function() {
			chai.expect(products.list).to.be.instanceof(Array);
		});

		it("is an array that contains the coffeeList object", function() {
			chai.expect(products.list[0]).to.be.instanceof(Object);
		});
	});
});
