(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["LinkedListSet"],{

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
exports.LinkedListEnhance = LinkedListEnhance;


/***/ }),

/***/ "./src/Set/LinkedListSet.ts":
/*!**********************************!*\
  !*** ./src/Set/LinkedListSet.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LinkedListEnhance_1 = __webpack_require__(/*! ../LinkedList/LinkedListEnhance */ "./src/LinkedList/LinkedListEnhance.ts");
var LinkedListSet = /** @class */ (function () {
    function LinkedListSet() {
        this.list = new LinkedListEnhance_1.LinkedListEnhance();
    }
    LinkedListSet.prototype.getSize = function () {
        return this.list.getSize();
    };
    LinkedListSet.prototype.isEmpty = function () {
        return this.list.isEmpty();
    };
    LinkedListSet.prototype.add = function (e) {
        if (!this.list.contains(e)) {
            this.list.addFirst(e);
        }
    };
    LinkedListSet.prototype.remove = function (e) {
        this.list.removeElement(e);
    };
    LinkedListSet.prototype.contains = function (e) {
        return this.list.contains(e);
    };
    return LinkedListSet;
}());


/***/ })

},[["./src/Set/LinkedListSet.ts","runtime"]]]);
//# sourceMappingURL=LinkedListSet.js.map