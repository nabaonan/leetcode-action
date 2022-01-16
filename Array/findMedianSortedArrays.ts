
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


/**
 * 双指针求解
 * @param nums1 
 * @param nums2 
 * @returns 
 */
function findMedianSortedArrays2(nums1: number[], nums2: number[]): number {

  /**
   * 思路：
   * 
   * 两个指针分别指向两个数组，
   * 将两个数组合并成一个大的有序数组
   * 根据奇偶性得到中位数
   * 
   */
  const result: number[] = []


  const mid = Math.floor((nums1.length + nums2.length) / 2)
  let i = 0; let j = 0

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      result.push(nums1[i])
      i++
    } else {
      result.push(nums2[j])
      j++

    }

  }

  if (i < nums1.length) {
    while (i < nums1.length) {
      result.push(nums1[i])
      i++
    }
  } else if (j < nums2.length) {
    while (j < nums2.length) {
      result.push(nums2[j])
      j++
    }
  }


  // console.log(result,mid)
  if (result.length % 2 == 0) {
    return (result[mid] + result[mid - 1]) / 2
  } else {
    return result[mid]
  }

};