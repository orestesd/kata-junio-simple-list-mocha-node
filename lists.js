
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

	var remove = function(node) {
		var found = find(node.value);
		if (found) {
			if (found.value === firstNode.value) {
				firstNode = firstNode.next
			} else {
                var temp = firstNode;
                while(temp.next) {
                    if (temp.next.value === node.value) {
                        temp.next = temp.next.next;
                        break;
                    }
                    temp = temp.next;
                }

                lastNode = temp
            }
		}
		return found;
	}

	return {
		values : values,
		add : add,
		find : find,
		remove : remove
	}
}


var DoubleLinkedList = function() {
	var Node = function(value, prev) {
		this.value = value;
		this.prev = prev;
		this.next = null;

		if (prev)
			prev.next = this;
	}

	var lastNode;

	var values = function() {
		var vals = [];
		var temp = lastNode;
		while(temp) {
			vals.push(temp.value);
			temp = temp.prev;
		}

		return vals.reverse();
	}

	var add = function(item) {
		var node = new Node(item, lastNode);

		lastNode = node;
	};

	var find = function(item) {
		var temp = lastNode;
		while(temp) {
			if (temp.value === item)
				return temp
			temp = temp.prev;
		}
		return null;
	};

	var remove = function(node) {
		var found = find(node.value);
		if (found) {
			if (found.prev) {
				found.prev.next = found.next
			}
			if (found.next) {
				found.next.prev = found.prev
			}

			if (found.value === lastNode.value)
				lastNode = found.prev
		}
		return found;
	}

	return {
		values : values,
		add : add,
		find : find,
		remove : remove
	}
}


exports.LinkedList = LinkedList;
exports.DoubleLinkedList = DoubleLinkedList;