
var LinkedList = function() {
	
	var Node = function(value, prev) {
		this.value = value;
		this.next = null;

		if (prev)
			prev.next = this;
	}

	var firstNode;

	var values = function() {
		var vals = [];
		var temp = firstNode;
		while(temp) {
			vals.push(temp.value);
			temp = temp.next;
		}

		return vals;
	}

	return {
		values : values
	}
}

exports.LinkedList = LinkedList;