/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 返回表达式的值
 * @param s string字符串 待计算的表达式
 * @return int整型
 */

function calc(a: number, b: number, op: string) {
  if (op == '+') {
    return ~~a + ~~b
  } else if (op == '-') {
    return ~~a - ~~b
  } else if (op === '*') {
    console.log(a * b)
    return ~~a * ~~b
  }
}

export function solve(s: string): number {
  // write code here
  const stack = []

  const opStack: string[] = []

  for (let i = 0; i < s.length; i++) {

    if (s[i] === '(') {
      stack.push(s[i])
    } else if (s[i] == ')') {
      stack.pop()
      const right = opStack.pop()
      const op = opStack.pop()
      const left = opStack.pop()
      opStack.push(calc(left, right, op))
    } else {

      if (s[i] == '*') {
        const left = opStack.pop()
        i++

        opStack.push(calc(left, ~~s[i], '*'))


      } else if (s[i] == '+' || s[i] == '-') {
        opStack.push(s[i])
      } else {
        let num = ''
        while (/[0-9]/.test(s[i])) {
          num += s[i] + ''
          i++
        }
        i--
        opStack.push(num)



      }
    }
  }
  while (opStack.length > 1) {
    const right = opStack.pop()
    const op = opStack.pop()
    const left = opStack.pop()
    opStack.push(calc(left, right, op))
  }

  console.log(opStack)
  return opStack[0]

}

