
/**
 * 剑指 Offer 48. 最长不含重复字符的子字符串   双指针+哈希表
 * https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/
 * @param s 
 * @returns 
 */

const lengthOfLongestSubstring = function (s:string) {

  const map: Record<string, number> = {}
  let max = 0
  if (s.length == 1 || s.length == 0) {
    return s.length
  }

  let j = -1//左指针  赋值为-1就是为了这种情况  当abc这种，遍历到c的时候下标为2，但是长度应该是3，所以是2-（-1）得3
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] != undefined) {

      j = Math.max(j, map[s[i]])//左指针不能回退，所以左指针要取最大值，避免abba这种情况，如果不取最大值，则当走到第二个a的时候，会与第一个a减，得到的长度不准确，为3，实际上应该是2，因为中间有两个重复的b，所以当遇到第二个a的时候应该从第二个b开始算起
    }
    max = Math.max(max, i - j)
    map[s[i]] = i
  }
  return max


};