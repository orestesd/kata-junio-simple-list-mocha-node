var assert = require('assert');

describe("Single LinkedList", function() {

	var LinkedList = require('../../lists.js').LinkedList;

	beforeEach(function() {
	});

	it("a new list is empty", function() {
		var list = new LinkedList();
		// expect(list).to.be.empty;
		assert.equal(list.values().length, 0);
	});
});

