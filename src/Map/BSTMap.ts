import { IMap } from './Map';
import Comparable from '../BinarySearchTree/Comparable';

class Node<K extends Comparable<K>, V> {
	key: K;
	value: V;
	left: Node<K, V>;
	right: Node<K, V>;

	constructor(key: K = null, value: V = null, left: Node<K, V> = null, right: Node<K, V> = null) {
		this.key = key;
		this.value = value;
		this.left = left;
		this.right = right;
	}

	toString(): string {
		return `${this.key?.toString()} : ${this.value?.toString()}`
	}
}

class BSTMap<K extends Comparable<K>, V> implements IMap<K, V> {

	private root: Node<K, V> = null;
	private size = 0;

	getSize(): number {
		return this.size;
	}

	isEmpty(): boolean {
		return this.size === 0;
	}

	// 向二分搜索树中添加新的元素(key, value)，递归算法
	add(key: K, value: V): void {
		this.root = this._add(this.root, key, value);
	}

	// 向以node为根的二分搜索树中插入元素(key, value)，递归算法
	// 返回插入新节点后二分搜索树的根
	private _add(node: Node<K, V>, key: K, value: V): Node<K, V> {
		if (node === null) {
			node = new Node(key, value);
			this.size++;
			return node;
		}

		if (key.comparableTo(node.key) < 0) {
			node.left = this._add(node.left, key, value);
		}
		else if (key.comparableTo(node.key) > 0) {
			node.right = this._add(node.right, key, value);
		} else {
			node.value = value;
		}

		return node;
	}

	// 向二分搜索树中添加新的元素(key, value)，非递归算法
	insert(key: K, value: V): void {
		if (this.root === null) {
			this.root = new Node(key, value);
			this.size++;
			return;
		}

		let cur = this.root;
		let parent: Node<K, V>;
		while (true) {
			parent = cur;

			if (key.comparableTo(cur.key) < 0) {
				cur = cur.left;
				if (cur.left === null) {
					parent.left = new Node(key, value);
					this.size++;
					break;
				}
			}
			else if (key.comparableTo(cur.key) > 0) {
				cur = cur.right;
				if (cur.right === null) {
					parent.right = new Node(key, value);
					this.size++;
					break;
				}
			}
			else {
				cur.value = value;
				break;
			}
		}
	}

	// 返回以node为根节点的二分搜索树中，key所在的节点
	getNode(node: Node<K, V>, key: K): Node<K, V> {
		if (node === null) {
			return null;
		}

		if (key.comparableTo(node.key) < 0) {
			return this.getNode(node.left, key);
		}
		else if (key.comparableTo(node.key) > 0) {
			return this.getNode(node.right, key);
		}
		else {
			return node;
		}
	}

	// 是否包含 key的节点， 使用递归
	contains(key: K): boolean {
		return this.getNode(this.root, key) !== null;
	}

	// 是否包含 key的节点， 使用非递归
	has(key: K): boolean {
		let cur =  this.root;
		while (cur !== null) {
			if (cur.key.comparableTo(key) === 0) {
				return true;
			}
			else if (cur.key.comparableTo(key) < 0) {
				cur = cur.left;
			}
			else {
				cur = cur.right;
			}
		}

		return false;
	}

	get(key: K): V {
		const node = this.getNode(this.root, key);
		return node === null ? null : node.value;
	}

	set(key: K, newValue: V): void {
		const node = this.getNode(this.root, key);

		if (node === null) throw new Error(`${key} doesn't exists!`);

		node.value = newValue;
	}

	remove(key: K): V {
		let node = this.getNode(this.root, key);
		if (node != null) {
			this.root = this._remove(this.root, key);
			return node.value;
		}

		return null;
	}

	// 删除以node为根的二分搜索树中键为key的节点，递归算法
	// 返回删除节点后的新的二分搜索树的根
	private _remove(node: Node<K, V>, key: K): Node<K, V> {
		if (node === null) {
			return null;
		}

		if (key.comparableTo(node.key) < 0) {
			node.left = this._remove(node.left, key);
			return node;
		}
		else if (key.comparableTo(node.key) > 0) {
			node.right = this._remove(node.right, key);
			return node;
		}
		else {
			// 待删除节点左子树为空
			if (node.left === null) {
				const rightNode = node.right;
				node.right = null;
				this.size--;
				return rightNode;
			}
			// 待删除节点右子树为空
			if (node.right === null) {
				const leftNode = node.left;
				node.left = null;
				this.size--;
				return leftNode;
			}

			// 待删除节点左右子树均不为空的情况

			// 找到比待删除节点大的最小节点, 即待删除节点右子树的最小节点
			// 用这个节点顶替待删除节点的位置
			const successor = this.minimum(node.right);
			successor.right = this.removeMin(node.right);
			successor.left = node.left;
			node.left = node.right = null;
			return successor;
		}
	}

	// 返回以node为根的二分搜索树的最小值所在的节点
	private minimum(node: Node<K, V>): Node<K, V> {
		if (node.left == null) {
			return node;
		}
		return this.minimum(node.left);
	}

	// 删除以node为根的二分搜索树中的最小节点
	// 返回删除节点后新的二分搜索树的根
	private removeMin(node: Node<K, V>): Node<K, V> {
		if (node.left === null) {
			const rightNode = node.right;
			node.right = null;
			this.size--;
			return rightNode;
		}

		node.left = this.removeMin(node.left);
		return node;
	}
}
