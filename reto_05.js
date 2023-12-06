/**
 Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

. = Carretera
S = Trineo de Santa
* = Barrera abierta
| = Barrera cerrada
Ejemplo de carretera: S...|....|.....

Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
// const result = cyberReindeer(road, time)

result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
 */

const road = "S..|...|.."
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
console.log(result)

// 130 pts: 1077 ops/s, complexity: 7
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

// 10 pts: 809 ops/s, complexity: 15
// function cyberReindeer(road, time) {
// 	function nextStep(road, time, original, turn) {
// 		let newRoad = []
// 		for (let i = 0; i < road.length; i++) {
// 			if (road[i] == ".") {
// 				if (road[i - 1] == "S") {
// 					newRoad.push("S")
// 				} else {
// 					newRoad.push(".")
// 				}
// 			}
// 			if (road[i] == "S") {
// 				if (road[i + 1] == "|" && time > turn) {
// 					newRoad.push("S")
// 				} else {
// 					if (original[i] == "|") {
// 						newRoad.push("*")
// 					} else {
// 						newRoad.push(".")
// 					}
// 				}
// 			}
// 			if (road[i] == "|") {
// 				if (time > turn) {
// 					newRoad.push("|")
// 				} else {
// 					if (road[i - 1] == "S") {
// 						newRoad.push("S")
// 					} else {
// 						newRoad.push("*")
// 					}
// 				}
// 			}
// 			if (road[i] == "*") {
// 				if (road[i - 1] == "S") {
// 					newRoad.push("S")
// 				} else {
// 					newRoad.push("*")
// 				}
// 			}
// 		}
// 		return newRoad.join("")
// 	}

// 	let ori = road
// 	let history = [road]
// 	let turn = time - 5
// 	time--
// 	while (time > 0) {
// 		road = nextStep(road, time, ori, turn)
// 		history.push(road)
// 		time--
// 	}
// 	return history
// }
