import { ListNode } from '../model/ListNode';

/**
 * 迭代法循环，双指针
 * @param list1
 * @param list2
 * @returns
 */

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let head: ListNode, prev: ListNode; //指向前一个节点
  head = prev = new ListNode(); //前一个节点和头结点都先指向虚拟头结点

  //只有当两个节点都存在才进入，加入有一个为空，则证明遍历完了
  while (list1 !== null && list2 != null) {
    if (list2.val > list1.val) {
      //当list1比list2小，那么前一个节点要指向list1，这就是创建虚拟头结点的用处，假如没有虚拟头结点，prev就没有值，就不好操作
      prev.next = list1;
      list1 = list1.next;
      //list1指针向后移动
    } else {
      prev.next = list2;
      list2 = list2.next; //list2后移一位指针
    }
    prev = prev.next; //前一个节点后移一位指针，其实prev这个指针可以理解为就是穿针引线的那根针
  }

  // 当遍历结束肯定有一个指针为null，那么剩下不为null的list就通过prev这个指针穿起来即可，list1为null则prev将list2串起来就好了
  prev.next = list1 === null ? list2 : list1;

  return head.next; //注意这里要返回头结点的next，因为头结点是虚拟出便于操作的，本身没有含义
}

/**
 * 递归
 * @param list1
 * @param list2
 */
export function mergeTwoLists2(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  //由于这个函数最后得到的是从小到大一个数组，所以这个函数返回的结果总是最小的，以此递归

  if (list1 !== null && list2 != null) {
    if (list1.val < list2.val) {
      //当list1比list2小，那么list1的next指向的应该是下一个节点和list2中更小的那个
      list1.next = mergeTwoLists(list1?.next, list2);
      return list1; //返回两者之间更小的那个
    } else {
      list2.next = mergeTwoLists(list1, list2?.next);
      return list2;
    }
  } else if (list1 == null) {
    //list1遍历完了只剩下list2，只能返回list2
    return list2;
  } else {
    return list1;
  }
}
