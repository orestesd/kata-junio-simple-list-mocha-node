
var LinkedList = function() {
	
	var Node = function(value, prev) {
		this.value = value;
		this.next = null;

		if (prev)
			prev.next = this;
	}

	var firstNode, lastNode;

	var values = function() {
		var vals = [];
		var temp = firstNode;
		while(temp) {
			vals.push(temp.value);
			temp = temp.next;
		}

		return vals;
	}

	var add = function(item) {
		var node = new Node(item, lastNode);

		lastNode = node;
		if (!firstNode)
			firstNode = node;

	};

	var find = function(item) {
		var temp = firstNode;
		while(temp) {
			if (temp.value === item)
				return temp
			temp = temp.next;
		}
		return null;
	};

	return {
		values : values,
		add : add,
		find : find
	}
}

exports.LinkedList = LinkedList;