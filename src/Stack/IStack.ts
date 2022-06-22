export default interface IStack<E> {
	size(): number;
	isEmpty(): boolean;
	push(e: E): void;
	pop(): E;
	peek(): E;
	clear(): void;
}
