const findMedian = (sortedArray1, sortedArray2) => {
  const arr1 = {};
  arr1.length = sortedArray1.length;
  arr1.high = [arr1.length - 1, sortedArray1[arr1.length - 1]];
  arr1.low = [0, sortedArray1[0]];
  arr1.midpoint = arr1.length % 2 === 0 ? arr1.length / 2 - 1 : Math.floor(arr1.length / 2);
  arr1.median =
    arr1.length % 2 === 0
      ? (sortedArray1[arr1.midpoint] + sortedArray1[arr1.midpoint + 1]) / 2
      : sortedArray1[arr1.midpoint];
  const arr2 = {};
  arr2.length = sortedArray2.length;
  arr2.high = [arr2.length - 1, sortedArray2[arr2.length - 1]];
  arr2.low = [0, sortedArray1[0]];
  arr2.midpoint = arr2.length % 2 === 0 ? arr2.length / 2 - 1 : Math.floor(arr2.length / 2);
  arr2.median =
    arr2.length % 2 === 0
      ? (sortedArray2[arr2.midpoint] + sortedArray2[arr2.midpoint + 1]) / 2
      : sortedArray2[arr2.midpoint];
  console.log(sortedArray1, sortedArray2);
  if (arr1.length > 2 && arr2.length > 2) {
    console.log(arr1.midpoint, arr1.median);
    console.log(arr2.midpoint, arr2.median);
    if (arr1.median > arr2.median) {
      console.log(
        findMedian(sortedArray1.slice(0, arr1.midpoint), sortedArray2.slice(arr2.midpoint))
      );
    } else if (arr2.median > arr1.median) {
      console.log(findMedian(sortedArray1.slice(arr1.midpoint), sortedArray2.slice(arr2.midpoint)));
    } else {
      console.log(arr1.median, arr2.median);
      console.log("they're equal");
    }
    console.log(findMedian(sortedArray1.slice(arr1.midpoint), sortedArray2.slice(arr2.midpoint)));
  } else if (arr1.length > 2) {
    console.log(arr1.midpoint);
    console.log(arr2.midpoint);
    // TODO: add logic for checking which median is greater to determine which index
    console.log(findMedian(sortedArray1.slice(arr1.midpoint), sortedArray1[0]));
  } else if (arr2.length > 2) {
    console.log(arr1.midpoint);
    console.log(arr2.midpoint);
    // TODO: add logic for checking which median is greater to determine which index
    console.log(findMedian(sortedArray1[0], sortedArray2.slice(arr2.midpoint)));
  }
  return [arr1.median, arr2.median];
};

const testCase1 = [[1, 3], [2]];
const testCase2 = [[3, 4], [1, 2]];
const testCase3 = [[1, 3, 5, 7, 9], [2, 4, 6, 8]];
const testCase4 = [[1, 3, 5, 7, 9, 11, 13, 15, 17], [2, 4, 6, 8, 10, 12, 14, 16]];
const testCase5 = [[100, 500, 1000], [2, 4]];

// console.log(findMedian(testCase1[0], testCase1[1]));
// console.log(findMedian(testCase2[0], testCase2[1]));
// console.log(findMedian(testCase3[0], testCase3[1]));
console.log(findMedian(testCase4[0], testCase4[1]));
console.log(findMedian(testCase5[0], testCase5[1]));
