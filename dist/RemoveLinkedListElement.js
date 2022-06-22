(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["RemoveLinkedListElement"],{

/***/ "./src/LinkedList/RemoveLinkedListElement.ts":
/*!***************************************************!*\
  !*** ./src/LinkedList/RemoveLinkedListElement.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://leetcode.cn/problems/remove-linked-list-elements/
// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
// 输入：head = [1,2,6,3,4,5,6], val = 6
// 输出：[1,2,3,4,5]
// Definition for singly-linked list.
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function removeElements1(head, val) {
    // remove element at the front of linked list
    while (head !== null && head.val === val) {
        var delNode = head;
        head = head.next;
        delNode = null;
    }
    if (head === null)
        return null;
    var prev = head;
    while (prev.next !== null) {
        if (prev.next.val === val) {
            var delNode = prev.next;
            prev.next = delNode.next;
            delNode.next = null;
        }
        else {
            prev = prev.next;
        }
    }
    return head;
}
;
function removeElements2(head, val) {
    // 创建虚拟头节点，避免考虑head节点为空
    var dummyHead = new ListNode(-1, head);
    var prev = dummyHead;
    while (prev.next !== null) {
        if (prev.next.val === val) {
            prev.next = prev.next.next;
        }
        else {
            prev = prev.next;
        }
    }
    return dummyHead.next;
}
function removeElements3(head, val) {
    if (head === null) {
        return null;
    }
    var resListNode = removeElements3(head.next, val);
    if (head.val === val) {
        return resListNode;
    }
    else {
        head.next = resListNode;
        return head;
    }
}


/***/ })

},[["./src/LinkedList/RemoveLinkedListElement.ts","runtime"]]]);
//# sourceMappingURL=RemoveLinkedListElement.js.map