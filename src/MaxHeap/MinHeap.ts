// 4, 5, 8, 2 []

// // let a = a.sort((a,b)=>b-a)

// 1111 k 22222

// // a[k-1]

// 1000万个数字，乱序，
// 8 5 4 2

// 找出第k大的数字
// k=3

// 找出这些数字里前k名大数字，后面的小数字就不要了

//    4
//   5 8

// 4, 5, 8, 2

var KthLargest = function (k, nums) {
  this.k = k;
  this.heap = new MinHeap();

  for (const node of nums) {
    this.add(node);
  }
};

KthLargest.prototype.add = function (node) {
  this.heap.push(node);

  if (this.heap.size() > this.k) {
    this.heap.pop();
  }
  // console.log("heap", this.heap); //sy-log

  // 现在的最小堆是k个元素，那这个时候这个最小堆的最小值就是第k大元素
  return this.heap.peek();
};

class MinHeap {
	private data: any[];
  constructor(data = []) {
    // 最小堆
    this.data = data;
  }

  size() {
    return this.data.length;
  }

  compare(a, b) {
    return a - b;
  }

  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1],
    ];
  }

  // 获取最小堆的值
  peek() {
    return this.size() === 0 ? null : this.data[0];
  }

  // 往最小堆里添加元素
  push(node) {
    this.data.push(node);
    this.siftUp(node, this.size() - 1);
  }

  siftUp(node, i) {
    let index = i;
    while (index > 0) {
      const parentIndex = (index - 1) >>> 1; // 除以2
      const parent = this.data[parentIndex];
      if (this.compare(node, parent) < 0) {
        // 子节点<父节点
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // 删除最小堆的最小值
  pop() {
    if (this.size() === 0) {
      return null;
    }

    const first = this.data[0];
    const last = this.data.pop();
    // if (first !== last) {
    if (this.size() !== 0) {
      this.data[0] = last;
      this.siftDown(last, 0);
    }
  }

  siftDown(node, i) {
    let index = i;
    const length = this.size();
    const halfLength = length >>> 1;
    while (index < halfLength) {
      const leftIndex = (index + 1) * 2 - 1;
      const rightIndex = leftIndex + 1;
      const left = this.data[leftIndex];
      const right = this.data[rightIndex];

      if (this.compare(left, node) < 0) {
        // left<父节点
        if (rightIndex < length && this.compare(right, left) < 0) {
          // right<left , right最小
          this.swap(rightIndex, index);
          index = rightIndex;
        } else {
          // right>=left , left最小
          this.swap(leftIndex, index);
          index = leftIndex;
        }
      } else if (rightIndex < length && this.compare(right, node) < 0) {
        // left>node ,right<node
        // right 最小
        this.swap(rightIndex, index);
        index = rightIndex;
      } else {
        // 根节点最小
        break;
      }
    }
  }
}

const kthLargest = new KthLargest(3, [4, 5, 8, 2]);

// 3
// 插入3
//  4
// 5 8
