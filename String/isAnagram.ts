

/**
 * 
 * 242. 有效的字母异位词
 * https://leetcode-cn.com/problems/valid-anagram/
 * 云粒智慧一面
 * @param s 
 * @param t 
 */
export function isAnagram(s: string, t: string): boolean {

  /**
   * 分析：
   * 使用一个缓存映射记录每个字符出现的次数
   * 
   * 遍历第二个字符串，遇到一次减一次，当
   */

  const map1: Record<string, number> = {}

  if (s.length != t.length) {
    return false
  }


  for (let i = 0; i < s.length; i++) {
    map1[s[i]] = map1[s[i]] || 0
    map1[s[i]]++
  }
  // console.log('mp1', map1)

  for (let i = 0; i < t.length; i++) {
    if (map1[t[i]]) {
      map1[t[i]]--
    } else if (map1[t[i]] === 0) {
      // console.log('走了吗', map1)
      delete map1[t[i]]
    } else {
      return false
    }

  }

  for (let key of Object.keys(map1)) {
    if (map1[key]) {
      return false
    }
  }
  return true



};


export function isAnagram2(s: string, t: string) {

  /**
   * 使用数组排序，然后tostring转换比对
   */
  const a = [...s].sort()
  const b = [...t].sort()

  return a.toString() === b.toString()

}


export function isAnagram3(s: string, t: string) {

  /**
   * 使用ascii码存储数组，记录每个字符出现的次数，如果数组结果有不为0的说明不是多了就是少了
   */
  const charArr: number[] = new Array(26).fill(0)

  if (s.length != t.length) {
    return false
  }
  for (let i = 0; i < s.length; i++) {
    const num = s[i].charCodeAt(0) - 'a'.charCodeAt(0)
    charArr[num]++
  }

  for (let i = 0; i < t.length; i++) {
    const num = t[i].charCodeAt(0) - 'a'.charCodeAt(0)
    charArr[num]--
  }
  return charArr.filter(item => item != 0).length == 0


}