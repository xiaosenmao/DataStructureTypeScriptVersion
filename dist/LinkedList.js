(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["LinkedList"],{

/***/ "./src/LinkedList/LinkedList.ts":
/*!**************************************!*\
  !*** ./src/LinkedList/LinkedList.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var DataNode = /** @class */ (function () {
    function DataNode(data, next) {
        if (data === void 0) { data = null; }
        if (next === void 0) { next = null; }
        this.data = data;
        this.next = next;
    }
    return DataNode;
}());
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
            this.head = new DataNode(e);
            this.size++;
        }
        else {
            // const dataNode = new DataNode(e);
            // dataNode.next = prev;
            // this.head = dataNode;
            this.head = new DataNode(e, prev);
            this.size++;
        }
    };
    // O(n)
    LinkedList.prototype.addLast = function (e) {
        var current = this.head;
        if (!current) {
            this.head = new DataNode(e);
            this.size++;
        }
        else {
            while (current.next) {
                current = current.next;
            }
            current.next = new DataNode(e);
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
            this.head = new DataNode(e);
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
            prev.next = new DataNode(e, prev.next);
            this.size++;
        }
    };
    // O(n)
    LinkedList.prototype.remove = function (e) {
        if (!this.head) {
            return;
        }
        if (this.head.data === e) {
            this.head = null;
            this.size--;
            return;
        }
        var current = this.head;
        var next = current.next;
        while (next) {
            if (next.data === e) {
                // remove next
                current.next = next.next;
                this.size--;
            }
            else {
                current = next.next;
                next = current.next;
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