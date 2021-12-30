
/**
 * 剑指 Offer 57. 和为s的两个数字
 * https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/
 * @param nums 
 * @param target 
 * @returns 
 */
function twoSum(nums: number[], target: number): number[] {

  /**
   * 双指针  ，由于升序数组，所以只需要，首尾指针，根据总和的值判定，是首指针右移还是尾指针左移，
   */
  let i = 0;
  let j = nums.length - 1
  while (i < j) {
    const sum = nums[i] + nums[j]
    if (sum == target) {
      return [nums[i],nums[j]]
     
    } else if (sum < target) {
      i++
    } else if (sum > target) {
      j--
    }

  }
  return []

};