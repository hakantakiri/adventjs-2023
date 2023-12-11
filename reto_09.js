// Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

// Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

// Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.

// adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// // -> 1 (cambias la cuarta luz a 🔴)

// adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// // -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

// adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// // -> 0 (ya están alternadas)

// adjustLights(['🔴', '🔴', '🔴'])
// // -> 1 (cambias la segunda luz a 🟢)

console.log(adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]))
// -> 1 (cambias la cuarta luz a 🔴)

console.log(adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]))
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

console.log(adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]))
// -> 0 (ya están alternadas)

console.log(adjustLights(["🔴", "🔴", "🔴"]))
// -> 1 (cambias la segunda luz a 🟢)

// 280 pts: 3020 ops/s, complexity: 9
function adjustLights(lights) {
	let n = []
	let m = []
	let sum = 0
	let sum2 = 0
	let j
	for (let i = 0; i < lights.length; i++) {
		j = lights.length - i - 1
		const l = lights[i]
		const t = lights[j]
		if (l == n[i - 1]) {
			sum = sum + 1
			n.push(l == "🟢" ? "🔴" : "🟢")
		} else {
			n.push(l)
		}
		if (t == m[i - 1]) {
			sum2 = sum2 + 1
			m.push(t == "🟢" ? "🔴" : "🟢")
		} else {
			m.push(t)
		}
	}
	return sum > sum2 ? sum2 : sum
}

// 310 pts: 3020 ops/s, complexity: 9
// function adjustLights(lights) {
// 	let n = []
// 	let m = []
// 	let sum = 0
// 	let sum2 = 0
// 	for (let i = 0; i < lights.length; i++) {
// 		const j = lights.length - i - 1
// 		const l = lights[i]
// 		const t = lights[j]
// 		if (i == 0) {
// 			n.push(l)
// 		} else {
// 			if (l == n[i - 1]) {
// 				sum = sum + 1
// 				n.push(l == "🟢" ? "🔴" : "🟢")
// 			} else {
// 				n.push(l)
// 			}
// 		}
// 		if (j == lights.length - 1) {
// 			m.push(t)
// 		} else {
// 			if (t == m[i - 1]) {
// 				sum2 = sum2 + 1
// 				m.push(t == "🟢" ? "🔴" : "🟢")
// 			} else {
// 				m.push(t)
// 			}
// 		}
// 	}
// 	// console.log(n.join())
// 	// console.log(m.join())
// 	return sum > sum2 ? sum2 : sum
// }

// 200 pts: 2790 ops/s, complexity: 10
// function adjustLights(lights) {
// 	let n = []
// 	let sum = 0
// 	let inv = []
// 	for (let i = 0; i < lights.length; i++) {
// 		const l = lights[i]
// 		inv.unshift(l)
// 		if (i == 0) {
// 			n.push(l)
// 		} else {
// 			if (l == n[i - 1]) {
// 				sum = sum + 1
// 				n.push(l == "🟢" ? "🔴" : "🟢")
// 			} else {
// 				n.push(l)
// 			}
// 		}
// 	}
// 	// console.log(n.join())

// 	let m = []
// 	let sum2 = 0
// 	for (let i = 0; i < inv.length; i++) {
// 		const l = inv[i]
// 		if (i == 0) {
// 			m.push(l)
// 		} else {
// 			if (l == m[i - 1]) {
// 				sum2 = sum2 + 1
// 				m.push(l == "🟢" ? "🔴" : "🟢")
// 			} else {
// 				m.push(l)
// 			}
// 		}
// 	}
// 	// console.log(m.join())
// 	return sum > sum2 ? sum2 : sum
// }
