import { ListNode } from "../model/ListNode"

function deleteNode(head: ListNode | null, val: number): ListNode | null {
/**
 * 思路 
 * 
 * 定义一个虚拟头结点，指向头结点
 * 用一个prev记录上一个节点，
 * 当当前节点是目标值的时候，用上一个节点的next指向当前节点的下一个
 * 
 */
  let cur = head
  let prev = new ListNode()
  prev.next = head
  let result = prev
  while (cur != null) {
    if (cur.val === val) {
      cur.next
      prev.next = cur.next
      break
    } else {
      prev = cur
      cur = cur.next
    }
  }
  return result.next
};