import Comparable from './Comparable';
import { Stack } from '../Stack/ArrayStack';
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

export class BST<E extends Comparable<E>> {
  private root: Node<E> = null;
  private size: number = 0;

  getSize(): number {
    return this.size;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  // 添加元素e
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

  //  看二分搜索树中是否包含元素e,使用循环
  has(e: E): boolean {
    let cur = this.root;
    while (cur !== null) {
      if (e.comparableTo(cur.e) === 0) {
        return true;
      }
      else if (e.comparableTo(cur.e) < 0) {
        cur = cur.left;
      }
      else if (e.comparableTo(cur.e) > 0) {
        cur = cur.right;
      }
    }

    return false;
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

  // 二分搜索树的中序遍历,非递归
  inOrderNR(): void {
    let stack: Stack<Node<E>> = new Stack();
    let cur = this.root;

    while (cur !== null || !stack.isEmpty()) {
      while (cur !== null) {
        stack.push(cur);
        cur = cur.left;
      }

      if (!stack.isEmpty()) {
        cur = stack.pop();
        // do stuff.
        console.log(cur.e);
        cur = cur.right;
      }
    }
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

  // 二分搜索树的后序遍历,非递归
  postOrderNR(): void {
    const stack: Stack<Node<E>> = new Stack();
    let cur = this.root;
    let lastVisitedNode: Node<E> | null = null;

    while (cur !== null || !stack.isEmpty()) {
      // / 遍历到左子树叶子节点
      if (cur !== null) {
        stack.push(cur);
        cur = cur.left;
      } else {
        const peekTopNode: Node<E> = stack.peek()
        if (peekTopNode.right && peekTopNode.right !== lastVisitedNode) {
          // 如果右子树存在并且还没有被访问过，就遍历右子树
          cur = peekTopNode.right
        } else {
          // 如果没有右子树或者右子树被访问过，就输出本节点
          console.log(peekTopNode.e)
          lastVisitedNode = peekTopNode
          stack.pop()
        }
      }
    }
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

  // 从二分搜索树中删除最小值所在的节点，返回最小值
  removeMin(): E {
    const ret = this.minimum();
    this.root = this._removeMin(this.root);
    return ret;
  }

  // 删除以node为根的二分搜索树中的最小节点
  // 返回删除节点后新的二分搜索树的根
  private _removeMin(node: Node<E>): Node<E> {
    if (node.left === null) {
      const rightNode = node.right;
      node.right = null;
      this.size--;
      return rightNode;
    }

    node.left = this._removeMin(node.left);
    return node;
  }

  // 从二分搜索树中删除最大值所在的节点，返回最大值
  removeMax(): E {
    const ret = this.maximum();
    this.root = this._removeMax(this.root);
    return ret;
  }

  private _removeMax(node: Node<E>): Node<E> {
    if (node.right === null) {
      const leftNode = node.left;
      node.left = null;
      this.size--;
      return leftNode;
    }

    node.right = this._removeMax(node.right);
    return node;
  }

  // 从二分搜索树中删除元素为e的节点
  remove(e: E): void {
    this.root = this._remove(this.root, e);
  }

  // 删除以node为根节点的二分搜索树中值为e的节点，递归算法
  // 返回删除节点后的二分搜索树的根
  private _remove(node: Node<E>, e: E): Node<E> {
    if (node === null) {
      return null;
    }

    if (e.comparableTo(node.e) < 0) {
      node.left = this._remove(node.left, e);
      return node;
    }
    else if (e.comparableTo(node.e) > 0) {
      node.right = this._remove(node.right, e);
      return node;
    }
    else { // e === node.e
      // 待删除的节点左子树为空
      if (node.left === null) {
        const rightNode = node.right;
        node.right = null;
        this.size--;
        return rightNode;
      }

      // 待删除的节点右子树为空
      if (node.right === null) {
        const leftNode = node.left;
        node.left = null;
        this.size--;
        return leftNode;
      }

      // 待删除的节点左，右子树均不为空
      // 找到比待删除节点大的所有节点中最小的节点，即 待删除节点右子树的最小节点(待删除节点的后继)
      // 使用这个节点顶替待删除节点的位置
      const successor = this._minimum(node.right);
      successor.right = this._removeMin(node.right);
      successor.left = node.left;

      node.left = node.right = null;
      return successor;
    }
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
