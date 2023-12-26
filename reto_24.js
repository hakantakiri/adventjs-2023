// En la aldea de Santa, hay una escalera mágica que lleva a la fábrica de juguetes 🧸. Los elfos, siempre buscando hacer ejercicio y divertirse 🏃‍♂️, deciden saltar los peldaños de la escalera.

// Nos dan steps como el número de peldaños de la escalera y el número máximo de peldaños maxJump que un elfo puede saltar en un solo salto.

// Tu tarea es ayudar a los elfos a encontrar todas las posibles secuencias de saltos que pueden hacer para subir la escalera, ordenadas de menos a más. Teniendo en cuenta que los elfos pueden saltar como máximo maxJump peldaños en un solo salto (pero pueden saltar menos peldaños si así lo desean).

// Por ejemplo, si hay una escalera de steps = 4 y maxJump = 2 es el número máximo de peldaños que un elfo puede saltar en un solo salto, entonces hay cinco secuencias de saltos posibles:

// [1, 1, 1, 1] (salta 1 peldaño 4 veces)
// [1, 1, 2] (salta 1 peldaño 2 veces y luego 2 peldaños)
// [1, 2, 1] (salta 1 peldaño, luego 2 peldaños y luego 1 peldaño)
// [2, 1, 1] (salta 2 peldaños, luego 1 peldaño y luego 1 peldaño)
// [2, 2] (salta 2 peldaños 2 veces)
// Más ejemplos:
console.log(getStaircasePaths(2, 1)) // [[1, 1]]
console.log(getStaircasePaths(3, 3)) // [[1, 1, 1], [1, 2], [2, 1], [3]]
console.log(getStaircasePaths(5, 1)) // [[1, 1, 1, 1, 1]]
console.log(getStaircasePaths(5, 2))
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

//-------------------------------------Solution

// 25 pts: 210 ops/s, complexity: 6
function getStaircasePaths(steps, maxJump) {
	let start = Array(steps).fill(1)
	let base = [start]
	let solNum = new Set()
	let solAr = new Set()
	solAr.add(start)
	while (base.length > 0) {
		let new_base = []
		for (const b of base) {
			for (let i = 0; i < b.length - 1; i++) {
				let x = [...b]
				if (x[i] + x[i + 1] <= maxJump) {
					x[i] = x[i] + x[i + 1]
					x.splice(i + 1, 1)
					if (!solNum.has(x.join(""))) {
						solAr.add(x)
						solNum.add(x.join(""))
						new_base.push(x)
					}
				}
			}
		}
		base = new_base
	}
	return Array.from(solAr).sort()
}
