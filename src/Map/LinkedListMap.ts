import { IMap } from './Map';

class Node<K, V> {
	key: K;
	value: V;
	next: Node<K, V>;

	constructor(key: K = null, value: V = null, next: Node<K, V> = null) {
		this.key = key;
		this.value =value;
		this.next = next;
	}

	toString(): string {
		return `${this.key?.toString()} : ${this.value?.toString()}`
	}
}

class LinkedListMap<K, V> implements IMap<K, V> {

	dummyHead: Node<K, V>;
	size: number;

	constructor() {
		this.dummyHead = new Node();
		this.size= 0;
	}

	getSize(): number {
		return this.size;
	}

	isEmpty(): boolean {
		return this.size == 0;
	}

	getNode(key: K): Node<K, V> {
		let cur = this.dummyHead.next;
		while (cur !== null) {
			if (Object.is(cur.key, key)) {
				return cur;
			} else {
				cur = cur.next;
			}
		}

		return null;
	}

	contains(key: K): boolean {
		const node = this.getNode(key);
		return node !== null;
	}

	get(key: K): V {
		const node = this.getNode(key);
		if (node !== null) {
			return node.value;
		}

		return null;
	}

	add(key: K, value: V): void {
		const node = this.getNode(key);
		if (node === null) {
			this.dummyHead.next = new Node(key, value, this.dummyHead.next);
			this.size++;
		} else {
			node.value = value;
		}
	}

	set(key: K, value: V): void {
		const node = this.getNode(key);
		if (node === null) {
			throw new Error(`${key} doesn't exist!`);
		} else {
			node.value = value;
		}
	}

	remove(key: K): V {
		let prev = this.dummyHead;
		while (prev.next !== null) {
			if (Object.is(prev.next.key, key)) {
				break;
			} else {
				prev = prev.next;
			}
		}

		if (prev !== null) {
			const delNode = prev.next;
			prev.next = delNode.next;
			this.size--;
			return delNode.value;
		}

		return null;
	}
}
