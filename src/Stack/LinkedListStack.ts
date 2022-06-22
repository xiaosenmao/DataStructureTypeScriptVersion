import IStack from './IStack'
import { LinkedListEnhance as LinkedList } from '../LinkedList/LinkedListEnhance'

export class LinkedListStack<T> implements IStack<T> {
	private items: LinkedList<T> = new LinkedList<T>();

	size(): number {
		return this.items.getSize();
	}

	isEmpty(): boolean {
		return this.items.isEmpty();
	}

	push(e: T): void {
		this.items.addFirst(e);
	}

	pop(): T {
		return this.items.removeFirst()
	}

	peek(): T {
		return this.items.getFirst();
	}

	clear(): void {
		this.items = new LinkedList<T>();
	}
}
