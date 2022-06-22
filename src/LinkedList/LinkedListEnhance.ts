import DataNode from './DataNode';

export class LinkedListEnhance<E> {
  private dummyHead : DataNode<E>;
  private size: number;

  constructor() {
		this.dummyHead  = new DataNode(null, null);
		this.size = 0;
  }

  getSize(): number {
		return this.size;
  }

  isEmpty(): boolean {
		return this.size === 0;
	}

	get(index: number): E {
		if (index < 0 || index > this.size) {
			throw new Error('Get failed. Illegal index.');
		}

		let prev = this.dummyHead;
		for (let i = 0; i < index; i++) {
			prev = prev.next;
		}

		return prev.data;
	}

	getFirst(): E {
		return this.get(0)
	}

	getLast(): E {
		return this.get(this.size);
	}

	insert(index: number, e: E): void {  // O(n)
		if (index < 0 || index > this.size) {
			throw new Error('Insert failed. Illegal index.');
		}

		let prev = this.dummyHead;
		for (let i = 0; i < index; i++) {
			prev = prev.next;
		}

		prev.next = new DataNode(e, prev.next);
		this.size++;
	}

	addFirst(e: E): void {
		this.insert(0, e);
	}

	addLast(e: E) {
		this.insert(this.size, e);
	}

	remove(index: number): E {  // O(n)
		if (index < 0 || index >= this.size) {
			throw new Error('Remove failed. Illegal index.');
		}

		let prev = this.dummyHead;
		for (let i = 0; i < index; i++) {
			prev = prev.next;
		}

		const delNode = prev.next;
		prev.next = delNode.next;
		delNode.next = null;
		this.size--;

		return delNode.data;
	}

	removeFirst(): E {  // O(1)
		return this.remove(0);
	}

	removeLast(): E {  // O(n)
		return this.remove(this.size);
	}

	removeElement(e: E): void {
		let prev = this.dummyHead;
		while (!!prev.next) {
			if (Object.is(prev.data, e)) {
				break;
			} else {
				prev = prev.next;
			}
		}

		if (!!prev.next) {
			const delNode = prev.next;
			prev.next = delNode.next;
			delNode.next = null;
			this.size--;
		}
	}

	contains(e: E): boolean {
		let cur = this.dummyHead;
		while (!!cur) {
			if (Object.is(cur.data, e)) {
				return true;
			} else {
				cur = cur.next;
			}
		}

		return false;
	}
}
