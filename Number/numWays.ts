/**
 * 剑指 Offer 10- II. 青蛙跳台阶问题
 * https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/
 */

/**
 * 思路：同斐波那契数列，  跳1个 有1中，2个有2中，3个有3中，4个有5种   n个有n-1 + n-2中
 */
 const record: Record<number, number> = {
  0: 1,
  1: 1,
  2: 2
}
function numWays(n: number): number {

  if (record[n] != undefined) {
    return record[n]
  }

  record[n] = (numWays(n - 1) + numWays(n - 2)) % 1000000007
  return record[n]
};
