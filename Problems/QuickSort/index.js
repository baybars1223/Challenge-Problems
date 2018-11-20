function quickSort(arr) {
  if (Array.isArray(arr)) {
    if (arr.length <= 1) {
      return arr;
    }
    const pivot = Math.floor(arr.length / 2);
    const lessPartition = [];
    const morePartition = [];
    arr.forEach((e, i) => {
      if (i === pivot) {
        console.log('skip');
      } else if (e <= arr[pivot]) {
        lessPartition.push(e);
      } else {
        morePartition.push(e);
      }
    });
    let output = [];
    output =
      lessPartition.length > 1
        ? output.concat(quickSort(lessPartition), arr[pivot])
        : output.concat(lessPartition, arr[pivot]);
    output =
      morePartition.length > 1
        ? output.concat(quickSort(morePartition))
        : output.concat(morePartition);
    return output;
  }
  return [];
}

console.log(quickSort([1, 3, 2, 7, 4, 5, 6]));
