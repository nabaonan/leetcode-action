import { ListNode } from '../model/ListNode';

/**
 * 141. 环形链表
 * https://leetcode-cn.com/problems/linked-list-cycle/
 * @param head
 * @returns
 */

export function hasCycle(head: ListNode | null): boolean {
  /**
   * 思路 ：
   * 使用快慢指针，快指针每次移动两步，慢指针每次移动1步，如果有环的话，快指针会和慢指针相遇，此时的地址相同
   */

  let fast = head;
  let slow = head;
  if (head == null) {
    //空链表直接返回了
    return false;
  }

  while (fast != null && fast.next !== null) {
    //边界条件限定，如果链表没有环那么fast.next为null，如果快指针正好走到丽娜表的最后指向的空节点，那么下次循环时候fast就是null，所以这里要加个判断
    fast = fast.next.next; //快指针每次移动两步
    if (slow) {
      slow = slow.next; //慢指针每次移动一步
    }
    if (fast == slow) {
      //快慢指针相遇，地址相同
      return true;
    }
  }
  return false; //没相遇就是没有环
}
