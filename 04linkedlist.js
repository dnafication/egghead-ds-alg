// Linked list

// A linked list is a collection of items where each item points to the next one in the list. Because of this structure, linked lists are very slow when searching for an item at a particular index.

function createNode(value) {
  return {
    value,
    next: null
  };
}

function createLinkedList() {
  return {
    // head
    head: null,
    // tail
    tail: null,
    // length
    length: 0,
    // push
    push(value) {
      const node = createNode(value);

      if (this.head === null) {
        this.head = node;
        this.tail = node;
        this.length++;
        return node;
      }
      this.tail.next = node;
      this.tail = node;
      this.length++;
      return node;
    },
    pop() {
      // for cases where the list is emplty, we return null
      if (this.isEmpty()) {
        return null;
      }
      // for cases where list length >= 1, we will pop the last value
      // which is tail. lets store this in a variable
      const node = this.tail;

      // for length == 1
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.length--; // or set to 0
        return node;
      }

      // inefficiency of linked list is whenever we have to find an item,
      // we have to start at the head and call next until we find the item

      // in this case we need to find the penultimate item and then set it as
      // the last item.

      let current = this.head;
      let penultimate;

      while (current) {
        if (current.next === this.tail) {
          // if next item is the tail
          penultimate = current;
          break;
        }
        // move on the next item
        current = current.next;
      }

      penultimate.next = null;
      this.length--;
      return node;
    },
    // get
    get(index) {
      if (index < 0 || index > this.length - 1) {
        return null;
      }

      if (index === 0) {
        return this.head;
      }

      let current = this.head;
      let i = 0;

      while (i < index) {
        i++;
        current = current.next;
      }

      return current;
    },

    // delete
    delete(index) {
      if (index < 0 || index > this.length - 1) {
        return null;
      }

      if (index === 0) {
        const deleted = this.head;
        this.head = this.head.next;
        this.length--;
        return deleted;
      }

      let current = this.head;
      let previous;
      let i = 0;

      while (i < index) {
        i++;
        previous = current;
        current = current.next;
      }

      const deleted = current;
      previous.next = current.next;

      if (previous.next === null) {
        this.tail = previous;
      }

      this.length--;
      return deleted;
    },
    // isEmpty
    isEmpty() {
      return this.length === 0;
    },
    print() {
      const values = [];
      let current = this.head;

      while (current) {
        values.push(current.value);
        current = current.next;
      }
      return values.join(" => ");
    }
  };
}

const llist = createLinkedList();
const nodes = ["a", "b", "c", "d", "e", "f"].map(v => llist.push(v));

// console.log(nodes);
console.log(llist.print());
// get the length
console.log(llist.length);

//pop the last item
console.log(llist.pop());
console.log(llist.print());

// get the 4th item
console.log(llist.get(3));
console.log(llist.print());

// delete 3rd item
console.log(llist.delete(2));
console.log(llist.print());
