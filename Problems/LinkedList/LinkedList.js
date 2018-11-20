var Node = function(nodeValue, reference) {
  this.value = nodeValue;
  this.next = reference ? reference : null;
};

var LinkedList = function (initialValue) {
  if (initialValue) {
    this.head = new Node(initialValue)
    this.tail = this.head
  }
  this._subroutine = function(node, findValue) {
    if (node.value === findValue) {
      return true;
    } else if (node.next) {
      return this._subroutine(node.next)
    }
    return false;
  }
};

LinkedList.prototype.addToTail = function(newValue) {
  if (this.head) {
    this.tail.next = new Node(newValue);
    this.tail = this.tail.next;
  } else {
    this.head = new Node(newValue);
    this.tail = this.head;
  }
};

LinkedList.prototype.removeHead = function() {
  if(this.head === this.tail) {
    delete this.head;
    delete this.tail;
  } else {
    this.head = this.head.next;
  }
};

LinkedList.prototype.contains = function(findValue) {
  if (this.tail.value === findValue) {
    return true;
  } else if (this.head) {
    return this._subroutine(this.head, findValue);
  }
  return false;
};

const linked = new LinkedList(10);
console.group(`linked list with one node: `);
console.group(linked)
linked.removeHead();
console.group('linked list after instantiation and 1 removeHead');
console.group(linked);
linked.addToTail(15);
console.group('linked list after "reinstantiation"');
console.group(linked);
linked.addToTail(14);
console.group('linked list after 2 addToTail: ');
console.group(linked);
for(let i = 13; i > 0; i--) {
  linked.addToTail(i);
}
console.group('linked list after 1 addToTail and 1 removeHead');
console.group(linked);
console.log(linked.contains(1));
console.log(linked.contains(15));
console.log(linked.contains(23));