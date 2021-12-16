
function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
};


/**
 * 剑指 Offer 35. 复杂链表的复制
 * https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/submissions/
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {


  /**
   * 思路：
   * 首先遍历一遍链表，创建一个map缓存节点
   * map的key是链表节点的地址，值是新创建出来的节点
   * 遍历一次链表，创建所有新节点到map
   * 
   * 再次遍历链表的random节点
   * 用一个prev保存前一个节点，目的是将前一个节点的next赋值为当前节点
   * 在map上查找random属性，如果没有就创建新的节点保存上
   * 每次都从map中找映射，
   * 
   * 
   * 
   */
  let result = head
  var map = new WeakMap()//用地址做key缓存节点

  let cur = head
  while (cur != null) {
    map.set(cur, new Node(cur.val))
    // map.set(cur)
    cur = cur.next
  }

  let prev
  while (head != null) {

    if (!map.has(head.random)) {
      if (head.random)
        map.put(head.random, new Node(head.random.val))
    }


    const node = map.get(head)

    if (prev) {
      prev.next = node
    }
    node.random = map.get(head.random)
    prev = node
    head = head.next
  }
  return map.get(result)
};