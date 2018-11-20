const maxArea = array => {
  const walls = {
    left: [],
    right: []
  };
  const endIndex = array.length - 1;
  walls.left = [0, array[0]];
  walls.right = [array.length - 1, array[array.length - 1]];
  let min = Math.min(walls.left[1], walls.right[1]);
  let tempMin;
  for (let i = 1; i < array.length; i += 1) {
    console.log(`${array[i]} > ${walls.left[1]} = ${array[i] > walls.left[1]}`);
    if (array[i] > walls.left[1]) {
      tempMin = Math.min(array[i], walls.right[1]);
      console.log(`${tempMin} * (${walls.right[0]} - ${i}) > ${min} * (${walls.right[0]} - ${walls.left[0]}) = ${tempMin * (walls.right[0] - i) > min * (walls.right[0] - walls.left[0])}`)
      if (tempMin * (walls.right[0] - i) > min * (walls.right[0] - walls.left[0])) {
        walls.left = [i, array[i]];
        min = Math.min(walls.left[1], walls.right[1]);
      }
    }
    console.log(`${array[endIndex - i]} > ${walls.right[1]} = ${array[endIndex - i] > walls.right[1]}`);
    if (array[endIndex - i] > walls.right[1]) {
      tempMin = Math.min(array[endIndex - i], walls.left[1]);
      console.log(`${tempMin} * (${endIndex - i} - ${walls.left[0]}) > ${min} * (${walls.right[0]} - ${walls.left[0]}) = ${tempMin * (endIndex - i - walls.left[0]) > min * (walls.right[0] - walls.left[0])}`)
      if (tempMin * (endIndex - i - walls.left[0]) > min * (walls.right[0] - walls.left[0])) {
        walls.right = [endIndex - i, array[endIndex - i]];
        min = Math.min(walls.left[1], walls.right[1]);
      }
    }
  }
  return walls;
};

const test1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const test2 = [5, 1, 1, 20, 10, 15, 30, 20, 5, 1, 5];
// console.log(maxArea(test1));
console.log(maxArea(test2));
