(self["webpackChunkdata_structure_typescript_version"] = self["webpackChunkdata_structure_typescript_version"] || []).push([["MyArray"],{

/***/ "./src/MyArray/MyArray.ts":
/*!********************************!*\
  !*** ./src/MyArray/MyArray.ts ***!
  \********************************/
/***/ (() => {

var MyArray = /** @class */ (function () {
    function MyArray(capacity) {
        if (capacity === void 0) { capacity = 10; }
        this.size = 0;
        this.data = {
            length: capacity
        };
        for (var i = 0; i < capacity; i++) {
            this.data[i] = null;
        }
    }
    MyArray.prototype.getSize = function () {
        return this.size;
    };
    MyArray.prototype.getCapacity = function () {
        return this.data.length;
    };
    MyArray.prototype.isEmpty = function () {
        return this.size === 0;
    };
    // 末尾添加元素
    MyArray.prototype.addLast = function (e) {
        this.add(this.size, e);
    };
    // 头部添加元素
    MyArray.prototype.addFirst = function (e) {
        this.add(0, e);
    };
    // 向第index位置添加元素
    MyArray.prototype.add = function (index, e) {
        if (index < 0 || index > this.size) {
            throw new Error('Add faild. Reauire index >= 0 and index <= size.');
        }
        if (this.size === this.data.length) {
            this.resize(2 * this.data.length); // 扩容
        }
        for (var i = this.size - 1; i >= index; i--) {
            this.data[i + 1] = this.data[i];
        }
        this.data[index] = e;
        this.size++;
    };
    MyArray.prototype.get = function (index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Get faild. Index is illegal.');
        }
        return this.data[index];
    };
    // 修改index索引位置的元素为e
    MyArray.prototype.set = function (index, e) {
        if (index < 0 || index >= this.size) {
            throw new Error('Set faild. Index is illegal.');
        }
        this.data[index] = e;
    };
    MyArray.prototype.contains = function (e) {
        for (var i = 0; i < this.size; i++) {
            if (Object.is(e, this.data[i])) {
                return true;
            }
        }
        return false;
    };
    // 查找第一个元素e，返回其索引，如果不存在则返回-1
    MyArray.prototype.find = function (e) {
        for (var i = 0; i < this.size; i++) {
            if (Object.is(e, this.data[i])) {
                return i;
            }
        }
        return -1;
    };
    // 删除index位置的元素，返回被删除的元素
    MyArray.prototype.remove = function (index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Remove faild. Reauire index >= 0 and index <= size.');
        }
        var ret = this.data[index];
        for (var i = index + 1; i < this.size; i++) {
            this.data[i - 1] = this.data[i];
        }
        this.data[this.size - 1] = null; // loitering objects
        this.size--;
        // 如果当元素个数为容量的1/2时就将容量减半。在一些情况下会引起复杂度震荡。比如：
        // 当数组尚未满员时，使用addLast增加一个元素，时间复杂度是O(1)
        // 使用addLast增加一个元素，触发resize扩容O(n)，然后使用removeLast删除元素，触发resize缩容O(n)
        // 解决方案：Lazy - 当元素个数为容量的1/4时才将容量减半
        if (this.size === this.data.length / 4 && this.data.length / 2 !== 0) {
            this.resize(this.data.length / 2); // 缩容
        }
        return ret;
    };
    MyArray.prototype.removeFirst = function () {
        return this.remove(0);
    };
    MyArray.prototype.removeLast = function () {
        return this.remove(this.size - 1);
    };
    // 从数组中删除元素e
    MyArray.prototype.removeElement = function (e) {
        var index = this.find(e);
        if (index !== -1) {
            this.remove(index);
        }
    };
    // 改变容量
    MyArray.prototype.resize = function (newCapacity) {
        var newData = { length: newCapacity };
        for (var i = 0; i < newCapacity; i++) {
            if (i < this.size) {
                newData[i] = this.data[i];
            }
            else {
                newData[i] = null;
            }
        }
        this.data = newData;
    };
    return MyArray;
}());
/*
  简单分析动态数组的时间复杂度
    1. 增：O(n)
    2. 删：O(n)
    对于 增 和 删，如果只是对最后一个元素操作的话依然是 O(1); 但是考虑resize的情况下是O(n)
    3. 改：已知索引 O(1);  未知索引 O(n)
    4. 查：已知索引 O(1);  未知索引 O(n)
        在索引有语义的情况下使用数组可以轻松的检索数据，性能优势明显
*/
function test() {
    var arr = new MyArray();
    for (var i = 0; i < 10; i++) {
        arr.addLast(i);
    }
    console.log('arr1: ', arr, '\n');
    arr.add(1, 100);
    console.log('arr2: ', arr, '\n');
    arr.addFirst(-1);
    console.log('arr3: ', arr, '\n');
    arr.remove(2);
    console.log('arr4: ', arr, '\n');
    arr.removeElement(4);
    console.log('arr5: ', arr, '\n');
    arr.removeFirst();
    console.log('arr6: ', arr, '\n');
}
test();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/MyArray/MyArray.ts"));
/******/ }
]);
//# sourceMappingURL=MyArray.js.map