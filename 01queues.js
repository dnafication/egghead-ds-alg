// Queues
// A queue is a first-in, first-out data structure (FIFO). We can only remove items from the queue one at a time, and must remove items in the same sequence as they were placed in the queue.

function createQueue() {
  const queue = [];
  return {
    enqueue(item) {
      queue.unshift(item);
    },
    dequeue() {
      return queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    get length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    }
  };
}

// const q = createQueue();
// console.log(q.isEmpty());

// q.enqueue("renew my passport");
// q.enqueue("get aws certified");
// q.enqueue("get a job in reactjs");
// q.enqueue("be happy");

// console.log(q.peek());
// console.log(q.dequeue());
// console.log(q.dequeue());
