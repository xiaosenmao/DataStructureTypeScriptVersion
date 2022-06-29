"use strict";
(self["webpackChunkdata_structure_typescript_version"] = self["webpackChunkdata_structure_typescript_version"] || []).push([["MaxHeap"],{

/***/ "./src/MaxHeap/EnhanceArray.ts":
/*!*************************************!*\
  !*** ./src/MaxHeap/EnhanceArray.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var EnhanceArray = /** @class */ (function (_super) {
    __extends(EnhanceArray, _super);
    function EnhanceArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnhanceArray.prototype.swap = function (i, j) {
        var l = this.length;
        if (i < 0 || i >= l || j < 0 || j >= l) {
            throw new Error("Index is illegal.");
        }
        var instance = this;
        var temp = instance[i];
        instance[i] = instance[j];
        instance[j] = temp;
    };
    return EnhanceArray;
}(Array));
exports["default"] = EnhanceArray;


/***/ }),

/***/ "./src/MaxHeap/MaxHeap.ts":
/*!********************************!*\
  !*** ./src/MaxHeap/MaxHeap.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MaxHeap = void 0;
var EnhanceArray_1 = __webpack_require__(/*! ./EnhanceArray */ "./src/MaxHeap/EnhanceArray.ts");
var MaxHeap = /** @class */ (function () {
    // 将任意数组整理成堆的形状 heapify
    function MaxHeap(arr) {
        var _this = this;
        if (arr) {
            this.data = new EnhanceArray_1.default();
            arr.forEach(function (e) { return _this.data.push(e); });
            for (var i = this.parent(this.data.length - 1); i >= 0; i--) {
                this.siftDown(i);
            }
        }
    }
    // 返回堆中元素的个数
    MaxHeap.prototype.size = function () {
        return this.data.length;
    };
    MaxHeap.prototype.isEmpty = function () {
        return this.data.length === 0;
    };
    // 返回完全二叉树的数组表示中，一个索引所表示的元素的父节点的索引
    MaxHeap.prototype.parent = function (index) {
        if (this.data.length === 0) {
            throw new Error('Can not findMax when heap is empty.');
        }
        return Math.floor((index - 1) / 2);
    };
    // 返回完全二叉树的数组表示中，一个索引所表示的元素的左孩子节点的索引
    MaxHeap.prototype.leftChild = function (index) {
        return 2 * index + 1;
    };
    // 返回完全二叉树的数组表示中，一个索引所表示的元素的右孩子节点的索引
    MaxHeap.prototype.rightChild = function (index) {
        return 2 * index + 2;
    };
    // 向堆中添加元素
    MaxHeap.prototype.add = function (e) {
        this.data.push(e);
        this.siftUp(this.data.length - 1);
    };
    MaxHeap.prototype.siftUp = function (k) {
        // 不是根节点， 并且父节点元素小于 此需要上浮的元素
        while (k > 0 && this.data[this.parent(k)].comparableTo(this.data[k]) < 0) {
            this.data.swap(k, this.parent(k));
            k = this.parent(k);
        }
    };
    // 查看堆中的最大元素
    MaxHeap.prototype.findMax = function () {
        if (this.data.length === 0) {
            throw new Error('Can not findMax when heap is empty.');
        }
        return this.data[0];
    };
    // 从堆中取出最大元素
    MaxHeap.prototype.extractMax = function () {
        var ret = this.findMax();
        this.data.swap(0, this.data.length - 1);
        this.data.pop();
        this.siftDown(0);
        return ret;
    };
    // 下沉
    MaxHeap.prototype.siftDown = function (k) {
        while (this.leftChild(k) < this.data.length) { // 索引为k的元素的节点有左孩子
            var j = this.leftChild(k);
            if (j + 1 < this.data.length && this.data[j + 1].comparableTo(this.data[k]) > 0) { // 有右孩子，并且有孩子的元素的的值大于左孩子
                j = this.rightChild(k);
            }
            // data[j] 是 leftChild 和 rightChild 中的较大值
            if (this.data[k].comparableTo(this.data[j]) >= 0) {
                break;
            }
            this.data.swap(k, j);
            k = j;
        }
    };
    return MaxHeap;
}());
exports.MaxHeap = MaxHeap;
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/MaxHeap/MaxHeap.ts"));
/******/ }
]);
//# sourceMappingURL=MaxHeap.js.map