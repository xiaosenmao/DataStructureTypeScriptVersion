import Comparable from '../BinarySearchTree/Comparable';
import EnhanceArray from './EnhanceArray';

export class MaxHeap<E extends Comparable<E>> {

	private data: EnhanceArray<E>;

	// 将任意数组整理成堆的形状 heapify
	constructor(arr?: E[]) {// 将任意数组整理成堆的形状 heapify
		if (arr) {
			this.data = new EnhanceArray<E>();
			arr.forEach(e => this.data.push(e));

			for (let i = this.parent(this.data.length - 1); i >= 0; i--) {
				this.siftDown(i);
			}
		}
	}

	// 返回堆中元素的个数
	size(): number {
		return this.data.length;
	}

	isEmpty(): boolean {
		return this.data.length === 0;
	}

	// 返回完全二叉树的数组表示中，一个索引所表示的元素的父节点的索引
	private parent(index: number): number {
		if (this.data.length === 0) {
			throw new Error('Can not findMax when heap is empty.');
		}

		return Math.floor((index - 1) / 2);
	}

	// 返回完全二叉树的数组表示中，一个索引所表示的元素的左孩子节点的索引
	private leftChild(index: number): number {
		return 2 * index + 1;
	}

	// 返回完全二叉树的数组表示中，一个索引所表示的元素的右孩子节点的索引
	private rightChild(index: number): number {
		return 2 * index + 2;
	}

	// 向堆中添加元素
	add(e: E) {  // O(logn)
		this.data.push(e);
		this.siftUp(this.data.length - 1);
	}

	private siftUp(k: number) {  // 需要上浮的元素的索引
		// 不是根节点， 并且父节点元素小于 此需要上浮的元素
		while (k > 0 && this.data[this.parent(k)].comparableTo(this.data[k]) < 0) {
			this.data.swap(k, this.parent(k));
			k = this.parent(k);
		}
	}

	// 查看堆中的最大元素
	findMax(): E {
		if (this.data.length === 0) {
			throw new Error('Can not findMax when heap is empty.');
		}
		return this.data[0];
	}

	// 从堆中取出最大元素
	extractMax(): E {  // O(logn)
		let ret = this.findMax();

		this.data.swap(0, this.data.length - 1);
		this.data.pop();
		this.siftDown(0);

		return ret;
	}

	// 下沉
	private siftDown(k: number): void {
		while (this.leftChild(k) < this.data.length) {  // 索引为k的元素的节点有左孩子
			let j = this.leftChild(k);
			if (j + 1 < this.data.length && this.data[j + 1].comparableTo(this.data[k]) > 0) {  // 有右孩子，并且有孩子的元素的的值大于左孩子
				j = this.rightChild(k);
			}
			// data[j] 是 leftChild 和 rightChild 中的较大值

			if (this.data[k].comparableTo(this.data[j]) >= 0) {
				break;
			}

			this.data.swap(k, j);
			k = j;
		}
	}
}


// 使用数组存储二叉堆
/*

                                                         62 (0)
                                              /                          \
                                41 (1)                                             30 (2)
                            /            \                                      /           \
                   28 (3)                       16 (4)                    22 (5)          13 (6)
                    /       \                   /
           19 (7)           17 (8)       15 (9)




i:    0   1   2   3   4   5   6   7   8   9
      62  41  30  28  16  22  13  19  17  15


    parent (i) = (i - 1) / 2  (整除)

    leftChild (i)  =  2*i + 1
    rightChild (i) =  2*i + 2

*/
