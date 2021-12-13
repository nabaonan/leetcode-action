
/**
 * 剑指 Offer 04. 二维数组中的查找
 * https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
 * @param matrix 
 * @param target 
 * @returns 
 */

function findNumberIn2DArray(matrix: number[][], target: number): boolean {

  let flag: boolean = false

  for (let i = 0; i < matrix.length; i++) {

    if (target >= matrix[i][0] && target <= matrix[i][matrix[i].length-1]) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === target) {
          flag = true
          break;
        }
      }
    }
    if(flag){
      break
    }
  }
  return flag
};


/**
 * 二分查找
 * @param numbers 
 * @returns 
 */

function minArray2(numbers: number[]): number {

/**
 * 思路
 * 取中间值，由于是递增的，所以当中间值大于右侧值，则最小值肯定位于中值右侧
 * 如果中间值小于右侧的值，要不中间值就是最小的，要不就位于中间值左侧
 * 如果这两者相等则有可能中间值位于中间值和右侧之间 比如这种情况
[2,2,2,0,2,2]  中间值取2，
 */

  let i = 0, j = numbers.length - 1
  while (i != j) {
    let mid = Math.floor((i + j) / 2)//取中间位置

    let right = numbers[j]
    let midV = numbers[mid]
    if (right < midV) {
      i = mid + 1
    } else if (right < midV) {
      j = mid
    } else {
      j--
    }
  }

  return numbers[j]

};