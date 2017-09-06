function Node(element) {
  this.element = element;
  this.next = null;
}

function Llist() {

  this.head = new Node('head');
  console.log(this.head)
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;


  function find(item) {
    let currNode = this.head;
    console.log(currNode);
    while (currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  function insert(newElement, item) {
    const newNode = new Node(newElement);
    const current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }

  function remove() {
    console.log('remove');
  }

  function display() {
    const currNode = this.head;
    while (!(currNode.next != null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }
}

const cities = new Llist();
cities.insert('China', 'head');
cities.insert('R', 'lon');
cities.display();
// module.exports = Llist;
