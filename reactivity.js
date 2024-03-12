// class Node {
// 	constructor(value) {
// 		this.value = value
// 		this.left = null
// 		this.right = null
// 	}
// }

// class BinaryTree {
// 	constructor() {
// 		this.root = null
// 	}

// 	add(value) {
// 		const newNode = new Node(value)
// 		console.log('newNode это', newNode)
// 		if (!this.root) {
// 			this.root = newNode
// 			return
// 		}
// 		let currentNode = this.root
// 		console.log('currentNode это', currentNode)
// 		while (currentNode) {
// 			console.log('внутри while')
// 			if (newNode.value < currentNode.value) {
// 				console.log('ушел налево')
// 				if (!currentNode.left) {
// 					currentNode.left = newNode
// 					console.log('currentNode после добавления слева', currentNode)
// 					return
// 				}
// 				console.log('есть currentNode.left')
// 				console.log('currentNode тут', currentNode)
// 				currentNode = currentNode.left
// 				console.log('currentNode тут', currentNode)
// 			} else {
// 				console.log('ушел направо')
// 				if (!currentNode.right) {
// 					currentNode.right = newNode
// 					console.log('currentNode после добавления справа', currentNode)
// 					return
// 				}
// 				console.log('есть currentNode.right')
// 				currentNode = currentNode.right
// 			}
// 		}
// 	}
// }

// const myTree = new BinaryTree()
// myTree.add(8)
// console.log('8 добавлен')
// myTree.add(7)
// console.log('7 добавлен')
// myTree.add(9)
// console.log('9 добавлен')
// myTree.add(5)
// console.log('5 добавлен')
// // myTree.add(10)
// // myTree.add(20)
// // myTree.add(6)
// // myTree.add(2)
// // myTree.add(11)

// console.log(myTree)

/////////
////////
////////
/////////
////////
////////
/////////
////////
////////
/////////
////////
////////

// class Node {
// 	constructor(value) {
// 		this.value = value
// 		this.left = null
// 		this.right = null
// 	}
// }

// class BinaryTree {
// 	constructor() {
// 		this.root = null
// 	}
// 	add(value) {
// 		const newNode = new Node(value)

// 		if (!this.root) {
// 			this.root = newNode
// 			return
// 		}

// 		let currentNode = this.root
// 		while (currentNode) {
// 			if (newNode.value < currentNode.value) {
// 				if (!currentNode.left) {
// 					currentNode.left = newNode
// 					return
// 				}
// 				currentNode = currentNode.left
// 			} else {
// 				if (!currentNode.right) {
// 					currentNode.right = newNode
// 					return
// 				}
// 				currentNode = currentNode.right
// 			}
// 		}
// 	}

// 	preOrder(node, callback) {
// 		if (!node) {
// 			return
// 		}
// 		if (callback) {
// 			callback(node)
// 		}
// 		this.preOrder(node.left, callback)
// 		this.preOrder(node.right, callback)
// 	}

// 	inOrder(node, callback) {
// 		if (!node) {
// 			return
// 		}

// 		this.inOrder(node.left, callback)
// 		if (callback) {
// 			callback(node)
// 		}
// 		this.inOrder(node.right, callback)
// 	}

// 	postOrder(node, callback) {
// 		if (!node) {
// 			return
// 		}

// 		this.postOrder(node.left, callback)
// 		this.postOrder(node.right, callback)
// 		if (callback) {
// 			callback(node)
// 		}
// 	}

// 	traverseDFS(callback, method) {
// 		if (method === 'preOrder') {
// 			return this.preOrder(this.root, callback)
// 		}
// 		if (method === 'inOrder') {
// 			return this.inOrder(this.root, callback)
// 		} else {
// 			return this.postOrder(this.root, callback)
// 		}
// 	}

// 	traverseBFS(callback) {
// 		const queue = [this.root]
// 		while (queue.length) {
// 			const node = queue.shift()
// 			callback(node)
// 			if (node.left) queue.push(node.left)
// 			if (node.right) queue.push(node.right)
// 		}
// 	}
// }

// const myTree = new BinaryTree()
// myTree.add(8)
// myTree.add(7)
// myTree.add(9)
// myTree.add(5)
// myTree.add(10)
// myTree.add(20)
// myTree.add(6)
// myTree.add(2)
// myTree.add(11)
// myTree.traverseDFS(node => console.log(node.value), 'preOrder')
// myTree.traverseDFS(node => console.log(node.value), 'postOrder')

// myTree.traverseBFS(node => console.log(node.value))

// root = [3, 9, 20, null, null, 15, 7]

// var maxDepth = function (root) {
// 	if (root === null) {
// 		return 0
// 	}
// 	console.log(maxDepth(root.left))
// 	console.log(maxDepth(root.right))
// 	return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
// }

// maxDepth(root)

const nums = [4, 2, 3, 10, 8, 14, 9]
const target = 24

// nums[map.get(complement)]
