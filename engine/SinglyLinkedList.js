class SinglyLinkedList{

    constructor() {
        this.head = undefined
        this.tail = undefined
    }

    isEmpty() {
        if (!this.head) {
            return true
        } else {
            return false
        }
    }

    prepend(data) {
        let node = new Node2(data)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
    }

    append(data) {
        let node = new Node2(data)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
    }

    deleteFirstNode() {
        let current = this.head
        if (!this.head) {
            return undefined
        } else if (current == this.head) {
            this.head = current.next
            return current.data
        }
    }

    deleteLastNode() {
        let current = this.head
        let prev = this.head
        if (!this.head) {
            return undefined
        }
        while (current) {
            if (!current.next) {
                prev.next = current.next
                this.tail = prev
                return current.data
            }
            prev = current
            current = current.next
        }
    }

    printInOrder() {
        this.printNext(this.head)
    }

    printNext(node) {
        if (!node) {
            return
        }

        if (node.next) {
            console.log(node.data)
            console.log("=>")
        } else {
            console.log(node.data)
        }

        this.printNext(node.next)
    }
}