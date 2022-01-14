
/**
 * 678. 有效的括号字符串
 * https://leetcode-cn.com/problems/valid-parenthesis-string/
 * @param s 
 * @returns 
 */
function checkValidString(s: string): boolean {

  const stack = []
  const opStack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i)//注意这里要存下标，为了下方和星号的位置进行比较
    } else if (s[i] === '*') {
      opStack.push(i)
    } else if (s[i] === ')') {
      if (stack.length) {
        stack.pop()
      } else if (opStack.length) {
        opStack.pop()
      } else {
        return false
      }

    }
  }


  while (stack.length && opStack.length ) {
   const quoteIndex:number =  stack.pop()!
    const starIndex:number = opStack.pop()!
    if (quoteIndex > starIndex) {//对比星号和括号的下标，括号大于星号说明就错误了，比如  *( 就是错的  只有这种(*  才符合
      return false
    }
  }

  return stack.length == 0

};