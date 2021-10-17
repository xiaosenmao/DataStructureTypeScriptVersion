export default interface IQueue<E> {
	getSize: () => number;
	isEmpty: () => boolean;
	enQueue: (e: E) => void;
	deQueue: () => E;
	getFront: () => E;
	clear?: (i: number) => void;
}
