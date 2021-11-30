import { ListNode } from '../model/ListNode';

/**
 * 142. 环形链表 II   set法
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/submissions/
 * @param head
 */
export function detectCycle(head: ListNode | null): ListNode | null {
  /**
   * 思路：
   * 使用一个弱引用set  缓存已经访问过的节点的引用，
   * 遍历节点，当再次访问到相同节点时候，则是循环的入口节点
   */
  const ws = new WeakSet(); //避免内存泄漏，使用弱引用set

  while (head != null) {
    if (ws.has(head)) {
      //匹配到已经访问的节点直接返回就好
      return head;
    }

    if (head !== null) {
      ws.add(head);
    }
    head = head.next;
  }
  return null;
}

/**
 * 快慢指针
 * @param head
 */
export function detectCycle2(head: ListNode | null): ListNode | null {
  /**
   * 分析思路
   * 1->2->3->4->2
   *
   * 将链表分成三段
   * a: 头结点到  入口节点
   * b: 入口节点到相遇节点
   * c: 相遇节点到入口节点
   *
   * 分别用两个指针（快慢）
   * 快指针一次走两步
   * 慢指针一次一步
   *
   * 当快慢指针相遇的时候，慢指针走过的距离刚好是a+b
   * 快指针走过的距离是a+b+n(b+c)   因为如果快指针要想遇到慢指针，至少已经以相遇点为起点转了n圈了
   * 上面的公式   提取公因式  a+(n+1)b+nc
   *
   * 由初始速度可以得出  由于都是从同一个节点触发，快指针速度是慢指针的2倍，所以走的距离也是慢指针的2倍
   *  而慢指针走过的距离是a+b,所以快指针走过的距离是2(a+b)
   * 两个等式可以建立一定的关系
   * a+(n+1)b+nc = 2(a+b)  = 2a+2b
   * (n-1)b+nc = a
   * (n-1)c+c+(n-1)b = a
   *  (n-1)(b+c) +c = a
   * 由此可以看出b+c就是相遇点转一周的距离，如果节点都在相遇点，那么可以看出c的距离就是和a相等的
   * 所以当两个指针相遇了，另外头指针从头开始走a距离，慢指针走c距离，两个指针相遇的时候就是起始节点了
   */

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let pre: ListNode | null = head;

  if (head == null) {
    return null;
  }

  while (fast != null) {
    if (fast.next == null || slow == null) {
      //边界判断，如果没有环则直接返回null
      return null;
    }

    fast = fast.next.next;
    slow = slow.next;

    if (fast == slow) {
      //快慢指针相遇
      while (pre !== slow) {
        // 开始走a,c距离，头结点和慢指针同时步进
        pre = pre!.next;
        slow = slow!.next;
      }
      return slow; //相遇后返回慢指针对应的节点就是环形入口节点
    }
  }
  return null;
}
