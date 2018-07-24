const Node = require('./node');

class Llist {
  constructor() {
    this.head = new Node('head');
  }
  find(item) {
    let currentNode = this.head;
    while (currentNode.ele != item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  findPrevious(item) {
    let currentNode = this.head;
    while (!(currentNode.next !== null && currentNode.next.ele === item)) {
      currentNode = currentNode.next;
    }
    // console.log(currentNode);
    return currentNode;
  }
  insert(newEle, item) {
    const newNode = new Node(newEle);
    const currentNode = this.find(item);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }
  remove(item) {
    const preNode = this.findPrevious(item);
    const currentNode = this.find(item);
    preNode.next = currentNode.next;
  }
  display() {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      console.log(currentNode.next.ele);
      currentNode = currentNode.next;
    }
  }
}

const newlist = new Llist();

newlist.insert('a', 'head');
newlist.insert('b', 'a');
newlist.insert('c', 'b');
newlist.insert('d', 'c');
newlist.display();

newlist.findPrevious('c');
newlist.remove('c');
newlist.display()
