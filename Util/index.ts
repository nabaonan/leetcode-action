import { RandomNode } from './../model/RandomNode';
import { ListNode } from './../model/ListNode';
import TreeNode from '../model/TreeNode';
import LRUCache from '../LinkList/LRU';
import LRUCacheStack from '../LinkList/LRU_stack';

/**
 * 构造一颗二叉树，节点是模拟出来的，暂时固定
 * @returns
 */
export function getTree(): TreeNode {
  /**
   *        0
   *    1       2
   * 11  12   21  22
   */
  const root = new TreeNode(0);
  const left1 = new TreeNode(1);
  const left11 = new TreeNode(11);
  const left21 = new TreeNode(21);
  const right2 = new TreeNode(2);
  const right12 = new TreeNode(12);
  const right22 = new TreeNode(22);
  left1.left = left11;
  left1.right = right12;
  right2.left = left21;
  right2.right = right22;
  root.left = left1;
  root.right = right2;
  return root;
}

/**
 * 将一个数组转换二叉树  这个方法来自于网络，待自己实现
 * @param arr 
 * @returns 
 */
export function genTreeFromArr(arr: number[]):TreeNode { 


    let floor = 0, count = 0;
  let treeNodes:TreeNode[] = []
    while (arr != null && count < arr.length) {
        let start = Math.pow(2, floor) - 1;
        let end = Math.pow(2, floor + 1) - 1;
        if (end > arr.length) {
            end = arr.length;
        }
        for (let i = start; i < end; i++) {
            if (arr[i] != null) {
                treeNodes[i] = new TreeNode(arr[i]);
            } else {
                treeNodes[i] = new TreeNode();
            }
            if (i > 0) {
                let parent = (i - 1) / 2;
                if (parent >= 0) {
                    let pNode = treeNodes[parent];
                    if (pNode != null) {
                        if (i % 2 == 1) {
                            pNode.left = treeNodes[i];
                        } else {
                            pNode.right = treeNodes[i];
                        }
                    }
                }
            }
            count++;
        }
        floor++;
    }
    return treeNodes[0];

}

/**
 * 返回一个链表的数组形式
 * @param listNode 完整的链表
 * @returns 链表的数组表现形式
 */
export function getLinkArr(listNode: ListNode | null): number[] {
  const result = [];
  if (listNode != null) {
    while (listNode != null) {
      result.push(listNode.val);
      listNode = listNode.next;
    }
  }
  return result;
}

/**
 * 根据一个数组返回一个完整链表
 * @param arr 一个数组 表示链表
 * @returns 一个链表节点
 */
export function getLinkList(arr: number[]): ListNode | null {
  let result: ListNode | null = null;
  let head: ListNode | null = null;
  arr.forEach((item) => {
    if (!result) {
      head = result = new ListNode(item);
    } else {
      result.next = new ListNode(item);
      result = result.next;
    }
  });

  return head;
}

/**
 * 选取链表其中一个节点
 * @param index 链表中的序号 从0开始
 * @param list 完整的链表
 * @returns
 */
export function pickNode(
  index: number,
  list: ListNode | null
): ListNode | null {
  let count = 0;

  while (count < index) {
    if (list) {
      list = list.next;
    }

    count++;
  }

  return list;
}

export function getLastLinkNode(list: ListNode): ListNode {
  while (list.next != null) {
    list = list.next;
  }
  return list;
}

export function getCycleList(
  arr: number[],
  cyclepoint: number
): ListNode | null {
  const list = getLinkList(arr);
  if (cyclepoint == -1) {
    return list;
  }

  if (list != null) {
    const node = getLastLinkNode(list);
    const center = pickNode(cyclepoint, list);
    node.next = center;
  }
  return list;
}

/**
 * 返回两个相交链表
 * @param arr1
 * @param arr2
 * @param commonArr 相交部分
 * @returns
 */
export function getInterLink(
  arr1: number[],
  arr2: number[],
  commonArr: number[]
): ListNode[] {
  const list1 = getLinkList(arr1);
  const list2 = getLinkList(arr2);
  const common = getLinkList(commonArr);
  if (list1) {
    getLastLinkNode(list1).next = common;
  }
  if (list2) {
    getLastLinkNode(list2).next = common;
  }
  if (list1 && list2) {
    return [list1, list2];
  } else {
    return [];
  }
}

export function getLRUResult(
  operate: ('LRUCache' | 'get' | 'put')[],
  params: number[][],
  useStack: boolean = false
): (number | null)[] {
  let lru: LRUCache | LRUCacheStack;
  let result: (null | number)[] = [];
  operate.forEach((op, index) => {
    if (op == 'LRUCache') {
      if (useStack) {
        lru = new LRUCacheStack(params[index][0]);
      } else {
        lru = new LRUCache(params[index][0]);
      }
      result.push(null);
    } else if (op == 'get') {
      result.push(lru.get(params[index][0]));
    } else if (op == 'put') {
      lru.put(params[index][0], params[index][1]);
      result.push(null);
    }
  });
  return result;
}


type MyNumber = [number, null | number]
export function getRandomLink(arr: (MyNumber)[]) {

 
  const map: Record<number, RandomNode> = {}
  for (let i = 0; i < arr.length; i++) {

    if (arr[i][0] != null) {

      let node = new RandomNode(arr[i][0])
      map[node.val] = node
    }


  }
  let prev
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i][1] != null) {
      let node = map[arr[i][1]!]
      if (node) { 

        map[arr[i][0]].random = node
      }
    }
    if (!prev) {
      prev = map[arr[i][0]]
    } else { 
      prev.next = map[arr[i][0]]
    }
  }
  return map[arr[0][0]]

}
