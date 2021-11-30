import { ListNode } from '../model/ListNode';

/**
 * 160. 相交链表  set缓存
 * https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 * @param headA
 * @param headB
 */
export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  /**
   * 同判断链表有环，使用一个set记录a链表的所有节点的索引，然后遍历b链表，如果遇到相同索引就返回
   */

  const s = new WeakSet();
  while (headA !== null) {
    s.add(headA);
    headA = headA.next;
  }

  while (headB !== null) {
    if (s.has(headB)) {
      return headB;
    }
    headB = headB.next;
  }

  return null;
}

export function getIntersectionNode2(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  /**
   * 思路：
   * 同时遍历两个链表，步长是1
   * 有以下几个标识
   * a: 链表a起始点到相遇点的距离
   * b: 链表b起始点到相遇点的距离
   * c: 两个链表公共部分的长度，也就是相遇点到末尾的距离
   *
   * 指针1：从链表a开始走的指针
   * 指针2： 从链表b开始走的指针
   *
   *
   * 分几种情况
   * 指针1走到头的距离是a+c
   * 指针2走到头的距离是b+c
   * 由此可以看出a如果等于b，同时步进则会相遇
   * 如果a不等于b  那么一轮可能a链表先到终点，b还没到，此时让指针1继续走b链表的距离，当指针2走完了第一轮接着走a链表的距离，当再次相遇的时候则就是第一次相遇的交点，因为此时指针1走过的距离就是a+c+b   指针2走过的距离是b+c+a，所以两个指针走过的总长度相同，会在c的起始位置相遇
   *
   * 
 
   *
   *
   */

  let curA = headA;
  let curB = headB;
  let changeA = false;
  let changeB = false;

  if (headA == headB) {
    //边缘case   当连个相同的链表传入，那公共的部分就是起始头结点
    return headA;
  }

  if (curA == null || curB == null) {
    //有一个是空的则永远没有相交点
    return null;
  }

  while (curA || curB) {
    if (curA) {
      curA = curA.next;
    }
    if (curB) {
      curB = curB.next;
    }

    if (curA == null && curB != null && !changeA) {
      //a遍历完了  b还没有遍历完
      curA = headB;
      changeA = true;
    } else if (curB == null && curA != null && !changeB) {
      //b走完了A没有走完
      curB = headA;
      changeB = true;
    }

    if (curA === curB) {
      return curA;
    }
  }
  return null;
}
