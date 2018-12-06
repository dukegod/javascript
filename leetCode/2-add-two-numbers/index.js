/**
 * Created by hui on 2017/11/8.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
const addTwoNumbers = function(l1, l2) {
  let add = 0
    , ans
    , head;

  while(l1 || l2) {
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

  return ans;
};
