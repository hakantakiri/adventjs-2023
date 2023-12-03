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

console.log(manufacture(gifts1, materials1)) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

console.log(manufacture(gifts2, materials2)) // ["puzzle"]

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

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
