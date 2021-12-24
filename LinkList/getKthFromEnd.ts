import { ListNode } from "../model/ListNode"

/**
 * 剑指 Offer 22. 链表中倒数第k个节点
 * https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 * @param head 
 * @param k 
 * @returns 
 */
function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  /**
   * 快慢指针
   * 保持快慢指针间距为k，当k走到头，返回慢指针
   */

  let slow = head
  let fast = head
  let count = 0
  while (fast !== null) {
    fast = fast.next
    count++
    if (count > k) {
      slow = slow!.next
    }
  }
  return slow
};