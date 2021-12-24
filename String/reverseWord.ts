
/**
 * 剑指 Offer 58 - I. 翻转单词顺序
 * https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/
 * @param s 
 * @returns 
 */

export function reverseWords(s: string): string {
/**原理
 * 双指针，快指针遍历字符，当遇到空字符，进行截取，放到数组进行收集
 * 
 */

  let slow = s.length
  s = s.trim()//首先去掉两边的空格
  let result = []
  let fast = s.length - 1
  while (fast >= 0) {

    if (s[fast] != ' ' && s[fast + 1] == ' ') {
      slow = fast
    }
    if ((s[fast] == ' ' && s[fast + 1] != ' ')) {
      result.push(s.substring(fast + 1, slow + 1))
    } else if (s[fast] != ' ' && fast == 0) {//边界如果第一位是字符则截取
      result.push(s.substring(fast, slow + 1))
    }

    fast--
  }

  return result.join(' ')
};