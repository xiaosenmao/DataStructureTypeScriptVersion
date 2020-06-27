import Comparable from './Comparable';
import { Stack } from '../Stack/Stack';
import { Queue } from '../Queue/Queue';

class Node<E extends Comparable<E>> {
  e: E;
  left: Node<E>;
  right: Node<E>;

  constructor(e: E) {
    this.e = e;
    this.left = null;
    this.right = null;
  }
}

class BST<E extends Comparable<E>> {
  private root: Node<E> = null;
  private size: number = 0;

  getSize(): number {
    return this.size;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  //  添加元素e
  add(e: E): void {
    this.root = this._add(this.root, e);
  }

  // 向以node为根的二分搜索树中出插入元素e，使用递归。
  // 返回插入新节点的根
  private _add(node: Node<E>, e: E): Node<E> {
    if (node === null) {
      this.size++;
      return new Node(e);
    }

    if (e.comparableTo(node.left.e) < 0) {
      node.left = this._add(node.left, e);
    }
    else if (e.comparableTo(node.right.e) > 0) {
      node.right = this._add(node.right, e);
    }

    return node;
  }

  //  向二分搜索树中出插入元素e，使用循环。
  insert(e: E): void {
    if (this.root === null) {
      this.root = new Node(e);
      this.size++;
      return;
    };

    let current = this.root;
    let parent: Node<E>;
    while (true) {
      parent = current;

      if (e.comparableTo(current.e) < 0) {
        current = current.left;
        if (current === null) {
          parent.left = new Node(e);
          this.size++;
          break;
        }
      }
      else if (e.comparableTo(current.e) > 0) {
        current = current.right;
        if (current === null) {
          parent.right = new Node(e);
          this.size++;
          break;
        }
      }
      else {
        break;
      }
    }
  }

  //  看二分搜索树中是否包含元素e
  contains(e: E): boolean {
    return this._contains(this.root, e);
  }

  //  看以node为根的二分搜索树中是否包含元素e, 递归算法
  private _contains(node: Node<E>, e: E): boolean {
    if (node === null) {
      return false;
    }

    if (e.comparableTo(node.e) === 0) {
      return true;
    }
    else if (e.comparableTo(node.e) < 0) {
      return this._contains(node.left, e);
    }
    else {
      return this._contains(node.right, e);
    }
  }

  //  二分搜索树的前序遍历
  preOrder(): void {
    this._preOrder(this.root);
  }

  //  前序遍历以node为根的二分搜索树，递归算法
  private _preOrder(node: Node<E>): void {
    if (node == null) return;

    // do stuff
    console.log(node.e);

    this._preOrder(node.left);
    this._preOrder(node.right);
  }

  // 二分搜索树的前序遍历,非递归
  preOrderNR(): void {
    let stack: Stack<Node<E>> = new Stack();
    stack.push(this.root);

    while (!stack.isEmpty()) {
      // do stuff.
      let cur = stack.pop();
      console.log(cur.e);

      if (cur.right !== null) {
        stack.push(cur.right);
      }
      if (cur.left !== null) {
        stack.push(cur.left);
      }
    }
  }

  //  二分搜索树的中序遍历
  inOrder(): void {
    this._inOrder(this.root);
  }

  //  中序遍历以node为根的二分搜索树，递归算法
  private _inOrder(node: Node<E>): void {
    if (node == null) return;

    this._inOrder(node.left);
    // do stuff
    console.log(node.e);
    this._inOrder(node.right);
  }

  //  二分搜索树的后序遍历
  postOrder(): void {
    this._postOrder(this.root);
  }

  //  后序遍历以node为根的二分搜索树，递归算法
  private _postOrder(node: Node<E>): void {
    if (node == null) return;

    this._postOrder(node.left);
    this._postOrder(node.right);
    // do stuff
    console.log(node.e);
  }

  //  按层级遍历（广度优先）
  levelOrder(): void {
    const q = new Queue<Node<E>>();
    q.enQueue(this.root);

    while (!q.isEmpty()) {
      const cur = q.deQueue();
      // do stuff
      console.log(cur.e);

      if (cur.left !== null) {
        q.enQueue(cur.left);
      }
      if (!cur.right !== null) {
        q.enQueue(cur.right);
      }
    }
  }

  // 查找二分搜索树中的最小值, 使用递归
  minimum(): E {
    if (this.size === 0) {
        throw new Error("BST is empty");
    }
    return this._minimum(this.root).e;
  }

  private _minimum(node: Node<E>): Node<E> {
    if (node.left === null) {
      return node;
    }
    return this._minimum(node.left);
  }

  // 查找二分搜索树中的最大值, 使用递归
  maximum(): E {
    if (this.size === 0) {
        throw new Error("BST is empty");
    }
    return this._maximum(this.root).e;
  }

  private _maximum(node: Node<E>): Node<E> {
    if (node.right === null) {
      return node;
    }
    return this._maximum(node.right);
  }

  // 查找二分搜索树中的最小值, 使用非递归
  findMin(): E {
    if (this.size === 0) {
      throw new Error("BST is empty");
    }

    let cur = this.root;
    while (cur.left !== null) {
      cur = cur.left;
    }
    return cur.e;
  }

  // 查找二分搜索树中的最大值, 使用非递归
  findMax(): E {
    if (this.size === 0) {
      throw new Error("BST is empty");
    }

    let cur = this.root;
    while (cur.right !== null) {
      cur = cur.right;
    }
    return cur.e;
  }

  // add(e: E): void {
  //   if (this.root == null) {
  //     this.root = new Node(e);
  //     this.size++;
  //     return;
  //   }

  //   this.relativeAdd(this.root, e);
  // }

  // private relativeAdd(node: Node<E>, e: E): void {
  //   if (e.comparableTo(node.e) === 0) {
  //     return;
  //   }
  //   else if (e.comparableTo(node.e) < 0 && node.left === null) {
  //     node.left = new Node(e);
  //     this.size++;
  //     return;
  //   }
  //   else if (e.comparableTo(node.e) > 0 && node.right === null) {
  //     node.right = new Node(e);
  //     this.size++;
  //     return;
  //   }

  //   if (e.comparableTo(node.left.e) < 0) {
  //     this.relativeAdd(node.left, e);
  //   } else {
  //     this.relativeAdd(node.right, e);
  //   }
  // }
}

// 前序，中序，后序 都是深度优先， 可以使用递归完成

// 层序遍历是广度优先，使用非递归实现，借助队列完成;
// 广度优先遍历的意义：1.更快的找到问题的解  2.常用于算法设计中——最短路径
