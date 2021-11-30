import { ListNode } from '../model/ListNode';

/**
 * 237. 删除链表中的节点
 * https://leetcode-cn.com/problems/delete-node-in-a-linked-list/
 * @param root  给定要删除的节点
 */
export function deleteNode(root: ListNode | null): void {
  if (root) {
    //如果只将root的引用地址更改为root.next，则只是切换了指针指向的位置，并没有实际更改链表内节点指向
    //所以处理的方式是将当前节点的下一个节点的值赋值给当前节点，然后再将下一个节点的next指向当前节点的next，相当于将当前节点的下一个节点删掉了，由于已经将下一个节点的值迁移到当前节点了，效果上看就是删除了当前节点
    root.val = root.next!.val;
    root.next = root.next!.next;
  }
}
