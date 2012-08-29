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
			list.add('wilma');
			
			var result = list.find('fred');
			assert.deepEqual(result.value, 'fred');

			result = list.find('wilma');
			assert.deepEqual(result.value, 'wilma');
		});

	});

	describe("deleting items", function() {
		
		beforeEach(function() {
			list.add('fred');
			list.add('wilma');
			list.add('betty');
			list.add("barney")
		});
	
		it("deleting first item from list", function() {
			list.remove(list.find('fred'));
			assert.deepEqual(list.values(), ['wilma', 'betty', 'barney']);
		});

		it("deleting middle item from list", function() {
			list.remove(list.find('wilma'));
			assert.deepEqual(list.values(), ['fred', 'betty', 'barney']);
		});

		it("deleting last item from list", function() {
			list.remove(list.find('barney'));
			assert.deepEqual(list.values(), ['fred', 'wilma', 'betty']);

			list.add('courtney');
			assert.deepEqual(list.values(), ['fred', 'wilma', 'betty', 'courtney']);
		});
	});

});

describe("DoubleLinkedList", function() {
	
	var DoubleLinkedList = require('../../lists.js').DoubleLinkedList;
	var list;

	beforeEach(function() {
		list = new DoubleLinkedList();
	});

	it("a new double linked list is empty", function() {
		assert.equal(list.values().length, 0);
	});

	it("new items are added to the double linked list", function() {
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
			list.add('wilma');
			
			var result = list.find('fred');
			assert.deepEqual(result.value, 'fred');

			result = list.find('wilma');
			assert.deepEqual(result.value, 'wilma');
		});

	});

	describe("deleting items", function() {
		
		beforeEach(function() {
			list.add('fred');
			list.add('wilma');
			list.add('betty');
			list.add("barney")
		});
	
		it("deleting first item from list", function() {
			list.remove(list.find('fred'));
			assert.deepEqual(list.values(), ['wilma', 'betty', 'barney']);
		});

		it("deleting middle item from list", function() {
			list.remove(list.find('wilma'));
			assert.deepEqual(list.values(), ['fred', 'betty', 'barney']);
		});

		it("deleting last item from list", function() {
			list.remove(list.find('barney'));
			assert.deepEqual(list.values(), ['fred', 'wilma', 'betty']);

			list.add('courtney');
			assert.deepEqual(list.values(), ['fred', 'wilma', 'betty', 'courtney']);
		});

	});
});

