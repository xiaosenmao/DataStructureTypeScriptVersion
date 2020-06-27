import Comparable from './Comparable';
import { Stack } from '../Stack/Stack';

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
    this.root = this.relativeAdd(this.root, e);
  }

  // 向以node为根的二分搜索树中出插入元素e，使用递归。
  // 返回插入新节点的根
  private relativeAdd(node: Node<E>, e: E): Node<E> {
    if (node === null) {
      this.size++;
      return new Node(e);
    }

    if (e.comparableTo(node.left.e) < 0) {
      node.left = this.relativeAdd(node.left, e);
    }
    else if (e.comparableTo(node.right.e) > 0) {
      node.right = this.relativeAdd(node.right, e);
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
    return this.relativeContains(this.root, e);
  }

  //  看以node为根的二分搜索树中是否包含元素e, 递归算法
  private relativeContains(node: Node<E>, e: E): boolean {
    if (node === null) {
      return false;
    }

    if (e.comparableTo(node.e) === 0) {
      return true;
    }
    else if (e.comparableTo(node.e) < 0) {
      return this.relativeContains(node.left, e);
    }
    else {
      return this.relativeContains(node.right, e);
    }
  }

  //  二分搜索树的前序遍历
  preOrder(): void {
    this.relativePreOrder(this.root);
  }

  //  前序遍历以node为根的二分搜索树，递归算法
  private relativePreOrder(node: Node<E>): void {
    if (node == null) return;

    // do stuff
    console.log(node.e);

    this.relativePreOrder(node.left);
    this.relativePreOrder(node.right);
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
    this.relativeInOrder(this.root);
  }

  //  中序遍历以node为根的二分搜索树，递归算法
  private relativeInOrder(node: Node<E>): void {
    if (node == null) return;

    this.relativeInOrder(node.left);
    // do stuff
    console.log(node.e);
    this.relativeInOrder(node.right);
  }

  //  二分搜索树的后序遍历
  postOrder(): void {
    this.relativePostOrder(this.root);
  }

  //  后序遍历以node为根的二分搜索树，递归算法
  private relativePostOrder(node: Node<E>): void {
    if (node == null) return;

    this.relativePostOrder(node.left);
    this.relativePostOrder(node.right);
    // do stuff
    console.log(node.e);
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
