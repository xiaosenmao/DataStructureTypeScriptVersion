const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: {
		Stack: path.resolve(__dirname, './src/Stack/Stack.ts'),
		Queue: path.resolve(__dirname, './src/Queue/Queue.ts'),
		LinkedList: path.resolve(__dirname, './src/LinkedList/LinkedList.ts'),
		LinkedListEnhance: path.resolve(__dirname, './src/LinkedList/LinkedListEnhance.ts'),
		BinarySearchTree: path.resolve(__dirname, './src/BinarySearchTree/BST.ts'),
		BSTSet: path.resolve(__dirname, './src/Set/BSTSet.ts'),
		LinkedListSet: path.resolve(__dirname, './src/Set/LinkedListSet.ts'),
		LinkedListMap: path.resolve(__dirname, './src/Map/LinkedListMap.ts'),
		BSTMap: path.resolve(__dirname, './src/Map/BSTMap.ts'),
		MaxHeap: path.resolve(__dirname, './src/MaxHeap/MaxHeap.ts')
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './dist')
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
