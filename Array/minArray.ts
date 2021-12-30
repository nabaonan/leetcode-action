/**
 * 剑指 Offer 11. 旋转数组的最小数字
 * https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
 * @param numbers 
 * @returns 
 */
function minArray(numbers: number[]): number {

  /**
   * 思路：
   * 从前往后遍历，只要比前一个数字小，当前数字就是最小的
   */


  let pre = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < numbers.length; i++) {
    if (pre > numbers[i]) {
      return numbers[i]
    } else {
      pre = numbers[i]
    }
  }
  return numbers[0]

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
      i = mid + 1 //中值大于右侧值，那么最小值肯定是位于中值右侧，不可能是中值
    } else if (right > midV) {
      j = mid//右侧大于中值，最小值肯定在中值的左侧，或者就是中值
    } else {
      j-- //遇到值相同的时候，右侧值左移一位
    }
  }

  return numbers[j]

};