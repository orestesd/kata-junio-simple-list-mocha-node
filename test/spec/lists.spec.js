var assert = require('assert');

describe("Single LinkedList", function() {

	var LinkedList = require('../../lists.js').LinkedList;
	var list;

	beforeEach(function() {
		list = new LinkedList();
	});

	it("a new list is empty", function() {
		assert.equal(list.values().length, 0);
	});

	it("new items are added to the list", function() {
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
			var result = list.find('fred');
			assert.equal(result, null);
		});

		it("find existing value returns the node", function() {
			list.add('fred');
			var result = list.find('fred');
			assert.deepEqual(result.value, 'fred');
		});

	});
});

