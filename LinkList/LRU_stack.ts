/**
 * 146. LRU 缓存机制  使用栈实现
 * https://leetcode-cn.com/problems/lru-cache/
 */

/**
 * 思路
 * 使用一个栈记录key的顺序  左侧为最新，右侧为最末
 *
 * 使用map记录key和值
 * 当get的时候从map中获取对应的值，如果获取不到则添加到map中，然后stack左侧添加一个key
 * put的时候判断key的值判断如果map中有则直接改对应的值，并调用get调序
 * 如果没有，则stack中unshift一个key值，然后记录到map中
 *
 *
 *
 */
class LRUCacheStack {
  capacity: number;
  count: number = 0;
  stack: number[] = []; //存key，保证队列顺序  注意不能存值，因为值可能会重复，但是key能保证是唯一的
  map: Record<number, number> = {}; //key：value
  constructor(capacity: number) {
    this.capacity = capacity;
  }

  get(key: number): number {
    const val = this.map[key];

    if (val !== undefined) {
      const index = this.stack.findIndex((val) => val === key);

      this.stack.splice(index, 1); //移除当前位置
      this.stack.unshift(key); //添加到头部

      return val;
    } else {
      return -1;
    }
  }

  put(key: number, value: number): void {
    const val = this.map[key];

    if (val == undefined) {
      this.count++;
      this.map[key] = value;
      this.stack.unshift(key);
      if (this.count > this.capacity) {
        //超过数量限制，stack弹出最后一个
        const key = this.stack[this.stack.length - 1]; //取出栈末尾的key
        this.stack.pop();//弹出
        delete this.map[key];//删除缓存记录
      }
    } else {
      this.map[key] = value;
      this.get(key);
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export default LRUCacheStack;
