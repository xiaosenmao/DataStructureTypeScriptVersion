"use strict";
(self["webpackChunkdata_structure_typescript_version"] = self["webpackChunkdata_structure_typescript_version"] || []).push([["LoopQueue"],{

/***/ "./src/Queue/LoopQueue.ts":
/*!********************************!*\
  !*** ./src/Queue/LoopQueue.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoopQueue = void 0;
//              front             tail
// [null,  null,  2,  3,  4,  5,  null,  null,  null,  null,  null]
//
// 如果(tail + 1) % capacity == front 那么表示队列已经满员(实际此时会浪费数组中的一个空间)
var LoopQueue = /** @class */ (function () {
    function LoopQueue(capacity) {
        if (capacity === void 0) { capacity = 10; }
        this.queue = new Array(capacity + 1);
        this.front = 0;
        this.tail = 0;
        this.size = 0;
    }
    LoopQueue.prototype.getCapacity = function () {
        return this.queue.length - 1;
    };
    LoopQueue.prototype.isEmpty = function () {
        return this.front === this.tail;
    };
    LoopQueue.prototype.getSize = function () {
        return this.size;
    };
    LoopQueue.prototype.enQueue = function (e) {
        if ((this.tail + 1) % this.queue.length === this.front) { // 队列满员
            this.resize(this.getCapacity() * 2);
        }
        this.queue[this.tail] = e;
        this.tail = (this.tail + 1) % this.queue.length;
    };
    LoopQueue.prototype.deQueue = function () {
        if (this.isEmpty()) {
            throw new Error('Cannot dequeue from an empty queue.');
        }
        var ret = this.queue[this.front];
        this.queue[this.front] = null;
        this.front = (this.front + 1) % this.queue.length;
        this.size--;
        if (this.size === this.getCapacity() / 4 && this.getCapacity() / 2 !== 0) {
            this.resize(this.getCapacity() / 2);
        }
        return ret;
    };
    LoopQueue.prototype.getFront = function () {
        if (this.isEmpty()) {
            throw new Error('Queue is empty.');
        }
        return this.queue[this.front];
    };
    LoopQueue.prototype.resize = function (newCapacity) {
        var newQueue = new Array(newCapacity + 1);
        for (var i = 0; i < this.size; i++) {
            newQueue[i] = this.queue[(i + this.front) % this.queue.length];
        }
        this.queue = newQueue;
        this.front = 0;
        this.tail = this.size;
    };
    return LoopQueue;
}());
exports.LoopQueue = LoopQueue;


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/Queue/LoopQueue.ts"));
/******/ }
]);
//# sourceMappingURL=LoopQueue.js.map