// const findPivot = (array, start = 0, end = array.length - 1) => {
//   const midpoint = (array.length / 2) | 0;
//   console.log(midpoint);
//   const left = array.slice(0, midpoint);
//   console.log(left);
//   const right = array.slice(midpoint, array.length);
//   console.log(right);

//   if (left.length > 1) {
//     const leftOutput = findPivot(left, 0, midpoint);
//     console.log(leftOutput);
//   }

//   if (right.length > 1) {
//     const rightOutput = findPivot(right, midpoint, array.length);
//     console.log(rightOutput);
//   }
//   return array;
// };

const findPivot = array => {
  let start;
  let end;
  for (let i = 0; i < array.length; i += 1) {
    const current = array[i];
    const next = array[i + 1];
    for (let j = 0; j < current.length; j += 1) {
      console.log(current[j], next[j]);
      if (current[j] < next[j]) {
        console.log(`${current[j]} < ${next[j]}`);
        break;
      }
      if (current[j] > next[j]) {
        console.log(`${current[j]} > ${next[j]}`);
        start = next;
        end = current;
        break;
      }
    }
    if (start && end) {
      console.log(start, end);
      return i + 1;
    }
  }
  return null;
};

const input = ['dog', 'eagle', 'falcon', 'apple', 'bear', 'cat', 'cart', 'cast', 'cats'];

console.log(findPivot(input));
