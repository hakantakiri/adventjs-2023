/**
The elves are cataloging Santa's reindeer 🦌 based on the distance they can travel.

For this, they have a text string movements where each character represents the direction of the reindeer's movement:

> = Moves to the right
< = Moves to the left
* = Can move forward or backward
For example, if the movement is >>*<, it goes to the right twice, then it can go either left or right (whichever maximizes the final traveled distance) and then left.

The elves want to know what the maximum distance the reindeer travels is after completing all movements.

In the previous example, the maximum distance the reindeer travels is 2. It goes to the right twice +2, then with the * it can go to the right again to maximize the distance +1 and then it goes to the left -1.

Create a maxDistance function that takes the text string movements and returns the maximum distance that the reindeer can travel in any direction:

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5
Keep in mind that it doesn't matter whether it is to the left or right, the distance is the absolute value of the maximum distance traveled at the end of the movements.
 */

const movements = ">>*<"
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = "<<<>"
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = ">***>"
const result3 = maxDistance(movements3)
console.log(result3) // -> 5

// 370 pts: 3259ops/s, complexity: 3
function maxDistance(movements) {
	let res1 = 0,
		res2 = 0
	for (const c of movements) {
		res1 = res1 + (c !== ">" ? 1 : -1)
		res2 = res2 + (c !== "<" ? 1 : -1)
	}
	return Math.max(res1, res2)
}

// 370 pts: 3224ops/s, complexity: 3
// function maxDistance(movements) {
// 	let res1 = 0
// 	let res2 = 0
// 	for (const c of movements) {
// 		res1 = res1 + (c !== ">" ? 1 : -1)
// 		res2 = res2 + (c !== "<" ? 1 : -1)
// 	}
// 	return Math.max(res1, res2)
// }

// 3360 pts: 3114ops/s, complexity: 4
// function maxDistance(movements) {
// 	let res1 = 0
// 	let res2 = 0
// 	for (const c of movements) {
// 		res1 = res1 + (c !== ">" ? 1 : -1)
// 		res2 = res2 + (c !== "<" ? 1 : -1)
// 	}
// 	return res1 > res2 ? res1 : res2
// }

// 360 pts: 3114ops/s, complexity: 4
// function maxDistance(movements) {
// 	let res = 0
// 	let countN = 0
// 	for (const c of movements) {
// 		res = res + (c === ">" ? 1 : c === "<" ? -1 : 0)
// 		countN = countN + (c === "*" ? 1 : 0)
// 	}
// 	return Math.abs(res) + Math.abs(countN)
// }

// 360 pts: 3138 ops/s, complexity: 4
// function maxDistance(movements) {
// 	let countR = 0
// 	let countL = 0
// 	let countN = 0
// 	for (const c of movements) {
// 		if (c === ">") {
// 			countR++
// 		} else {
// 			if (c === "<") {
// 				countL++
// 			} else {
// 				countN++
// 			}
// 		}
// 	}
// 	countN = countR >= countL ? countN : -1 * countN
// 	return Math.abs(countR - countL + countN)
// }
