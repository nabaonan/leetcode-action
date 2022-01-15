
/**
 * 剑指 Offer 25. 合并两个排序的链表
 * https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
 * 
 * 
 * 
 * 
 */
import { ListNode } from "../model/ListNode"

export function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {

   /**
    * 思路：
    * 使用一个头部虚拟节点用来构建返回的链表
    * 设置一个指针始终指向头结点，用于返回
    * 另外一个指针跟随链表遍历
    * 判断另两个链表节点的值大小，分三种情况，遍历节点的指针指向较小的节点，对应的链表指针后移
    * 如果两个链表节点相等 则遍历节点的指针分别指向两个相等节点，两个链表的指针同时后移
    * 最后返回头部指针
    * 
    * 
    * 
    */
   
  let head: ListNode = new ListNode()
  let root = head

  while (l1 && l2) {
    if (l2.val < l1.val) {//链表2节点小于链表1
      const next = l2.next
      head.next = l2
      head = l2
      l2 = next
    } else if (l1.val < l2.val) {//链表1节点小于链表2
//将遍历节点的指针指向1
      const next = l1.next
      head.next = l1
      head = l1
      l1 = next

    } else {
//分别将遍历节点的指针指向两个链表节点
      const next = l1.next
      head.next = l1
      head = l1
      l1 = next

      const next2 = l2.next
      head.next = l2
      head = l2
      l2 = next2
    }
  }
//如果链表同时遍历完了，说明俩链表长度相同，直接返回头部指针就行
  if (l1 == null && l2 == null) {
    return root.next
  } else if (l1 == null) {//链表1遍历完了，但是链表2没有遍历完，那就把遍历节点的指针直接指向链表2
    head.next = l2
  } else {
    head.next = l1//同理指向链表1
  }

  return root.next






};