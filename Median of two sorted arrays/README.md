# Median of Two Sorted Arrays

## Prompt

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5

## Notes

Find a median
  If array length is 1
    Median is at 0 index
  If array length is 2
    index at (length / 2) + index at (length / 2 - 1) / 2
    record both
  If array length is greater than 2.
    If array is even length
      index at (length / 2) + index at (length / 2 - 1) / 2
    If array is odd length
      index at (Math.floor(length / 2))

[[1, 2, 3], []] = 2
Case: One array is empty, find median of single array.
  If array is even length
    index at (length / 2) + index at (length / 2 - 1) / 2
  If array is odd length
    index at (Math.floor(length / 2))

[[1, 3], [2]] = 2
Case: One array 'fits' completely inside the other relative to sorting.
  Add length of arrays. EX: 2 + 1 = 3
  'Outer Array' find median. EX: 2 (from val 1 and 3)
  'Inner Array' find median. EX: 2 (from 2)
  If median is same for both. EX: 2 = 2
    If one array is even length and other is odd. EX: 2 and 1
      Median is odd median. EX: Median is 2

[[3, 4], [1, 2]] = 3.5 (3+4/2)
Case: Two minimum length arrays not 'overlapping'
  Add length of arrays. EX: 2 + 2 = 4
  Array 1 find median. EX: 3.5 (from val 3 and 4)
  Array 2 find median. EX: 1.5 (from val 1 and 2)
  If median 1 is greater than median 2. EX: 3.5 > 1.5

[[1, 3, 5, 7, 9], [2, 4, 6, 8]] = 5
[[1, 3, 5, 7, 9, 11, 13, 15, 17], [2, 4, 6, 8, 10, 12, 14, 16]] = 9
  [1, 3, 5, 7, 9, 11, 13, 15, 17] = md: 9 mn: 1 mx: 17 l: 7 r: 11
  [2, 4, 6, 8, 10, 12, 14, 16] = md: 9 mn: 2 mx: 16 l: 8 r: 10
  
[[1, 2, 3, 4, 5, 6, 7, 8, 1000000], [9, 500000, 600000,  700000, 800000, 900000, 1000000, 1100000]] = 9
  [1, 2, 3, 4, 5, 6, 7, 8, 1000000] = md: 5 mn: 1 mx: 1000000 l: 4 r: 6 n: 9
  av: 1, 5, 1000000 = 333335.3 repeating avL: 1, 5 = 3 avR: 5, 1000000 = 500002.5
  [9, 500000, 600000, 700000, 800000, 900000, 1000000, 1100000] = md: 750000 mn: 9 mx: 1100000 l: 700000 r: 800000 n: 8
  av: 9, 750000, 1100000 = 616669.6 repeating avL: 9, 750000 = 375004.5 avR: 750000, 1100000 = 925000
  Try #1: Just throw pieces of array together with minimum information
  [5, 6, 7, 8, 1000000] = md: 7 mn: 5 mx: 1000000 l: 6 r: 8 n: 5
  [1, 2, 3, 4, 9, 500000, 600000, 700000, 800000, 900000, 1000000, 1100000] = md: 550000 mn: 1 mx: 1100000 l: 500000 r: 600000 n: 12
  Try #1: Do it again
  [7, 8, 1000000] = md: 8 mn: 7 mx: 1000000 l: 7 r: 1000000 n: 3
  [1, 2, 3, 4, 9, 5, 6, 500000, 600000, 700000, 800000, 900000, 1000000, 1100000] = md: 250003 mn: 1 mx: 1100000 l: 6 r: 500000 n: 14
  <!-- Try #1: And again -->

[[100, 500, 1000], [2, 4]] = 100
[[100, 500, 1000], [2, 4, 600]] = 300
  [100, 500, 1000] = md: 500 mn: 100 mx: 1000 l: 100 r: 1000
  [2, 4, 600] = md: 4 mn: 2 mx: 600 l: 2 r: 600
[[100, 500, 1000, 10000], [2, 4, 600]] = 500
  [100, 500, 1000, 10000] = md: 750 mn: 100 mx: 10000 l: 500 r: 1000
  [2, 4, 600] = md: 4 mn: 2 mx: 600 l: 2 r: 600

[[100, 500, 1000, 10000], [2, 4, 600, 20000]] = 550
  [100, 500, 1000, 10000] = md: 750 mn: 100 mx: 10000 l: 500 r: 1000
  [2, 4, 600, 20000] = md: 302 mn: 2 mx: 20000 l: 4 r: 600
  [2, 4, 100, 500, 600, 20000, 1000, 10000]
  If l of lower md less than l of higher md 'place array' (not really) to left of higher md l. r of lower md greater than r of higher md place to right of higher md r.

If non-overlapping:
  concat the arrays (lesser 1st greater 2nd)
  Median is median of new array

If overlapping: (min and max of array 1 are not both greater or both less than mind and max of array 2)
  Split arrays in half at median.
    If still overlapping do it again.

EX:
  [[1, 3, 5, 7, 9], [2, 4, 6, 8]]
  [
    [
      [1, 3, 5],
      [7, 9]
    ], [
      [2, 4],
      [6, 8]
    ]
  ]
    1.1: min 1 max 5
    1.2: min 7 max 9
    2.1: min 2 max 4
    2.2: min 6 max 8
      [
        [
          [
            [1, 3],
            [5]
          ], [
            [7, 9]
          ]
        ], [
          [
            [2, 4]
          ], [
            [6, 8]
          ]
        ]  
      ]
      1.1.1: min 1 max 3
      1.1.2: 5
      1.2.1: min 7 max 9
      2.1.1: min 2 max 4
      2.2.1: min 6 max 8

## Source

LeetCode: <https://leetcode.com/problems/median-of-two-sorted-arrays/description/>