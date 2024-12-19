// Class for Node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Class for LinkedList
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Append function to add a new node
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
        this.print();
    }

    // Print function to display the list
    print() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log("Linked List:", result.join(" -> "));
    }
}

// Create a LinkedList instance and append items
const linkedList = new LinkedList();
linkedList.append("Data Structures - Array");
linkedList.append("Variable Type - Integer");
linkedList.append("Sorting Algorithm - Bubble Sort");
