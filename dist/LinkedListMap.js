"use strict";
(self["webpackChunkdata_structure_typescript_version"] = self["webpackChunkdata_structure_typescript_version"] || []).push([["LinkedListMap"],{

/***/ "./src/Map/LinkedListMap.ts":
/*!**********************************!*\
  !*** ./src/Map/LinkedListMap.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Node = /** @class */ (function () {
    function Node(key, value, next) {
        if (key === void 0) { key = null; }
        if (value === void 0) { value = null; }
        if (next === void 0) { next = null; }
        this.key = key;
        this.value = value;
        this.next = next;
    }
    Node.prototype.toString = function () {
        var _a, _b;
        return "".concat((_a = this.key) === null || _a === void 0 ? void 0 : _a.toString(), " : ").concat((_b = this.value) === null || _b === void 0 ? void 0 : _b.toString());
    };
    return Node;
}());
var LinkedListMap = /** @class */ (function () {
    function LinkedListMap() {
        this.dummyHead = new Node();
        this.size = 0;
    }
    LinkedListMap.prototype.getSize = function () {
        return this.size;
    };
    LinkedListMap.prototype.isEmpty = function () {
        return this.size == 0;
    };
    LinkedListMap.prototype.getNode = function (key) {
        var cur = this.dummyHead.next;
        while (cur !== null) {
            if (Object.is(cur.key, key)) {
                return cur;
            }
            else {
                cur = cur.next;
            }
        }
        return null;
    };
    LinkedListMap.prototype.contains = function (key) {
        var node = this.getNode(key);
        return node !== null;
    };
    LinkedListMap.prototype.get = function (key) {
        var node = this.getNode(key);
        if (node !== null) {
            return node.value;
        }
        return null;
    };
    LinkedListMap.prototype.add = function (key, value) {
        var node = this.getNode(key);
        if (node === null) {
            this.dummyHead.next = new Node(key, value, this.dummyHead.next);
            this.size++;
        }
        else {
            node.value = value;
        }
    };
    LinkedListMap.prototype.set = function (key, value) {
        var node = this.getNode(key);
        if (node === null) {
            throw new Error("".concat(key, " doesn't exist!"));
        }
        else {
            node.value = value;
        }
    };
    LinkedListMap.prototype.remove = function (key) {
        var prev = this.dummyHead;
        while (prev.next !== null) {
            if (Object.is(prev.next.key, key)) {
                break;
            }
            else {
                prev = prev.next;
            }
        }
        if (prev !== null) {
            var delNode = prev.next;
            prev.next = delNode.next;
            this.size--;
            return delNode.value;
        }
        return null;
    };
    return LinkedListMap;
}());


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/Map/LinkedListMap.ts"));
/******/ }
]);
//# sourceMappingURL=LinkedListMap.js.map