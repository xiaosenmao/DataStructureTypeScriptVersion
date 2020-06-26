(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["LinkedListEnhance"],{

/***/ "./src/LinkedList/DataNode.ts":
/*!************************************!*\
  !*** ./src/LinkedList/DataNode.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DataNode = /** @class */ (function () {
    function DataNode(data, next) {
        if (data === void 0) { data = null; }
        if (next === void 0) { next = null; }
        this.data = data;
        this.next = next;
    }
    return DataNode;
}());
exports.default = DataNode;


/***/ }),

/***/ "./src/LinkedList/LinkedListEnhance.ts":
/*!*********************************************!*\
  !*** ./src/LinkedList/LinkedListEnhance.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
            throw new Error('Insert failed. Illegal index.');
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


/***/ })

},[["./src/LinkedList/LinkedListEnhance.ts","runtime"]]]);
//# sourceMappingURL=LinkedListEnhance.js.map