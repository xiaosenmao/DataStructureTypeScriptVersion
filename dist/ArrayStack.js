"use strict";
(self["webpackChunkdata_structure_typescript_version"] = self["webpackChunkdata_structure_typescript_version"] || []).push([["ArrayStack"],{

/***/ "./src/Stack/ArrayStack.ts":
/*!*********************************!*\
  !*** ./src/Stack/ArrayStack.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (e) {
        this.items.push(e);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.size = function () {
        return this.items.length;
    };
    Stack.prototype.clear = function () {
        this.items = [];
    };
    Stack.prototype.print = function () {
        console.log(this.items.toString());
    };
    return Stack;
}());
exports.Stack = Stack;
var s = new Stack();
s.push(8);
s.push(6);
s.push(5);
s.print();
/**
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var Solution = /** @class */ (function () {
    function Solution() {
        this.matchMap = {
            ')': '(',
            ']': '[',
            '}': '{'
        };
        this.leftChar = ['(', '[', '{'];
    }
    Solution.prototype.isValid = function (s) {
        var stack = new Stack();
        // 栈顶元素反映了在嵌套的层次关系中，最近的需要匹配的元素
        for (var i = 0; i < s.length; i++) {
            var temp = s[i];
            if (this.leftChar.includes(temp)) {
                stack.push(temp);
            }
            else {
                if (stack.isEmpty()) {
                    return false;
                }
                else {
                    var topChar = stack.pop();
                    if (this.matchMap[temp] !== topChar) {
                        return false;
                    }
                }
            }
        }
        return stack.isEmpty();
    };
    return Solution;
}());
var so = new Solution();
console.log('res: ->>>', so.isValid('(){}[]{()[]}'));
// 了演示如何用栈实现递归
// 阶乘
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
// 使用栈来模拟阶乘
function fact(n) {
    var stack = new Stack();
    while (n > 1) {
        stack.push(n);
        n--;
    }
    var result = 1;
    while (!stack.isEmpty()) {
        result = result * stack.pop();
    }
    return result;
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/Stack/ArrayStack.ts"));
/******/ }
]);
//# sourceMappingURL=ArrayStack.js.map