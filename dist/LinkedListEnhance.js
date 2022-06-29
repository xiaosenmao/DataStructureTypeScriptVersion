"use strict";
(self["webpackChunkdata_structure_typescript_version"] = self["webpackChunkdata_structure_typescript_version"] || []).push([["LinkedListEnhance"],{

/***/ "./src/LinkedList/DataNode.ts":
/*!************************************!*\
  !*** ./src/LinkedList/DataNode.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var DataNode = /** @class */ (function () {
    function DataNode(data, next) {
        if (data === void 0) { data = null; }
        if (next === void 0) { next = null; }
        this.data = data;
        this.next = next;
    }
    return DataNode;
}());
exports["default"] = DataNode;


/***/ }),

/***/ "./src/LinkedList/LinkedListEnhance.ts":
/*!*********************************************!*\
  !*** ./src/LinkedList/LinkedListEnhance.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LinkedListEnhance = void 0;
var DataNode_1 = __webpack_require__(/*! ./DataNode */ "./src/LinkedList/DataNode.ts");
var LinkedListEnhance = /** @class */ (function () {
    function LinkedListEnhance() {
        this.dummyHead = new DataNode_1.default(null, null);
        this.size = 0;
    }
    LinkedListEnhance.prototype.getSize = function () {
        return this.size;
    };
    LinkedListEnhance.prototype.isEmpty = function () {
        return this.size === 0;
    };
    LinkedListEnhance.prototype.get = function (index) {
        if (index < 0 || index > this.size) {
            throw new Error('Get failed. Illegal index.');
        }
        var prev = this.dummyHead;
        for (var i = 0; i < index; i++) {
            prev = prev.next;
        }
        return prev.data;
    };
    LinkedListEnhance.prototype.getFirst = function () {
        return this.get(0);
    };
    LinkedListEnhance.prototype.getLast = function () {
        return this.get(this.size);
    };
    LinkedListEnhance.prototype.insert = function (index, e) {
        if (index < 0 || index > this.size) {
            throw new Error('Insert failed. Illegal index.');
        }
        var prev = this.dummyHead;
        for (var i = 0; i < index; i++) {
            prev = prev.next;
        }
        prev.next = new DataNode_1.default(e, prev.next);
        this.size++;
    };
    LinkedListEnhance.prototype.addFirst = function (e) {
        this.insert(0, e);
    };
    LinkedListEnhance.prototype.addLast = function (e) {
        this.insert(this.size, e);
    };
    LinkedListEnhance.prototype.remove = function (index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Remove failed. Illegal index.');
        }
        var prev = this.dummyHead;
        for (var i = 0; i < index; i++) {
            prev = prev.next;
        }
        var delNode = prev.next;
        prev.next = delNode.next;
        delNode.next = null;
        this.size--;
        return delNode.data;
    };
    LinkedListEnhance.prototype.removeFirst = function () {
        return this.remove(0);
    };
    LinkedListEnhance.prototype.removeLast = function () {
        return this.remove(this.size);
    };
    LinkedListEnhance.prototype.removeElement = function (e) {
        var prev = this.dummyHead;
        while (!!prev.next) {
            if (Object.is(prev.data, e)) {
                break;
            }
            else {
                prev = prev.next;
            }
        }
        if (!!prev.next) {
            var delNode = prev.next;
            prev.next = delNode.next;
            delNode.next = null;
            this.size--;
        }
    };
    LinkedListEnhance.prototype.contains = function (e) {
        var cur = this.dummyHead;
        while (!!cur) {
            if (Object.is(cur.data, e)) {
                return true;
            }
            else {
                cur = cur.next;
            }
        }
        return false;
    };
    return LinkedListEnhance;
}());
exports.LinkedListEnhance = LinkedListEnhance;


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/LinkedList/LinkedListEnhance.ts"));
/******/ }
]);
//# sourceMappingURL=LinkedListEnhance.js.map