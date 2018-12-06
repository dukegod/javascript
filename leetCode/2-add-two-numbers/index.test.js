/**
 * Created by hui on 2017/11/8.
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

class List {
  constructor(val) {
    this.head = new ListNode(val);
  }

  insert(params) {
    const cur = this.head;
    const newnode = new ListNode(params);
    newnode.next = cur.next;
    cur.next = newnode.val;
  }

  display() {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      console.log(currentNode.next);
      currentNode = currentNode.next;
    }
  }
}


const addTwoNumbers = function(l1, l2) {
  let add = 0
    , ans
    , head;

  while (l1 || l2) {
    let a = l1 ? l1.val : 0
      , b = l2 ? l2.val : 0;

    var sum = a + b + add;

    // 获取进一位的数值
    add = ~~(sum / 10);

    // 获取余数
    let node = new ListNode(sum % 10);

    if (!ans)
      ans = head = node;
    else {
      head.next = node;
      head = node;
    }

    if (l1)
      l1 = l1.next;
    if (l2)
      l2 = l2.next;
  }

  if (add) {
    node = new ListNode(add);
    head.next = node;
    head = node;
  }
  console.log(ans);
  return ans;
};


const lone = new List(2);
const twe = new List(7);

lone.insert(4);
lone.insert(3);

console.log(lone);
lone.display();

twe.insert(0);
twe.insert(8);

addTwoNumbers(lone, twe);
