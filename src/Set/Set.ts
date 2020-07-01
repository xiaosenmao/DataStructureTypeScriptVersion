export interface ISet<E> {
	getSize: () => number;
	isEmpty: () => boolean;
	add: (e: E) => void;
	remove: (e: E) => void;
	contains: (e: E) => boolean;
}
