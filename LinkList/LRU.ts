/**
 * 146. LRU 缓存机制
 * https://leetcode-cn.com/problems/lru-cache/
 */
  

class LinkNode {
  next: LinkNode | null = null;
  prev: LinkNode | null = null;
  val: number;
  key: number;
  constructor(key: number = -1, val: number = -1) {
    this.key = key;
    this.val = val;
  }
}

/**
 * 思路 
 * 利用要实现时间复杂度O（1）
 * 那么肯定要用到map 
 * map中存放是个链表的对象地址，因为只有链表才能够快速移动位置
 * 为了找到方便查找到节点，要采用双向链表
 * 为了删除节点方便，要初始化头尾两个虚拟节点，只要通过tail.prev就能找到真实的尾结点
 * 当put的元素超过容量，则需要删除尾结点
 * 当get已经put过的节点时候，直接从缓存中取，
 * 如果put已经缓存过的节点，直接替换值而不用创建节点
 * get已有的节点时候要先删除对应位置，然后在插入到头部
 */
class LRUCache {
  capacity: number;
  head: LinkNode = new LinkNode();//虚拟头结点
  count: number = 0;
  tail: LinkNode = new LinkNode();//虚拟尾结点  为了删除节点时候不会报异常

  cache: Record<number, LinkNode> = {};
  constructor(capacity: number) {
    this.capacity = capacity;
    //头尾节点相互指向，构造出的链表只有头尾节点，中间暂时没有元素
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  insertHead(node: LinkNode) {
    const next = this.head.next;//取出当前节点的下一个
    next!.prev = node;//下一个节点的prev指向当前节点
    //插入当前节点
    node.next = next;
    node.prev = this.head;
    this.head.next = node;//头结点关联当前节点  注意这里一定要将头节点的next指针指向当前节点，
  }

  deleteNode(node: LinkNode) {
    //这里只需要考虑删除逻辑，因为末尾有tail节点兜底，所以node.next肯定是有值的
    //
    const prev = node.prev;//取出当前节点的前一个节点
    const next = node.next;//取出当前节点的后一个
    prev!.next = next;//将前一个节点直接跨过当前节点指向后一个节点
    next!.prev = prev;//将后一个节点直接跨过当前节点指向前一个节点
  }

  get(key: number): number {
    const node = this.cache[key];

    if (node) {
      this.deleteNode(node);//删除节点当前所在的位置
      this.insertHead(node);//将节点插入到头部

      return node.val;
    } else {
      return -1;
    }
  }

  put(key: number, value: number): void {
    let node = this.cache[key];
   
    if (!node) {
      this.count++;//这里注意一定要在if里面++，只有当节点不存在才需要新添加节点
      node = new LinkNode(key, value);
      if (this.count > this.capacity) {//超出容量限制则删除最后的节点
        const tail = this.tail.prev;//取出末尾节点
        this.deleteNode(tail!);
        delete this.cache[tail!.key];//这里一定要传入末尾节点的key，不要删错
      }
      this.insertHead(node);//新节点插入到头部
      this.cache[key] = node;//缓存节点
    } else {
      node.val = value;//没必要新建节点，直接替换值
      this.get(key); //直接调用get返回，在get中会自动调序
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export default LRUCache;
