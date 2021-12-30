/**
 * 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
 * https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
 * @param nums 
 * @returns 
 */

function exchange(nums: number[]): number[] {

  /**
   * 原理：
   * 双指针，前面一个指针指向奇数后面的一个元素，当遇到奇数的时候将这个指针指向的元素和当前遍历的元素交换
   */
  let left = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 != 0) {
      [nums[i], nums[left]] = [nums[left], nums[i]]
      left++
    }
  }
  return nums

};