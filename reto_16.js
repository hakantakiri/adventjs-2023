// Yesterday, someone did a production deployment and the application for assembling Christmas trees broke. We've been asked to fix it as soon as possible.

// The problem is that the format of the trees has changed. It's an array of numbers… but it should be an object! For example, the tree: [3, 1, 0, 8, 12, null, 1] looks like this:

// //        3
// //      /   \
// //     1     0
// //    / \     \
// //   8  12     1
// What we need is to transform the array into an object where each node of the tree has value, left, and right properties.

// For example, running your transformTree function with [3, 1, 0, 8, 12, null, 1] should return this:

// {
//   value: 3,
//   left: {
//     value: 1,
//     left: {
//       value: 8,
//       left: null,
//       right: null
//     },
//     right: {
//       value: 12,
//       left: null,
//       right: null
//     }
//   },
//   right: {
//     value: 0,
//     left: null,
//     right: {
//       value: 1,
//       left: null,
//       right: null
//     }
//   }
// }
// The elf on duty who tried to solve the problem before going home, left us some clues:

// If a node doesn't have a value, it's represented with null. Therefore, if a node has a null value, it won't have any children.
// The root node is at index 0 in the array.
// There's a relationship between the index of a node and the index of its children. Look for the pattern!

//  [3,   1, 0,   8, 12, null, 1,    8  ,  9,   10,     56,   4     ,  6   ,   8]
//   0    1  2    3   4     5  6     7    8      9      10   11
//  2^0    2^1          2^2
//   0   00  01  000 001  010 011  0000 0001
//   -    0   1   00  01   10  11   000  001   010     011  100     101       110   111
console.log(transformTree([3, 1, 0, 8, 12, null, 1]))
console.log(transformTree([])) // null
console.log(transformTree([1])) // {"value": 1,"left": null,"right": null}
console.log(transformTree([1, 2, 3]))
console.log(transformTree([17, 0, null, null, 1]))

// 25 pts: 799 ops/s, complexity: 11
function transformTree(tree) {
	if (tree.length == 0) return null
	let ob = { value: tree[0], left: null, right: null }
	function address(i) {
		if (i == 0) return ""
		let length = Math.floor(Math.log(i + 1) / Math.log(2))
		return (i + 1 - 2 ** length).toString(2).padStart(length, "0")
	}
	function fill(address, value, next) {
		let content = {
			value: value,
			left: null,
			right: null,
		}
		if (address[1] === undefined) {
			if (address[0] == "0") {
				next.left = content
			} else {
				next.right = content
			}
		} else {
			fill(
				address.slice(1),
				value,
				address[0] == "0" ? next.left : next.right
			)
		}
	}
	for (let i = 0; i < tree.length; i++) {
		const c = tree[i]
		if (c != null && i > 0) fill(address(i), c, ob)
	}
	return ob
}
