/**
 * 剑指 Offer II 021. 删除链表的倒数第 n 个结点
 * https://leetcode-cn.com/problems/SLwz0R/
 */

import { ListNode } from '../model/ListNode';

export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  let slow; //慢指针
  let pre = new ListNode(-1, head); //虚拟头结点  设置这个节点主要为了处理只有一个元素的时候的情况
  let fast = head; //快指针
  let count = 0; //统计计数
  slow = pre;

  if (head == null) {
    return head;
  }
  //快慢指针拉开间距，快慢指针之间相差n个，当快指针走到头的时候，慢指针正好位于倒数第n+1个
  while (count < n) {
    if (fast) {
      fast = fast.next;
    }
    count++;
  }

  //快慢指针同步平移
  while (fast) {
    if (slow) {
      slow = slow.next;
    }

    fast = fast.next;
  }
  //此时慢指针正好位于倒数第n+1个，将next指向next.next则刚好删掉了倒数第n个节点
  if (slow && slow.next) {
    slow.next = slow.next?.next;
  }

  return pre.next;
}
