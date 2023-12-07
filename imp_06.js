// function cyberReindeer(road, time) {
// 	const empty = "." + road.substring(1, road.length)
// 	const history = []
// 	let pos = 0
// 	for (let i = 0; i < time; i++) {
// 		let arr = empty.split("")
// 		arr[pos] = "S"
// 		if (road[pos + 1] == "|" && i < 4) {
// 		} else {
// 			pos++
// 		}

// 		arr = arr.map((c) => {
// 			if (i >= 5 && c == "|") {
// 				return "*"
// 			}
// 			return c
// 		})
// 		history.push(arr.join(""))
// 	}
// 	return history
// }

function cyberReindeer(road, time) {
	const empty = "." + road.substring(1, road.length)
	const history = []
	let pos = 0
	for (let i = 0; i < time; i++) {
		let arr = empty.split("")
		arr[pos] = "S"
		if (road[pos + 1] == "|" && i < 4) {
		} else {
			pos++
		}

		arr = arr.map((c) => {
			if (i >= 5 && c == "|") {
				return "*"
			}
			return c
		})
		history.push(arr.join(""))
	}
	return history
}
