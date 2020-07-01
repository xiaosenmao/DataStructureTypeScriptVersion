import Comparable from '../BinarySearchTree/Comparable';
import { IQueue } from '../Queue/Queue';
import { MaxHeap } from './MaxHeap';

export class PriorityQueue<E extends Comparable<E>> implements IQueue<E> {

	private maxHeap = new MaxHeap<E>();

	getSize(): number {
		return this.maxHeap.size();
	}

	isEmpty(): boolean {
		return this.maxHeap.isEmpty();
	}

	getFront(): E {
		return this.maxHeap.findMax();
	}

	enQueue(e: E) {
		this.maxHeap.add(e);
	}

	deQueue(): E {
		return this.maxHeap.extractMax();
	}
}
