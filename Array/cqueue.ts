/**
 * 剑指 Offer 09. 用两个栈实现队列(简单)
 * https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/
 */

/**
 * 思路：
 * 
 * 栈： 只能push和pop，但是队列是先进先出的
 * 用两个栈分别存放入队的元素和出堆的元素
 * 出堆的时候正好和出栈的逻辑相反，所以要将栈按照逆序放入到出队的栈里，这样pop的时候就会按照先入对的元素依次弹出
 * 当出队的栈中还有元素的时候就直接出栈，如果没有就将入队 的栈元素全部挪到出队的栈中
 * 
 */

class CQueue {

  pushStack: number[] = []
  popStack: number[] = []
  constructor() {

  }

  appendTail(value: number): void {
    this.pushStack.push(value)
  }

  deleteHead(): number {

    if (this.popStack.length > 0) {//出队的栈还有元素就继续弹
      return this.popStack.pop()!
    } else {
      //将入队的栈元素全部放入出队的栈，保证了按照原来的逆序排列
      while (this.pushStack.length > 0) {
        this.popStack.push(this.pushStack.pop()!)
      }
      return this.popStack.length > 0 ? this.popStack.pop()! : -1
    }


  }
}
