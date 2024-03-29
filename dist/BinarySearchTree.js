"use strict";
(self["webpackChunkdata_structure_typescript_version"] = self["webpackChunkdata_structure_typescript_version"] || []).push([["BinarySearchTree"],{

/***/ "./src/BinarySearchTree/BST.ts":
/*!*************************************!*\
  !*** ./src/BinarySearchTree/BST.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BST = void 0;
var ArrayStack_1 = __webpack_require__(/*! ../Stack/ArrayStack */ "./src/Stack/ArrayStack.ts");
var Queue_1 = __webpack_require__(/*! ../Queue/Queue */ "./src/Queue/Queue.ts");
var Node = /** @class */ (function () {
    function Node(e) {
        this.e = e;
        this.left = null;
        this.right = null;
    }
    return Node;
}());
var BST = /** @class */ (function () {
    function BST() {
        this.root = null;
        this.size = 0;
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
    BST.prototype.getSize = function () {
        return this.size;
    };
    BST.prototype.isEmpty = function () {
        return this.size === 0;
    };
    // 添加元素e
    BST.prototype.add = function (e) {
        this.root = this._add(this.root, e);
    };
    // 向以node为根的二分搜索树中出插入元素e，使用递归。
    // 返回插入新节点的根
    BST.prototype._add = function (node, e) {
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
    };
    //  向二分搜索树中出插入元素e，使用循环。
    BST.prototype.insert = function (e) {
        if (this.root === null) {
            this.root = new Node(e);
            this.size++;
            return;
        }
        ;
        var current = this.root;
        var parent;
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
    };
    //  看二分搜索树中是否包含元素e
    BST.prototype.contains = function (e) {
        return this._contains(this.root, e);
    };
    //  看以node为根的二分搜索树中是否包含元素e, 递归算法
    BST.prototype._contains = function (node, e) {
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
    };
    //  看二分搜索树中是否包含元素e,使用循环
    BST.prototype.has = function (e) {
        var cur = this.root;
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
    };
    //  二分搜索树的前序遍历
    BST.prototype.preOrder = function () {
        this._preOrder(this.root);
    };
    //  前序遍历以node为根的二分搜索树，递归算法
    BST.prototype._preOrder = function (node) {
        if (node == null)
            return;
        // do stuff
        console.log(node.e);
        this._preOrder(node.left);
        this._preOrder(node.right);
    };
    // 二分搜索树的前序遍历,非递归
    BST.prototype.preOrderNR = function () {
        var stack = new ArrayStack_1.Stack();
        stack.push(this.root);
        while (!stack.isEmpty()) {
            // do stuff.
            var cur = stack.pop();
            console.log(cur.e);
            if (cur.right !== null) {
                stack.push(cur.right);
            }
            if (cur.left !== null) {
                stack.push(cur.left);
            }
        }
    };
    //  二分搜索树的中序遍历
    BST.prototype.inOrder = function () {
        this._inOrder(this.root);
    };
    //  中序遍历以node为根的二分搜索树，递归算法
    BST.prototype._inOrder = function (node) {
        if (node == null)
            return;
        this._inOrder(node.left);
        // do stuff
        console.log(node.e);
        this._inOrder(node.right);
    };
    //  二分搜索树的后序遍历
    BST.prototype.postOrder = function () {
        this._postOrder(this.root);
    };
    //  后序遍历以node为根的二分搜索树，递归算法
    BST.prototype._postOrder = function (node) {
        if (node == null)
            return;
        this._postOrder(node.left);
        this._postOrder(node.right);
        // do stuff
        console.log(node.e);
    };
    //  按层级遍历（广度优先）
    BST.prototype.levelOrder = function () {
        var q = new Queue_1.Queue();
        q.enQueue(this.root);
        while (!q.isEmpty()) {
            var cur = q.deQueue();
            // do stuff
            console.log(cur.e);
            if (cur.left !== null) {
                q.enQueue(cur.left);
            }
            if (!cur.right !== null) {
                q.enQueue(cur.right);
            }
        }
    };
    // 查找二分搜索树中的最小值, 使用递归
    BST.prototype.minimum = function () {
        if (this.size === 0) {
            throw new Error("BST is empty");
        }
        return this._minimum(this.root).e;
    };
    BST.prototype._minimum = function (node) {
        if (node.left === null) {
            return node;
        }
        return this._minimum(node.left);
    };
    // 查找二分搜索树中的最大值, 使用递归
    BST.prototype.maximum = function () {
        if (this.size === 0) {
            throw new Error("BST is empty");
        }
        return this._maximum(this.root).e;
    };
    BST.prototype._maximum = function (node) {
        if (node.right === null) {
            return node;
        }
        return this._maximum(node.right);
    };
    // 查找二分搜索树中的最小值, 使用非递归
    BST.prototype.findMin = function () {
        if (this.size === 0) {
            throw new Error("BST is empty");
        }
        var cur = this.root;
        while (cur.left !== null) {
            cur = cur.left;
        }
        return cur.e;
    };
    // 查找二分搜索树中的最大值, 使用非递归
    BST.prototype.findMax = function () {
        if (this.size === 0) {
            throw new Error("BST is empty");
        }
        var cur = this.root;
        while (cur.right !== null) {
            cur = cur.right;
        }
        return cur.e;
    };
    // 从二分搜索树中删除最小值所在的节点，返回最小值
    BST.prototype.removeMin = function () {
        var ret = this.minimum();
        this.root = this._removeMin(this.root);
        return ret;
    };
    // 删除以node为根的二分搜索树中的最小节点
    // 返回删除节点后新的二分搜索树的根
    BST.prototype._removeMin = function (node) {
        if (node.left === null) {
            var rightNode = node.right;
            node.right = null;
            this.size--;
            return rightNode;
        }
        node.left = this._removeMin(node.left);
        return node;
    };
    // 从二分搜索树中删除最大值所在的节点，返回最大值
    BST.prototype.removeMax = function () {
        var ret = this.maximum();
        this.root = this._removeMax(this.root);
        return ret;
    };
    BST.prototype._removeMax = function (node) {
        if (node.right === null) {
            var leftNode = node.left;
            node.left = null;
            this.size--;
            return leftNode;
        }
        node.right = this._removeMax(node.right);
        return node;
    };
    // 从二分搜索树中删除元素为e的节点
    BST.prototype.remove = function (e) {
        this.root = this._remove(this.root, e);
    };
    // 删除以node为根节点的二分搜索树中值为e的节点，递归算法
    // 返回删除节点后的二分搜索树的根
    BST.prototype._remove = function (node, e) {
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
                var rightNode = node.right;
                node.right = null;
                this.size--;
                return rightNode;
            }
            // 待删除的节点右子树为空
            if (node.right === null) {
                var leftNode = node.left;
                node.left = null;
                this.size--;
                return leftNode;
            }
            // 待删除的节点左，右子树均不为空
            // 找到比待删除节点大的所有节点中最小的节点，即 待删除节点右子树的最小节点(待删除节点的后继)
            // 使用这个节点顶替待删除节点的位置
            var successor = this._minimum(node.right);
            successor.right = this._removeMin(node.right);
            successor.left = node.left;
            node.left = node.right = null;
            return successor;
        }
    };
    return BST;
}());
exports.BST = BST;
// 前序，中序，后序 都是深度优先， 可以使用递归完成
// 层序遍历是广度优先，使用非递归实现，借助队列完成;
// 广度优先遍历的意义：1.更快的找到问题的解  2.常用于算法设计中——最短路径


/***/ }),

/***/ "./src/Queue/Queue.ts":
/*!****************************!*\
  !*** ./src/Queue/Queue.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.queue = new Array();
    }
    Queue.prototype.getSize = function () {
        return this.queue.length;
    };
    Queue.prototype.isEmpty = function () {
        return this.queue.length === 0;
    };
    Queue.prototype.enQueue = function (e) {
        this.queue.push(e);
    };
    Queue.prototype.deQueue = function () {
        return this.queue.shift();
    };
    Queue.prototype.getFront = function () {
        return this.queue[0];
    };
    Queue.prototype.clear = function () {
        this.queue = [];
    };
    return Queue;
}());
exports.Queue = Queue;
var q1 = new Queue();
q1.enQueue(0);
q1.enQueue(1);
q1.enQueue(2);
console.log(q1);
q1.deQueue();
console.log(q1);


/***/ }),

/***/ "./src/Stack/ArrayStack.ts":
/*!*********************************!*\
  !*** ./src/Stack/ArrayStack.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (e) {
        this.items.push(e);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.size = function () {
        return this.items.length;
    };
    Stack.prototype.clear = function () {
        this.items = [];
    };
    Stack.prototype.print = function () {
        console.log(this.items.toString());
    };
    return Stack;
}());
exports.Stack = Stack;
var s = new Stack();
s.push(8);
s.push(6);
s.push(5);
s.print();
/**
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var Solution = /** @class */ (function () {
    function Solution() {
        this.matchMap = {
            ')': '(',
            ']': '[',
            '}': '{'
        };
        this.leftChar = ['(', '[', '{'];
    }
    Solution.prototype.isValid = function (s) {
        var stack = new Stack();
        // 栈顶元素反映了在嵌套的层次关系中，最近的需要匹配的元素
        for (var i = 0; i < s.length; i++) {
            var temp = s[i];
            if (this.leftChar.includes(temp)) {
                stack.push(temp);
            }
            else {
                if (stack.isEmpty()) {
                    return false;
                }
                else {
                    var topChar = stack.pop();
                    if (this.matchMap[temp] !== topChar) {
                        return false;
                    }
                }
            }
        }
        return stack.isEmpty();
    };
    return Solution;
}());
var so = new Solution();
console.log('res: ->>>', so.isValid('(){}[]{()[]}'));
// 了演示如何用栈实现递归
// 阶乘
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
// 使用栈来模拟阶乘
function fact(n) {
    var stack = new Stack();
    while (n > 1) {
        stack.push(n);
        n--;
    }
    var result = 1;
    while (!stack.isEmpty()) {
        result = result * stack.pop();
    }
    return result;
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/BinarySearchTree/BST.ts"));
/******/ }
]);
//# sourceMappingURL=BinarySearchTree.js.map