import DataNode from './DataNode';

class LinkedList<E> {
	head: DataNode<E>;
    size: number;

	constructor() {
		this.head = null;
		this.size = 0;
	}

	getSize(): number {
		return this.size;
	}

	isEmpty(): boolean {
		return this.size === 0;
	}

	// O(1)
	addFirst(e: E): void {
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
	addLast(e: E): void {
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
    insert(index: number, e: E): void {
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
	remove(e: E): void {
		if (!this.head) {
			return;
		}

		if (Object.is(this.head.data, e)) {
			this.head = null;
			this.size--;
			return;
		}

		let current = this.head;
		let next = current.next;

		while (next) {
			if (Object.is(next.data, e)) {
				// remove next
				current.next =  next.next;
				this.size--;
			} else {
				current = next.next;
				next = current.next;
			}
		}
	}

	toString(): string {
		return JSON.stringify(this);
	}
}

const l = new LinkedList<string>();
console.log('l: ', l);

l.addFirst('a');
l.addLast('b');
l.addLast('c');
l.addLast('d');
console.log('l: ', l, 'l.getSize(): ', l.getSize());

l.insert(1, 'e');
console.log('l: ', l, 'l.getSize(): ', l.getSize());

l.remove('e');
console.log('l: ', l, 'l.getSize(): ', l.getSize());
