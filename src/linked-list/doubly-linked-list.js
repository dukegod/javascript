
const DoublyNode = require('./doubly-node');

class DoublyLinkedList {
  constructor() {
    this.head = new DoublyNode('head');
  }
  find(item) {
    let curNode = this.head;
    // console.log(curNode.next);
    while (curNode.ele !== item) {
      curNode = curNode.next;
    }
    // console.log(curNode);
    return curNode;
  }
  add(newEle, item) {
    const newNode = new DoublyNode(newEle);
    const curNode = this.find(item);
    newNode.next = curNode.next;
    newNode.previous = curNode;
    curNode.next = newNode;
  }
  display() {
    let curNode = this.head;
    while (curNode.next !== null) {
      // statement
      console.log(curNode.next.ele);
      curNode = curNode.next
    }
  }
}


const doublylinklist = new DoublyLinkedList();
doublylinklist.add('a', 'head');
doublylinklist.add('b', 'a');
doublylinklist.add('c', 'd');
// doublylinklist.add('d', 'e');
// doublylinklist.add('e', 'f');

// doublylinklist.find('e');
doublylinklist.display();

module.exports = DoublyLinkedList;
