// Santa is experimenting with new gift designs and he needs your help to visualize them in 3D.

// Your task is to write a function that, given a size n (integer), generates a drawing of a 3D gift using ASCII characters.

// The lines of the gifts are drawn with # and the faces with the symbol passed to us as a parameter:

// drawGift(4, '+')

// /*
//    ####
//   #++##
//  #++#+#
// ####++#
// #++#+#
// #++##
// ####
// */

// drawGift(5, '*')
// /*
//     #####
//    #***##
//   #***#*#
//  #***#**#
// #####***#
// #***#**#
// #***#*#
// #***##
// #####
// */

// drawGift(1, '^')
// /*
// #
// */
// Important: We have been told that there is always to leave a newline at the end of the drawing.

console.log(drawGift(4, "+"))
console.log(drawGift(5, "*"))
console.log(drawGift(1, "^"))

// 110 pts: 2,128 ops/s, complexity: 19
function drawGift(size, symbol) {
	let lines = ""
	for (let h = 2 * size - 2; h >= 0; h--) {
		let line = ""
		for (let w = 0; w <= 2 * size - 2; w++) {
			let char = "#"
			// In  S1
			if (
				(0 < w && w < size - 1 && 0 < h && h < size - 1) ||
				(h - size + 1 < w &&
					w < h &&
					size - 1 < h &&
					h < 2 * size - 2) ||
				(size - 1 < w && w < 2 * size - 2 && w - size + 1 < h && h < w)
			) {
				char = symbol
			}
			// In E1
			if (w < size - 1 && w + size - 1 < h) {
				char = " "
			}
			// In E2
			if (size - 1 < w && h < w - size + 1) {
				char = ""
			}
			line = line + char
		}
		lines = lines + line + "\n"
	}
	return lines
}

// 10 pts: 569 ops/s, complexity: 19
// function drawGift(size, symbol) {
// 	let lines = ""
// 	const l = 2 * size - 1
// 	const e = 2 * size - 2
// 	const t = size - 1
// 	for (let i = 0; i < l * l; i++) {
// 		const h = Math.floor((l * l - i - 1) / l)
// 		const w = i % l
// 		let char = "#"
// 		// In  S1
// 		if (
// 			(0 < w && w < t && 0 < h && h < t) ||
// 			(h - t < w && w < h && t < h && h < e) ||
// 			(t < w && w < e && w - t < h && h < w)
// 		) {
// 			char = symbol
// 		}
// 		// In E1
// 		if (w < t && w + t < h) {
// 			char = " "
// 		}
// 		// In E2
// 		if (t < w && h < w - t) {
// 			char = ""
// 		}
// 		lines = lines + char + (w === e ? "\n" : "")
// 	}
// 	return lines
// }

// 110 pts: 2,088 ops/s, complexity: 19
// function drawGift(size, symbol) {
// 	let lines = ""
// 	for (let h = 2 * size - 2; h >= 0; h--) {
// 		let line = ""
// 		for (let w = 0; w <= 2 * size - 2; w++) {
// 			let char = "#"
// 			// In  S1
// 			if (0 < w && w < size - 1 && 0 < h && h < size - 1) {
// 				char = symbol
// 			}
// 			// In  S2
// 			if (h - size + 1 < w && w < h && size - 1 < h && h < 2 * size - 2) {
// 				char = symbol
// 			}
// 			// In  S4
// 			if (size - 1 < w && w < 2 * size - 2 && w - size + 1 < h && h < w) {
// 				char = symbol
// 			}
// 			// In E1
// 			if (w < size - 1 && w + size - 1 < h) {
// 				char = " "
// 			}
// 			// In E2
// 			if (size - 1 < w && h < w - size + 1) {
// 				char = ""
// 			}
// 			line = line + char
// 		}
// 		lines = lines + line + "\n"
// 	}
// 	return lines
// }
