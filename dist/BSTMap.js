"use strict";
(self["webpackChunkdata_structure_typescript_version"] = self["webpackChunkdata_structure_typescript_version"] || []).push([["BSTMap"],{

/***/ "./src/Map/BSTMap.ts":
/*!***************************!*\
  !*** ./src/Map/BSTMap.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Node = /** @class */ (function () {
    function Node(key, value, left, right) {
        if (key === void 0) { key = null; }
        if (value === void 0) { value = null; }
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.key = key;
        this.value = value;
        this.left = left;
        this.right = right;
    }
    Node.prototype.toString = function () {
        var _a, _b;
        return "".concat((_a = this.key) === null || _a === void 0 ? void 0 : _a.toString(), " : ").concat((_b = this.value) === null || _b === void 0 ? void 0 : _b.toString());
    };
    return Node;
}());
var BSTMap = /** @class */ (function () {
    function BSTMap() {
        this.root = null;
        this.size = 0;
    }
    BSTMap.prototype.getSize = function () {
        return this.size;
    };
    BSTMap.prototype.isEmpty = function () {
        return this.size === 0;
    };
    // 向二分搜索树中添加新的元素(key, value)，递归算法
    BSTMap.prototype.add = function (key, value) {
        this.root = this._add(this.root, key, value);
    };
    // 向以node为根的二分搜索树中插入元素(key, value)，递归算法
    // 返回插入新节点后二分搜索树的根
    BSTMap.prototype._add = function (node, key, value) {
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
        }
        else {
            node.value = value;
        }
        return node;
    };
    // 向二分搜索树中添加新的元素(key, value)，非递归算法
    BSTMap.prototype.insert = function (key, value) {
        if (this.root === null) {
            this.root = new Node(key, value);
            this.size++;
            return;
        }
        var cur = this.root;
        var parent;
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
    };
    // 返回以node为根节点的二分搜索树中，key所在的节点
    BSTMap.prototype.getNode = function (node, key) {
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
    };
    // 是否包含 key的节点， 使用递归
    BSTMap.prototype.contains = function (key) {
        return this.getNode(this.root, key) !== null;
    };
    // 是否包含 key的节点， 使用非递归
    BSTMap.prototype.has = function (key) {
        var cur = this.root;
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
    };
    BSTMap.prototype.get = function (key) {
        var node = this.getNode(this.root, key);
        return node === null ? null : node.value;
    };
    BSTMap.prototype.set = function (key, newValue) {
        var node = this.getNode(this.root, key);
        if (node === null)
            throw new Error("".concat(key, " doesn't exists!"));
        node.value = newValue;
    };
    BSTMap.prototype.remove = function (key) {
        var node = this.getNode(this.root, key);
        if (node != null) {
            this.root = this._remove(this.root, key);
            return node.value;
        }
        return null;
    };
    // 删除以node为根的二分搜索树中键为key的节点，递归算法
    // 返回删除节点后的新的二分搜索树的根
    BSTMap.prototype._remove = function (node, key) {
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
                var rightNode = node.right;
                node.right = null;
                this.size--;
                return rightNode;
            }
            // 待删除节点右子树为空
            if (node.right === null) {
                var leftNode = node.left;
                node.left = null;
                this.size--;
                return leftNode;
            }
            // 待删除节点左右子树均不为空的情况
            // 找到比待删除节点大的最小节点, 即待删除节点右子树的最小节点
            // 用这个节点顶替待删除节点的位置
            var successor = this.minimum(node.right);
            successor.right = this.removeMin(node.right);
            successor.left = node.left;
            node.left = node.right = null;
            return successor;
        }
    };
    // 返回以node为根的二分搜索树的最小值所在的节点
    BSTMap.prototype.minimum = function (node) {
        if (node.left == null) {
            return node;
        }
        return this.minimum(node.left);
    };
    // 删除以node为根的二分搜索树中的最小节点
    // 返回删除节点后新的二分搜索树的根
    BSTMap.prototype.removeMin = function (node) {
        if (node.left === null) {
            var rightNode = node.right;
            node.right = null;
            this.size--;
            return rightNode;
        }
        node.left = this.removeMin(node.left);
        return node;
    };
    return BSTMap;
}());


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/Map/BSTMap.ts"));
/******/ }
]);
//# sourceMappingURL=BSTMap.js.map