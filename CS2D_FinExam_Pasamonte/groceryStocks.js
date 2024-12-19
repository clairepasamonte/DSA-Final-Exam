class Stack {
    constructor() {
        this.items = [];
    }

    // Peek function to check if stack is empty or return the top item
    peek() {
        if (this.items.length === 0) {
            console.log("The stack is empty.");
            return null;
        }
        return this.items[this.items.length - 1];
    }

    // Push function to add an item to the stack
    push(item) {
        this.items.push(item);
        this.print();
    }

    // Pop function to remove the last added item
    pop() {
        if (this.items.length === 0) {
            console.log("The stack is empty, nothing to pop.");
            return null;
        }
        const removedItem = this.items.pop();
        this.print();
        return removedItem;
    }

    // Print function to display the current stack
    print() {
        console.log("Current Stack:", this.items);
    }
}

// Create a stack instance
const groceryStack = new Stack();

// Add five grocery items using prompt
for (let i = 0; i < 5; i++) {
    const item = prompt(`Enter grocery item ${i + 1}:`);
    groceryStack.push(item);
}

// Demonstrate pop operation
console.log("Popping the top item:", groceryStack.pop());
