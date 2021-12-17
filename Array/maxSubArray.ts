/**
 * 剑指 Offer 42. 连续子数组的最大和
 * https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/
 */

 function maxSubArray(nums: number[]): number {
/**
 * 思路：
 * 
 * 记录一个之前的累加和，这个累加和和当前数进行相加，如果之前的累加和是负数，那么累加之后肯定比当前数小，所以当前数就可以作为累加和跟后面的数进行累加
 * 
 * 大小关系如下：   preSum(负数)+num[i]  < num[i]  < preSum(正数)+num[i]
 */

  let max = Number.MIN_SAFE_INTEGER
  let preSum = 0
  for (let i = 0; i < nums.length; i++) {
    if (preSum < 0) {//之前是负数，所以累加后趋势还是负数
      preSum = nums[i]//所以用当前数作为累加数进行后续的累加
      max = Math.max(nums[i],max)//因为当前值可能比最大值大也可能小于之前的最大值，所以和之前已有的最大值比较取较大的
      continue
    } else {
      preSum += nums[i]
      max = Math.max(max, preSum)
    }

  }
  return max
};