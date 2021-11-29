/**
 * 翻转链表  迭代法
 * https://leetcode-cn.com/problems/reverse-linked-list/submissions/
 */

import { ListNode } from '../model/ListNode';

export function reverseList(head: ListNode | null): ListNode | null {
  if (head == null) {
    return null;
  }
  let prev = head; //前指针指向头结点
  let cur = head.next; //当前指针指向下一个节点
  prev.next = null; //头结点变成尾结点所以指向null

  while (cur) {
    const next = cur.next; //缓存当前指针的下一个，避免一会更改当前指针的next就找不到下一个节点了
    cur.next = prev; //当前指针下一个指向前一个节点
    prev = cur; //指针后移，当前节点变成pre
    cur = next; //当前节点指针后移
  }
  return prev;
}

/**
 * 递归法
 * @param head
 */

export function reverseList2(head: ListNode | null): ListNode | null {
  //head =null 代表边界条件
  //head.next=null递归终止条件
  if (head == null || head.next == null) {
    return head;
  }

  //递归调用直到访问到最后一个节点终止
  const lastNode = reverseList2(head.next); //当返回最后一个节点后，此时head就是倒数第二个节点，
  head.next.next = head; //此时将后一个节点的next指针指向当前节点，当
  head.next = null; //这里赋值为null不影响后续赋值，因为下一次递归还是会设置head.next.next = head,下次递归时候改的head.next.next实际上就是改的当前这次的head.next,而这里设置为null就是为了最后一个节点的指向

  return lastNode; //必须总是返回最后一个节点，因为最后一个节点就是翻转后的头结点
}
