// Stacks
// A stack is a collection of items that obeys the principle of "last in, first out". Like a stack of plates, we can only access the topmost plate at any time. We must remove that plate before we get down to other plates. This is useful for function calls, hence why it's called a "call stack" in JavaScript.

function createStack() {
  const array = [];

  return {
    push(item) {
      array.push(item);
    },
    pop() {
      return array.pop();
    },
    peek() {
      return array[array.length - 1];
    },
    get length() {
      return array.length;
    },
    isEmpty() {
      return array.length === 0;
    }
  };
}

const lowerBodyStack = createStack();

lowerBodyStack.push("underwear");
lowerBodyStack.push("socks");
lowerBodyStack.push("pants");
lowerBodyStack.push("shoes");

lowerBodyStack.peek();
lowerBodyStack.pop();
lowerBodyStack.isEmpty();
