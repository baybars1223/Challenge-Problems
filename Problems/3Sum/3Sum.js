/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//
const threeSum = nums => {
  const results = new Set();
  const sorted = nums.sort((a, b) => a - b);
  console.log(sorted);
  for (let i = 0; i < sorted.length && sorted[i] <= 0; i += 1) {
    const lVal = sorted[i];
    // console.log(lVal);
    for (let j = sorted.length - 1; j > 0 && sorted[j] >= 0; j -= 1) {
      const rVal = sorted[j];
      // console.log(rVal);
      if (Math.abs(lVal) > rVal) {
        for (let k = sorted.length - 1 - j; k > 0 && sorted[k] >= 0; k -= 1) {
          const tVal = sorted[k];
          // console.log(tVal);
          if (lVal + rVal + tVal === 0) {
            console.log(JSON.stringify([lVal, rVal, tVal]))
            results.add(JSON.stringify([lVal, rVal, tVal]));
          } else if (lVal > rVal + tVal) {
            console.log('Break');
            break;
          }
        }
      } else if (Math.abs(lVal) < rVal) {
        for (let k = i + 1; k < sorted.length && sorted[k] <= 0; k += 1) {
          const tVal = sorted[k];
          console.log(k);
          if (lVal + rVal + tVal === 0) {
            results.add(JSON.stringify([lVal, rVal, tVal]));
          } else if (lVal + tVal < rVal) {
            console.log('Break', lVal, tVal, rVal);
            break;
          }
        }
      } else {
        console.log('equals', lVal, rVal);
        if (lVal === 0 || rVal === 0) {
          if (j - i > 1) {
            results.add(JSON.stringify([lVal, rVal, 0]));
          }
          console.log('thats a lot of 0s');
        } else {
          // eslint-disable-next-line no-lonely-if
          if (sorted.includes(0)) {
            console.log('Found one', lVal, rVal);
            results.add(JSON.stringify([lVal, 0, rVal]));
          } else {
            console.log('no zero');
          }
        }
      }
    }
  }
  const temp = [];
  console.log(results);
  results.forEach(e => {
    temp.push(JSON.parse(e).sort((a, b) => a > b));
  });
  return temp;
};
// const test1 = [-1, 0, 1, 2, -1, -4];
// const test2 = [1, 1, -2];
// const test3 = [0, 0, 0];
const test4 = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6];

// console.log(threeSum(test1));
// console.log(threeSum(test2));
// console.log(threeSum(test3));
console.log(threeSum(test4));

// const threeSum = (nums) => {
//   const results = new Set();
//   const sorted = nums.sort((a, b) => a > b);
//   // console.log(sorted);
//   let current = 0;
//   let lastIdx = sorted.length - 1;
//   let lPointer = 0;
//   let rPointer = lastIdx;
//   let tPointer;
//   while (sorted[current] <= 0) {
//     if (Math.abs(sorted[lPointer]) > sorted[lastIdx]) {
//       while (sorted[rPointer] > 0) {
//         tPointer = rPointer - 1;
//         if (sorted[lPointer] + sorted[rPointer] + sorted[tPointer] === 0) {
//           results.add([sorted[lPointer], sorted[rPointer], sorted[tPointer]]);
//         }
//         rPointer -= 1;
//       }
//       rPointer = lastIdx;
//     } else if (Math.abs(sorted[lPointer]) < sorted[lastIdx]) {
//       while (sorted[lPointer] < 0) {
//         tPointer = lPointer + 1;
//         if (sorted[lPointer] + sorted[rPointer] + sorted[tPointer] === 0) {
//           results.add([sorted[lPointer], sorted[rPointer], sorted[tPointer]]);
//         }
//         lPointer += 1;
//       }
//       lPointer = current;
//     } else {
//       if (sorted.includes[0]) {
//         results.add([sorted[lPointer], sorted[rPointer], 0]);
//       }
//     }
//     current += 1;
//   }
//   console.log(results);
// };
