import IQueue from './IQueue';

//              front             tail
// [null,  null,  2,  3,  4,  5,  null,  null,  null,  null,  null]
//
// 如果(tail + 1) % capacity == front 那么表示队列已经满员(实际此时会浪费数组中的一个空间)
export class LoopQueue<E> implements IQueue<E> {
	private queue: Array<E>;
	private front: number;
	private tail: number;
	private size: number;

	constructor(capacity = 10) {
		this.queue = new Array<E>(capacity + 1);
		this.front = 0;
		this.tail = 0;
		this.size = 0;
	}

	getCapacity(): number {
		return this.queue.length - 1;
	}

	isEmpty(): boolean {
		return this.front === this.tail;
	}

	getSize(): number {
		return this.size;
	}

	enQueue(e: E): void {
		if ((this.tail + 1) % this.queue.length === this.front) { // 队列满员
			this.resize(this.getCapacity() * 2)
		}
		this.queue[this.tail] = e;
		this.tail = (this.tail + 1) % this.queue.length;
	}

	deQueue(): E {
		if (this.isEmpty()) {
			throw new Error('Cannot dequeue from an empty queue.');
		}

		const ret = this.queue[this.front];
		this.queue[this.front] = null;
		this.front = (this.front + 1) % this.queue.length;
		this.size--;

		if (this.size === this.getCapacity() / 4 && this.getCapacity() / 2 !== 0) {
			this.resize(this.getCapacity() / 2)
		}

		return ret;
	}

	getFront(): E {
		if (this.isEmpty()) {
			throw new Error('Queue is empty.');
		}
		return this.queue[this.front];
	}

	resize(newCapacity: number): void {
		const newQueue = new Array<E>(newCapacity + 1);

		for (let i = 0; i < this.size; i++) {
			newQueue[i] = this.queue[(i + this.front) % this.queue.length];
		}
		this.queue = newQueue;
		this.front = 0;
		this.tail = this.size;
	}
}
