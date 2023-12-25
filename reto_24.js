// console.log(getStaircasePaths(2, 1)) // [[1, 1]]
// console.log(getStaircasePaths(3, 3)) // [[1, 1, 1], [1, 2], [2, 1], [3]]
// console.log(getStaircasePaths(5, 1)) // [[1, 1, 1, 1, 1]]
console.log(getStaircasePaths(5, 4))
// console.log(getStaircasePaths(5, 2))
/*
[
    [1, 1, 1, 1, 1],
    [1, 1, 1, 2],
    [1, 1, 2, 1],
    [1, 2, 1, 1],
    [1, 2, 2],
    [2, 1, 1, 1],
    [2, 1, 2],
    [2, 2, 1],
]
*/
// console.log(getStaircasePaths(9, 2)) // Too long

function getStaircasePaths(steps, maxJump) {
	let start = Number((1).toString().padStart(steps, "1"))
	let end = []
	let left = steps
	let mod = maxJump
	while (left > 0) {
		end.push(left >= mod ? mod : left)
		left = left - mod
	}
	end = Number(end.join("").toString().padEnd(steps, "0"))

	function incBase(base, num) {
		let m = num + 1
		let inbase = false
		let ms = m.toString()
		while (!inbase) {
			inbase = true
			for (const xi in ms) {
				let i = Number(xi)
				let n = Number(ms[i])
				if (n > base) {
					inbase = false
					ms = ms.split("")
					ms[i] = "0"
					if (i - 1 >= 0) {
						ms[i - 1] = (Number(ms[i - 1]) + 1).toString()
					}
					ms = ms.join("")
				}
			}
		}
		return Number(ms)
	}

	let n = start
	let solutions = new Set()
	let solutionsAr = new Set()
	while (0 < n && n <= end) {
		console.log("Trying number ", n)
		let ar = n
			.toString()
			.split("")
			.filter((r) => r !== "0" && r <= maxJump)
		let compN = Number(ar.join(""))
		let s = ar.reduce((a, b) => {
			return Number(a) + Number(b)
		})
		if (s == steps && !solutions.has(compN)) {
			solutions.add(compN)
			solutionsAr.add(ar)
		}
		let prev = n
		n = incBase(maxJump, n, steps)
		if (prev == n) {
			n++
		}
	}
	return Array.from(solutionsAr).sort()
}

// function getStaircasePaths(steps, maxJump) {
// 	let start = Number((1).toString().padStart(steps, "1"))
// 	let end = []
// 	let left = steps
// 	let mod = maxJump
// 	while (left > 0) {
// 		end.push(left >= mod ? mod : left)
// 		left = left - mod
// 	}
// 	end = Number(end.join("").toString().padEnd(steps, "0"))
// 	let n = start
// 	let solutions = new Set()
// 	let solutionsAr = new Set()
// 	while (n <= end) {
// 		let ar = n
// 			.toString()
// 			.split("")
// 			.filter((r) => r !== "0" && r <= maxJump)
// 		let compN = Number(ar.join(""))
// 		let s = ar.reduce((a, b) => {
// 			return Number(a) + Number(b)
// 		})
// 		if (s == steps && !solutions.has(compN)) {
// 			solutions.add(compN)
// 			solutionsAr.add(ar)
// 		}
// 		n++
// 	}
// 	return Array.from(solutionsAr).sort()
// }
