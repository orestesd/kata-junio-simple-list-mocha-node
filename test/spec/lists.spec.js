var assert = require('assert');

describe("Single LinkedList", function() {

	var LinkedList = require('../../lists.js').LinkedList;

	beforeEach(function() {
	});

	it("a new list is empty", function() {
		var list = new LinkedList();
		assert.equal(list.values().length, 0);
	});

	it("new items are added to the list", function() {
		var list = new LinkedList();
		list.add('fred');
		assert.equal(list.values().length, 1);
	});
});

