
export class Stack<T> {
	private items: Array<T> = [];

	push(e: T): void  {
		this.items.push(e);
	}

	pop(): T {
		return this.items.pop();
	}

	peek(): T {
		return this.items[this.items.length - 1];
	}

	isEmpty(): boolean {
		return this.items.length === 0;
	}

	size(): number {
		return this.items.length
	}

	clear(): void {
		this.items = [];
	}

	print(): void {
		console.log(this.items.toString());
	}
}

const s = new Stack<number>();
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

 class Solution {
	private matchMap = {
			')': '(',
			']': '[',
			'}': '{'
	}

	private leftChar = ['(', '[', '{'];

	public isValid(s: string): boolean {
		const stack = new Stack<string>();
		for (let i = 0; i < s.length; i++) {
			const temp = s[i];
			if (this.leftChar.includes(temp)) {
				stack.push(temp);
			} else {
				if (stack.isEmpty()) {
					return false;
				} else {
					const topChar = stack.pop();
					if (this.matchMap[temp] !== topChar) {
						return false;
					}
				}
			}
		}

		return stack.isEmpty();
	}
}

const so = new Solution();
console.log('res: ->>>',  so.isValid('(){}[]{()[]}'));

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
	const stack = new Stack<number>();

	while (n > 1) {
		stack.push(n);
		n--;
	}

	let result = 1;
	while (!stack.isEmpty()) {
		result = result * stack.pop();
	}

	return result;
}
