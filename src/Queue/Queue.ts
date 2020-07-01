export interface IQueue<E> {
	getSize: () => number;
	isEmpty: () => boolean;
	enQueue: (e: E) => void;
	deQueue: () => E;
	getFront: () => E;
	clear?: (i: number) => void;
}

export class Queue<E> implements IQueue<E> {

	private queue: Array<E> = new Array();

	getSize(): number {
		return this.queue.length;
	}

	isEmpty(): boolean {
		return this.queue.length === 0;
	}

	enQueue(e: E): void {
		this.queue.push(e);
	}

	deQueue(): E {
		return this.queue.shift();
	}

	getFront(): E {
		return this.queue[0];
	}

	clear(): void {
		this.queue = [];
	}
}

const q1: Queue<number> = new Queue();
q1.enQueue(0);
q1.enQueue(1);
q1.enQueue(2);
console.log(q1);
q1.deQueue();
console.log(q1);
