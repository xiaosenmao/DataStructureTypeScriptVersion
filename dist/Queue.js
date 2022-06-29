"use strict";
(self["webpackChunkdata_structure_typescript_version"] = self["webpackChunkdata_structure_typescript_version"] || []).push([["Queue"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/Queue/Queue.ts"));
/******/ }
]);
//# sourceMappingURL=Queue.js.map