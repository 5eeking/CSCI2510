class Queue {
    constructor() {
        this.list = new SinglyLinkedList()
        this.count = 0
    }

    isEmpty() {
        if (this.count == 0) {
            return true
        } else {
            return false
        }
    }

    enqueue(data) {
        this.list.append(data)
        this.count += 1
    }

    dequeue() {
        if (this.count == 0) {
            return undefined
        }
        this.count -= 1
        return this.list.deleteFirstNode()
    }

    front() {
        if (this.count == 0) {
            return undefined
        }
        return this.list.head.data
    }

    printQueue() {
        if (this.count == 0) {
            console.log("Queue is empty")
        } else {
            this.list.printInOrder()
        }
    }
}