export interface IMap<K, V> {
	add: (key: K, value: V) => void;
	remove: (key: K) => V;
	contains: (key: K) => boolean;
	get: (key: K) => V;
	set: (key: K, newValue: V) => void;
	getSize: () => number;
	isEmpty: () => boolean;
}

/*
    映射的时间复杂度分析

                LinkedListMap           BSTMap          平均          最差
   增 add            O(n)                O(h)          O(logn)        O(n)
   删 remove         O(n)                O(h)          O(logn)        O(n)
   改 set            O(n)                O(h)          O(logn)        O(n)
   查 get            O(n)                O(h)          O(logn)        O(n)
   查 contains       O(n)                O(h)          O(logn)        O(n)
*/
