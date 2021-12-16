export class RandomNode {

  val: number
  next: RandomNode | null = null
  random: RandomNode | null = null
  constructor(val: number, next: RandomNode | null = null, random: RandomNode | null = null) {
    this.val = val;


    this.next = next;



    this.random = random;

  }
}