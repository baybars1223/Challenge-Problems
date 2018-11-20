const Integer = function(input, nextNode = null) {
  this.value = input;
  this.next = nextNode;
  // console.log(`Integer instantiated with Value: ${this.value} and Next: ${this.next}`);
};

const Range = function(start, end, step = null) {
  this.head = new Integer(start);
  this.tail = this.head;
  console.log(start, end, step);
  if (end !== undefined) {
    // console.log(`Using End`);
    this.spread = end - start;
    if (step) {
      // console.log(`using steps`);
      this.numIncrements = Math.floor(this.spread / step);
      this.current = this.head;
      console.log(Math.abs(this.numIncrements))
      for (let i = 0; i < Math.abs(this.numIncrements); i += 1) {
        this.current.next = new Integer(this.current.value+step);
        this.tail = this.current.next;
        this.current = this.current.next;
      }
    } else {
      // console.log(`In else with start: ${start} and end: ${end} and spread ${this.spread}`);
      this.current = this.head;
      console.log(Math.abs(end - start) + 1)
      if (end-start>0) {
        step = 1;
      } else {
        step = -1;
      }
      for (let i = 0 + 1; i <= Math.abs(end - start); i += 1) {
        console.log(`creating new Integer with value of ${this.current.value+step}`)
        this.current.next = new Integer(this.current.value + step);
        this.tail = this.current.next;
        this.current = this.current.next;
      }
    }
  }
};

Range.prototype.each = function(callback) {
  let currentNode = this.head;
  console.log(callback, currentNode.value);
  while (currentNode) {
    console.log(currentNode.value);
    callback(currentNode.value);
    // console.log(currentNode.next);
    currentNode = currentNode.next;
  }
};

Range.prototype.size = function() {
  console.log(this);
  let count = 0;
  let currentNode = this.head;
  console.log(currentNode);
  this.each(()=>{
    while (currentNode) {
      count += 1
      currentNode = currentNode.next;
    }
  })
  console.log(count);
  return count;
};

Range.prototype.includes = function(val) {
  let output = false;
  this.each((node)=>{
    console.log(node);
    console.log(node.value);
    console.log(val);
    console.log(node.value)
    if (node === val) {
      output = true;
    }
  })
  return output;
};

// let testRange = new Range(1);
// console.log(testRange)
// testRange.each(console.log);
// console.log(testRange.includes(1))
// console.log('\n\n\n');
// testRange = new Range(1, 10);
// testRange.each(console.log);
// console.log(testRange.size());
// console.log('\n\n\n');
// testRange = new Range(2, 8, 2);
// testRange.each(console.log);
// console.log('\n\n\n');
// console.log(testRange.size());
// console.log(testRange.includes(5));
testRange = new Range(10, 0);
testRange.each(console.log);
console.log('\n\n\n');
console.log(testRange.size());
console.log(testRange.includes(5));


