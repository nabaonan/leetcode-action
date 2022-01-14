
/**
 * 最长回文子串
 * https://leetcode-cn.com/problems/longest-palindromic-substring/
 * @param s 
 * @returns 
 */

export function longestPalindrome(s: string): string {


  let max = 1
  let start = 0
  let end = 0

  if (s.length == 1) {
    return s
  }

  for (let i = 0; i < s.length; i++) {
    let left = i - 1;//指向前一个
    let right = i + 1;//指向后一个

    let count = 1//用来统计奇数还是偶数
    if (s[i] == s[i - 1]) {//解决偶数的情况
//如果当前值和迁移相等，比如是aa   当前指针指向第二个a   相当于中心是偶数，left指向的是前一个，分别向两边扩散
      right = i
      count = 2//这里用count是为了假设偶数遍历一遍，然后奇数再遍历一遍，有可能出现 aaa  当前指针也指向第二个，如果假设前两个a是中心，得到的结果就是aa，所以要以第二个a为中心在遍历一遍，中心是奇数一遍，中心是偶数一遍，一共两遍
    }
    while (count != 0) {
      left = i - 1;//左指针始终是当前指针的前一个值
      if (count % 2 == 0) {//中心是偶数
        right = i
      } else {//中心是奇数
        right = i + 1
      }

      while (left >= 0) {

        if (s[left] == s[right]) {
          if (right - left + 1 > max) {
            start = left;
            end = right;
            max = right - left + 1
          }

        } else {
          break
        }
        left--
        right++
      }
      count--
    }

  }

  // console.log(start, end)
  return s.substring(start, end + 1)//注意这里要用是、substring   如果用substr第二个参数是length，substring的范围是左闭右开，所以第二个参数加1


};