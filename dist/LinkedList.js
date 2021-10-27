(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["LinkedList"],{

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

/***/ "./src/LinkedList/LinkedList.ts":
/*!**************************************!*\
  !*** ./src/LinkedList/LinkedList.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DataNode_1 = __webpack_require__(/*! ./DataNode */ "./src/LinkedList/DataNode.ts");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.size = 0;
    }
    LinkedList.prototype.getSize = function () {
        return this.size;
    };
    LinkedList.prototype.isEmpty = function () {
        return this.size === 0;
    };
    // O(1)
    LinkedList.prototype.addFirst = function (e) {
        var prev = this.head;
        if (!prev) {
            this.head = new DataNode_1.default(e);
            this.size++;
        }
        else {
            // const dataNode = new DataNode(e);
            // dataNode.next = prev;
            // this.head = dataNode;
            this.head = new DataNode_1.default(e, prev);
            this.size++;
        }
    };
    // O(n)
    LinkedList.prototype.addLast = function (e) {
        var current = this.head;
        if (!current) {
            this.head = new DataNode_1.default(e);
            this.size++;
        }
        else {
            while (current.next) {
                current = current.next;
            }
            current.next = new DataNode_1.default(e);
            this.size++;
        }
    };
    // O(n/2) ~= O(n)
    LinkedList.prototype.insert = function (index, e) {
        if (index < 0 || index > this.size) {
            throw new Error('Insert failed. Illegal index!');
        }
        var prev = this.head;
        if (!prev) {
            this.head = new DataNode_1.default(e);
            this.size++;
        }
        else {
            var i = 0;
            while (i < index) {
                prev = prev.next;
                i++;
            }
            // const dataNode = new DataNode(e);
            // dataNode.next = prev.next;
            // prev.next = dataNode;
            prev.next = new DataNode_1.default(e, prev.next);
            this.size++;
        }
    };
    // O(n)
    LinkedList.prototype.remove = function (e) {
        if (!this.head) {
            return;
        }
        if (Object.is(this.head.data, e)) {
            this.head = null;
            this.size--;
            return;
        }
        var current = this.head;
        var next = current.next;
        while (next) {
            if (Object.is(next.data, e)) {
                // remove next
                current.next = next.next;
                next.next = null;
                this.size--;
                break;
            }
            else {
                current = current.next;
                next = next.next;
            }
        }
    };
    LinkedList.prototype.toString = function () {
        return JSON.stringify(this);
    };
    return LinkedList;
}());
var l = new LinkedList();
console.log('l: ', l);
l.addFirst('a');
l.addLast('b');
l.addLast('c');
l.addLast('d');
console.log('l: ', l, 'l.getSize(): ', l.getSize());
l.insert(1, 'e');
console.log('l: ', l, 'l.getSize(): ', l.getSize());
l.remove('e');
console.log('l: ', l, 'l.getSize(): ', l.getSize());


/***/ })

},[["./src/LinkedList/LinkedList.ts","runtime"]]]);
//# sourceMappingURL=LinkedList.js.map