// function largestProductOfThree(array) {
//   const threeNumbers = {};
//   let product = 0;
//   if (array.length <= 3) {
//     product = array.reduce((acc, cv) => acc * cv);
//   } else {
//     array.forEach((e, i) => {
//       if (i === 0) {
//         threeNumbers.high = e;
//       } else if (i === 1) {
//         if (e > threeNumbers.high) {
//           threeNumbers.mid = threeNumbers.high;
//           threeNumbers.high = e;
//         } else {
//           threeNumbers.mid = e;
//         }
//       } else if (i === 2) {
//         if (e > threeNumbers.mid) {
//           if (e > threeNumbers.high) {
//             threeNumbers.low = threeNumbers.mid;
//             threeNumbers.mid = threeNumbers.high;
//             threeNumbers.high = e;
//           } else {
//             threeNumbers.low = threeNumbers.mid;
//             threeNumbers.mid = e;
//           }
//         } else {
//           threeNumbers.low = e;
//         }
//       } else if (e > threeNumbers.low) {
//         if (e > threeNumbers.mid) {
//           if (e > threeNumbers.high) {
//             threeNumbers.low = threeNumbers.mid;
//             threeNumbers.mid = threeNumbers.high;
//             threeNumbers.high = e;
//           } else {
//             threeNumbers.low = threeNumbers.mid;
//             threeNumbers.mid = e;
//           }
//         } else {
//           threeNumbers.low = e;
//         }
//       }
//     });
//     product = threeNumbers.high * threeNumbers.mid * threeNumbers.low;
//   }
//   console.log(threeNumbers);
//   return product;
// }

function largestProductOfThree(array) {
  
}

console.log(largestProductOfThree([-5, -1, -2, -3, -4]));
console.log(largestProductOfThree([-31, 41, 34, -37, -17, 29]));
