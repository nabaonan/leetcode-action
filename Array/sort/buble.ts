
/**
 * 冒泡
 * @param nums 
 * @returns 
 */

export function sortArray(nums: number[]): number[] {
/**
 * 外层控制整个循环的轮数
 * 内层控制每轮循环比对的次数
 * 相邻的两个数对比，大于自己交换，目的是让大的数最后交换到最后
 * 每轮都能确定最后一个最大的数，所以每次比较就可以少比一个，所以内层循环应该比length-i次，最后一次只剩自己最小的，所以再-1
 */
  for (let i = 0; i < nums.length; i++) {

    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = temp
      }
    }
  }
  return nums
};