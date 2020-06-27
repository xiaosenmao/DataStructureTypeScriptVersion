export default interface Comparable<T> {
	comparableTo(val: T): number;
}
