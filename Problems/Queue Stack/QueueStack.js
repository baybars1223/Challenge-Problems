const Stack = function(inputName) {
  const storage = [];
  this.name = inputName;
  this.push = input => {
    storage.push(input);
  };

  this.pop = () => {
    let output;
    if (storage.length > 0) {
      output = storage.pop();
      return output;
    }
    return undefined;
  };

  this.size = () => {
    console.log(`current ${this.name}`);
    console.log(storage);
    return storage.length;
  };
};

const Queue = function() {
  console.log('New queue');
  const inbox = new Stack('inbox');
  const outbox = new Stack('outbox');

  this.enqueue = input => {
    if (outbox.size() === 0 && inbox.size() === 0) {
      outbox.push(input);
    } else {
      inbox.push(input);
    }
  };

  this.dequeue = () => {
    if (outbox.size() > 0) {
      return outbox.pop();
    }
    if (inbox.size() > 0) {
      for (let i = 0; i <= inbox.size(); i += 1) {
        let temp = inbox.pop();
        console.log(`moving ${temp} to outbox`);
        outbox.push(temp);
      }
      return outbox.pop();
    }
    return undefined;
  };

  this.size = () =>
    // console.log('queue inbox size: ', inbox.size(), 'queue outbox size: ', outbox.size());
    inbox.size() + outbox.size();
};

const queue = new Queue();
queue.enqueue('1');
queue.enqueue('2');
queue.size();
let item = queue.dequeue();
console.log(`${item} should equal '1'}`);
queue.enqueue('3');
item = queue.dequeue();
console.log(`${item} should equal '2'}`);
