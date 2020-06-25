
class DataNode {
    constructor(data = null, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    // O(1)
    addFirst(e) {
        let prev = this.head;
        if (!prev) {
            this.head = new DataNode(e);
            this.size++;
        } else {
            // const dataNode = new DataNode(e);
            // dataNode.next = prev;
            // this.head = dataNode;

            this.head = new DataNode(e, prev);
            this.size++;
        }
    }

    // O(n)
    addLast(e) {
        let current = this.head;
        if (!current) {
            this.head = new DataNode(e);
            this.size++;
        } else {
            while (current.next) {
                current = current.next;
            }

            current.next = new DataNode(e);
            this.size++;
        }
    }

    // O(n/2) ~= O(n)
    insert(index, e) {
        if (index < 0 || index > this.size) {
            throw new Error('Insert failed. Illegal index!');
        }

        let prev = this.head;
        if (!prev) {
            this.head = new DataNode(e);
            this.size++;
        } else {
            let i = 0;
            while (i < index) {
                prev = prev.next;
                i++;
            }

            // const dataNode = new DataNode(e);
            // dataNode.next = prev.next;
            // prev.next = dataNode;

            prev.next = new DataNode(e, prev.next);
            this.size++;
        }
    }

    // O(n)
    remove(e) {
        if (!this.head) {
            return;
        }

        if (this.head.data === e) {
            this.head = null;
            this.size--;
            return;
        }

        let current = this.head;
        let next = current.next;

        while (next) {
            if (next.data === e) {
                // remove next
                current.next =  next.next;
                this.size--;
            } else {
                current = next.next;
                next = current.next;
            }
        }
    }
}
