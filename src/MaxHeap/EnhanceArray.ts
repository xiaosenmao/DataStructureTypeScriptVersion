import Comparable from '../BinarySearchTree/Comparable';

export default class EnhanceArray<E extends Comparable<E>> extends Array<E> {
	swap(i: number, j: number): void {
		const l = this.length;

		if (i < 0 || i >= l || j < 0 || j >= l) {
			throw new Error("Index is illegal.");
		}

		const instance = this;
		const temp = instance[i];
		instance[i] = instance[j];
		instance[j] = temp;
	}
}
