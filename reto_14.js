console.log(maxGifts([2, 4, 2])) // 4 (4)
console.log(maxGifts([5, 1, 1, 5])) // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])) // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100])) // 103 (3 + 100)
console.log(maxGifts([98, 100, 100, 97, 1, 99])) // 297
console.log(maxGifts([98, 100, 100, 97, 1, 99, 99, 6])) // 303
console.log(maxGifts([1, 99, 100, 99, 1])) // 198
console.log(maxGifts([98, 100, 100, 1, 100, 97, 1, 99, 99, 99, 6])) // 298+198=496

function maxGifts(houses){

	let dir = 1
	let previous = -1
	for (let i = 0; gift < houses.length; i++) {
		const gift = houses[i];
		
	}
}

// function maxGifts(houses) {
// 	function indexes(houses, c) {
// 		let idx = -1
// 		let min = Infinity
// 		for (let i = 0; i < houses.length; i++) {
// 			if (houses[i] === c) {
// 				if (houses[i - 1] < min || houses[i + 1] < min) {
// 					min = Math.min(houses[i - 1], houses[i + 1])
// 					idx = i
// 				}
// 			}
// 		}
// 		return idx
// 	}
// 	let sum = 0
// 	while (Math.max(...houses) > 0) {
// 		let max = Math.max(...houses)
// 		let i = indexes(houses, max)
// 		sum = sum + max
// 		houses.splice(i, 1, 0)
// 		if (i < houses.length - 1) {
// 			houses.splice(i + 1, 1, 0)
// 		}
// 		if (i > 0) {
// 			houses.splice(i - 1, 1, 0)
// 		}
// 	}
// 	return sum
// }

// function maxGifts(houses) {
// 	let sum = 0
// 	while (houses.length > 0) {
// 		let max = Math.max(...houses)
// 		let i = houses.indexOf(max)
// 		sum = sum + max
// 		houses.splice(i, 1)
// 		houses.splice(i, 1)
// 		if (i > 0) {
// 			houses.splice(i - 1, 1)
// 		}
// 	}
// 	return sum
// }
