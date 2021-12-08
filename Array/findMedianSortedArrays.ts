
/**
 * 4. 寻找两个正序数组的中位数 （暴力求解）
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
 * @param nums1 
 * @param nums2 
 * @returns 
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const nums = nums1.concat(nums2)//连接两个数组，形成一个完整的数组
  nums.sort((a, b) => a - b)//升序排列

  const length = nums.length
  const mid = Math.floor(length / 2)//取中间值坐标
  let result: number
  if (length % 2 === 0) {
    result = (nums[mid - 1] + nums[mid]) / 2//偶数取两个中间值下标的平均值
  } else {
    result = nums[mid]//奇数则直接获取
  }
  return result

};