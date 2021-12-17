
/**
 * 剑指 Offer 10- I. 斐波那契数列
 * https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
 */

const map: Record<number, number> = {
  0: 0,
  1: 1
}

function fib(n: number): number {
  if (map[n] != undefined) {//使用缓存结果，避免出现重复计算
    return map[n]
  }
  const r = fib(n - 1) + fib(n - 2)
  map[n] = r % 1000000007//注意题目要求 取模

  return map[n]
};