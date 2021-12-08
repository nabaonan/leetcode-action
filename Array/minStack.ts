
/**
 * 剑指 Offer 30. 包含min函数的栈(简单)
 * 
 * https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/
 */


/**
 * 分析：
 * 使用两个栈  一个存放原本顺序的栈 ，一个存放最小值的栈
 * 当获取最小值的时候直接取最小栈的栈顶元素
 * 当push的时候要判断push进来的元素是否小于栈顶元素，如果小于则入最小栈
 * 当弹出的时候要判断弹出的元素和最小栈的栈顶元素是否相同，如果是相同的则最小栈的栈顶也要弹出
 * 
 */
class MinStack {

  minStack: number[] = []
  originStack: number[] = []
  constructor() {

  }

  push(x: number): void {
    if (this.minStack.length == 0 || x <= this.minStack[this.minStack.length - 1]) {//注意这里的等号，必须要加上，等于当前最小值的时候也要入最小栈，因为有可能同时存在两个相同的最小值，如果不加等号判断则会少添加一个最小值到最小栈
      this.minStack.push(x)
    }
    this.originStack.push(x)
  }

  pop(): void {
    const val = this.originStack.pop()
    if (this.minStack[this.minStack.length - 1] === val) {
      this.minStack.pop()
    }
  }

  top(): number {
    return this.originStack[this.originStack.length - 1]
  }

  min(): number {

    return this.minStack[this.minStack.length - 1]
  }
}
