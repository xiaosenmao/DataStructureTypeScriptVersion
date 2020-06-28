import { ISet } from './Set';
import { BST } from '../BinarySearchTree/BST';
import Comparable from '../BinarySearchTree/Comparable';

class BSTSet<E extends Comparable<E>> implements ISet<E> {
	private bst: BST<E> = new BST();

	getSize(): number {
		return this.bst.getSize();
	}

	isEmpty(): boolean {
		return this.bst.isEmpty();
	}

	add(e: E): void {
		this.bst.add(e);
	}

	remove(e: E): void {
		this.bst.remove(e);
	}

	contains(e: E): boolean {
		return this.bst.contains(e);
	}
}
