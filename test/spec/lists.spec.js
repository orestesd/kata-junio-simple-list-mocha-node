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

		list.add('wilma');
		assert.equal(list.values().length, 2);

		list.add('betty');
		assert.equal(list.values().length, 3);

		assert.deepEqual(list.values(), ['fred', 'wilma', 'betty']);
	});

	describe("finding values", function() {
		
		it("find unexisting value returns null", function() {
			var list = new LinkedList();
			var result = list.find('fred');
			assert.equal(result, null);
		});

		it("find existing value returns the node", function() {
			var list = new LinkedList();
			list.add('fred');
			var result = list.find('fred');
			assert.deepEqual(result.value, 'fred');
		});

	});
});

