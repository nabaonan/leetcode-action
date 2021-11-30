import { ListNode } from '../model/ListNode';

/**
 * 876. 链表的中间结点
 * https://leetcode-cn.com/problems/middle-of-the-linked-list/
 * @param head
 * @returns
 */
export function middleNode(head: ListNode | null): ListNode | null {
  let pre = head;
  let total = 0;

  while (head != null) {
    head = head.next;
    total++;
  }

  let mid = Math.floor(total / 2);

  let count = 0;
  while (count < mid) {
    if (pre) pre = pre.next;
    count++;
  }
  return pre;
}
