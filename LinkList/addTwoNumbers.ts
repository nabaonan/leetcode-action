

import { ListNode } from '../model/ListNode';


/**
 * 2. 两数相加
 * https://leetcode-cn.com/problems/add-two-numbers/
 * @param l1 
 * @param l2 
 * @returns 
 */
export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {

  /**
   * 思路
   * 同时遍历两个链表
   * 当长度不相等的时候，分多种情况判断
   * 当总和超过10则取余，并且设置进位
   * 
   * 当最后两个链表都遍历完
   * 需要判断最后是否还有进位，如果有则追加一个节点进位
   * 
   * 
   * 
   */
  let head = new ListNode();
  let result = head;
  let pre = 0;
  while (l1 || l2) {
    let total = 0;
    //分情况分别求值  其实总共就这三种情况，因为l1和l2同时为null不会进来
    if (l1 && l2) {
      total = l1.val + l2.val + pre;
    } else if (l1) {
      total = l1.val + pre;
    } else if (l2) {
      total = l2.val + pre;
    }

    head.next = new ListNode(total % 10);
    pre = Math.floor(total / 10);//注意这里要向下取整

    head = head.next;

    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }

  //两个链表都遍历完，如果还有进位则追加
  if (pre) {
    head.next = new ListNode(1);
  }
  return result.next;
}
