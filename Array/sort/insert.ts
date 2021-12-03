

/**
 * 插入排序
 * @param nums 
 * @returns 
 */
function sortArray(nums: number[]): number[] {
  /**
   * 思路： 
   * 用当前的数和前面的所有的数倒序俩俩匹配，小于就交换，直到找到不必当前数小的位置，最后看上去像插入到对应位置，实际上就是通过一次次交换，将大于自己的数换到后面去了
   */
  for (let i = 0; i < nums.length; i++) {//控制遍历次数
    for (let j = i; j > 0; j--) {//遍历当前之前的所有数

      if (nums[j] < nums[j - 1]) {//俩俩匹配，用当前的数和前一个数比，如果当前数小于前一个就交换，
        let temp = nums[j - 1]
        nums[j - 1] = nums[j]
        nums[j] = temp
      }
    }
  }
  return nums
};