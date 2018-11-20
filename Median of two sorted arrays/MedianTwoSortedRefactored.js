const findMedianSortedArrays = (nums1, nums2) => {
  const findMedian = arr =>
    arr.length % 2 === 0
      ? (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
      : arr[Math.floor(arr.length / 2)];
  // const findRange = (arr1Data, arr2Data) => {
  //   let rangeIdx = [];
  //   rangeIdx[0] = arr1Data[2] % 2 === 0 ? ((arr1Data[0] + arr1Data[1])/2) : (());
  //   if (arr1Data[2] % 2 === 0) {

  //   }
  // };
  let output;
  let arr1Start = 0;
  let arr1End = nums1.length - 1;
  let arr1Length = arr1End - arr1Start + 1;
  let arr1MedianIdx = (arr1Start + arr1End) / 2;
  console.log(arr1MedianIdx);
  let arr2Start = 0;
  let arr2End = nums2.length - 1;
  let arr2Length = arr2End - arr2Start + 1;
  let arr2MedianIdx = (arr2Start + arr2End) / 2;
  console.log(arr2MedianIdx);
  let range = [];
  // while (arr1Length + arr2Length > 5) {
  //   range[0] = arr1Length % 2 === 0 ? ((nums1[Math.floor((arr1Start + arr1End) / 2)] + nums1[Math.ceil((arr1Start + arr1End) / 2)])/2) : nums1[(arr1Start + arr1End) / 2];
  //   range[1] = arr2Length % 2 === 0 ? ((nums1[Math.floor((arr2Start + arr2End) / 2)] + nums1[Math.ceil((arr2Start + arr2End) / 2)])/2) : nums1[(arr2Start + arr2End) / 2];
  // }
  range[0] = arr1Length % 2 === 0 ? ((nums1[Math.floor((arr1Start + arr1End) / 2)] + nums1[Math.ceil((arr1Start + arr1End) / 2)])/2) : nums1[(arr1Start + arr1End) / 2];
  range[1] = arr2Length % 2 === 0 ? ((nums2[Math.floor((arr2Start + arr2End) / 2)] + nums2[Math.ceil((arr2Start + arr2End) / 2)])/2) : nums2[(arr2Start + arr2End) / 2];
  console.log(range);

  return findMedian(nums1);
};

console.log(findMedianSortedArrays([1, 3, 5.5, 8], [12, 15]));
