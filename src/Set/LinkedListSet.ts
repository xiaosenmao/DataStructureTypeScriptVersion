import { ISet } from './Set';
import { LinkedListEnhance as LinkedList } from '../LinkedList/LinkedListEnhance';

class LinkedListSet<E> implements ISet<E> {
	private list: LinkedList<E> = new LinkedList();

	getSize(): number {
		return this.list.getSize();
	}

	isEmpty(): boolean {
		return this.list.isEmpty();
	}

	add(e: E): void {
		if (!this.list.contains(e)) {
			this.list.addFirst(e);
		}
	}

	remove(e: E): void {
		this.list.removeElement(e);
	}

	contains(e: E): boolean {
		return this.list.contains(e);
	}
}
