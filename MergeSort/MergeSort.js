function mergeSort(arr) {
  const output = [];
  const subroutine = function(arr) {
    const copy = arr.slice();
    const midpoint = Math.floor(copy.length / 2);
    if (copy.length > 1) {
      const sub1 = copy.slice(0, midpoint);
      const sub2 = copy.slice(midpoint);
      const base = [subroutine(sub1), subroutine(sub2)];
      return base.sort(a>b);
    }
  };

  return output;
}

console.log(mergeSort([-5, -1, -2, -3, -4]));
console.log(mergeSort([-31, 41, 34, -37, -17, 29]));

// [474] [3912]
// [[4][74]] [[39][12]]
// [[4][[7][4]]] [[3][9]][[1][2]]

// [[4][4,7]] [[3,9][1,2]]
// [4,4,7][1,2,3,9]
// [1,2,3,4,4,7,9]
