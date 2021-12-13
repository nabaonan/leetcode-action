
/**
 * 剑指 Offer 50. 第一个只出现一次的字符
 * https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/
 * @param s 
 * @returns 
 */
function firstUniqChar(s: string): string {
  /**
   * 思路：
   * 遍历字符串记录每个字符出现的次数到一个map中，在遍历一次，按照字符顺序找出第一个出现一次的字符
   */
  const map: Record<string, number> = {}
  for (let i = 0, j = 0; i < s.length; i++) {

    if (!map[s[i]]) {
      map[s[i]] = 1
    } else {
      map[s[i]]++
    }
  }

  for (let key in map) {
    if (map[key] === 1) {
      return key
    }
  }
  return ' '


};