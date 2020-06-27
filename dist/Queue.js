(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Queue"],{

/***/ "./src/Queue/Queue.ts":
/*!****************************!*\
  !*** ./src/Queue/Queue.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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


/***/ })

},[["./src/Queue/Queue.ts","runtime"]]]);
//# sourceMappingURL=Queue.js.map