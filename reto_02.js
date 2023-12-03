<<<<<<< HEAD
/**
 * En el taller de Santa, los elfos tienen una lista 
 * de regalos que desean fabricar y un conjunto limitado 
 * de materiales.

Los regalos son cadenas de texto y los materiales son 
caracteres. Tu tarea es escribir una función que, dada una  d
lista de regalos y los materiales disponibles, devuelva 
una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los 
materiales necesarios para fabricarlo.
 */


const gifts1 = ['tren', 'oso', 'pelota']
const materials1 = 'tronesa'
=======
const gifts1 = ["tren", "oso", "pelota"]
const materials1 = "tronesa"
>>>>>>> e798e3e62570228a22b370b7ab116fa2e1ef5cbf

console.log(manufacture(gifts1, materials1)) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts2 = ["juego", "puzzle"]
const materials2 = "jlepuz"

console.log(manufacture(gifts2, materials2)) // ["puzzle"]

const gifts3 = ["libro", "ps5"]
const materials3 = "psli"

console.log(manufacture(gifts3, materials3)) // []

// 270 pts: 2873 ops/s, complexity: 3
function manufacture(gifts, materials) {
	return gifts.filter((gift) => {
		for (const c of gift) {
			if (!materials.includes(c)) return false
		}
		return true
	})
}
<<<<<<< HEAD
=======

// function manufacture(gifts, materials) {
// 	const validate = (g, i) => {
// 		if (i === g.length) return true
// 		return materials.includes(g[i]) ? validate(g, i + 1) : false
// 	}
// 	return gifts.filter((gift) => {
// 		return validate(gift, 0)
// 	})
// }

// function manufacture(gifts, materials) {
// 	const validate = (g, i) => {
// 		if (i === g.length) return true
// 		return materials.includes(g[i]) ? validate(g, i + 1) : false
// 	}
// 	let result = []
// 	for (const gift of gifts) {
// 		if (validate(gift, 0)) result.push(gift)
// 	}
// 	return result
// }

// function manufacture(gifts, materials) {
// 	let mats = new Set(materials)
// 	const validate = (g, i) => {
// 		if (i === g.length) return true
// 		return mats.has(g[i]) ? validate(g, i + 1) : false
// 	}
// 	let result = []
// 	for (const gift of gifts) {
// 		let valid = validate(gift, 0)
// 		if (valid) result.push(gift)
// 	}
// 	return result
// }

// function manufacture(gifts, materials) {
// 	let result = []
// 	for (const gift of gifts) {
// 		let valid = true
// 		for (const c of new Set(gift)) {
// 			if (!new Set(materials).has(c)) {
// 				valid = false
// 			}
// 		}
// 		if (valid) result.push(gift)
// 	}
// 	return result
// }
>>>>>>> e798e3e62570228a22b370b7ab116fa2e1ef5cbf
