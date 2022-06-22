const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { normalizeAbsolutePath } = require('./utils');

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: {
		MyArray: normalizeAbsolutePath('./src/MyArray/MyArray.ts'),
		ArrayStack: normalizeAbsolutePath('./src/Stack/ArrayStack.ts'),
		LinkedListStack: normalizeAbsolutePath('./src/Stack/LinkedListStack.ts'),
		Queue: normalizeAbsolutePath('./src/Queue/Queue.ts'),
		LoopQueue: normalizeAbsolutePath('./src/Queue/LoopQueue.ts'),
		LinkedList: normalizeAbsolutePath('./src/LinkedList/LinkedList.ts'),
		LinkedListEnhance: normalizeAbsolutePath('./src/LinkedList/LinkedListEnhance.ts'),
		RemoveLinkedListElement: normalizeAbsolutePath('./src/LinkedList/RemoveLinkedListElement.ts'),
		BinarySearchTree: normalizeAbsolutePath('./src/BinarySearchTree/BST.ts'),
		BSTSet: normalizeAbsolutePath('./src/Set/BSTSet.ts'),
		LinkedListSet: normalizeAbsolutePath('./src/Set/LinkedListSet.ts'),
		LinkedListMap: normalizeAbsolutePath('./src/Map/LinkedListMap.ts'),
		BSTMap: normalizeAbsolutePath('./src/Map/BSTMap.ts'),
		MaxHeap: normalizeAbsolutePath('./src/MaxHeap/MaxHeap.ts')
	},
	output: {
		filename: '[name].js',
		path: normalizeAbsolutePath('./dist')
	},
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: 'ts-loader',
				exclude: '/node_modules/'
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	optimization: {
		runtimeChunk: {
			name: 'runtime'
		}
	},
	plugins: [
		new CleanWebpackPlugin()
	]
};
