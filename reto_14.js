// Con el tema de las redes sociales, Santa Claus tiene pánico que los niños se despierten mientras él está repartiendo regalos en sus casos, usen el móvil para grabarlo y se haga viral en TikTok.

// Quiere evitarlo a toda costa. Cada casa en esa calle tiene un número de regalos preparados. Sin embargo, las casas tienen un sistema de seguridad conectado entre casas adyacentes, por lo que no puede dejar los regalos en dos casas seguidas, o se activará la alarma que alertará a los niños.

// Dada un array de enteros no negativos regalos que representa la cantidad de regalos en cada casa, tu tarea es ayudar a Papá Noel a determinar la máxima cantidad de regalos que puede entregar en una noche sin activar ninguna alarma.

// maxGifts([2, 4, 2]) // 4 (4)
// maxGifts([5, 1, 1, 5]) // 10 (5 + 5)
// maxGifts([4, 1, 1, 4, 2, 1]) // 9 (4 + 4 + 1)
// maxGifts([1, 3, 1, 3, 100]) // 103 (3 + 100)

console.log(maxGifts([2, 4, 2])) // 4 (4)
console.log(maxGifts([5, 1, 1, 5])) // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])) // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100])) // 103 (3 + 100)
console.log(maxGifts([98, 100, 100, 97, 1, 99])) // 297
console.log(maxGifts([98, 100, 100, 97, 1, 99, 99, 6])) // 303
console.log(maxGifts([1, 99, 100, 99, 1])) // 198
console.log(maxGifts([98, 100, 100, 1, 100, 97, 1, 99, 99, 99, 6])) // 298+198=496
console.log(maxGifts([242])) // 242 (4)

// 25 pts: 2487 ops/s, complexity: 19
function maxGifts(houses) {
	if(houses.length == 1){
		return houses[0]
	}
	let dir = 0
	let prev = houses[0]
	let hills = []
	let totalSum = 0
	for (let i = 0; i < houses.length; i++) {
		const gift = houses[i];
		if (gift > prev) {
			if (dir !== 1) {
				dir = 1
				hills.push(i - 1)
			}
		} else {
			if (i == 1) {
				hills.push(0)
			}
			if (gift == prev) {
				dir = 0
			} else {
				dir = -1
			}
		}
		prev = gift

	}

	for (let i = 0; i < hills.length; i++) {
		const start = hills[i];
		const end = hills[i + 1] ? hills[i + 1] - 1 : houses.length - 1
		let sum1 = 0
		let sum2 = 0
		let turn = 1
		let positions1 = []
		let positions2 = []

		for (let j = start; j <= end; j++) {
			if (turn == 1) {
				sum1 = sum1 + houses[j]
				positions1.push(j)
				turn = 0
			} else {
				sum2 = sum2 + houses[j]
				positions2.push(j)
				turn = 1
			}
		}

		if (sum1 > sum2) {
			for (let j = 0; j < positions1.length; j++) {
				houses.splice(positions1[j], 1, 0)
				if (positions1[j] > 0) {
					houses.splice(positions1[j] - 1, 1, 0)
				}
				if (positions1[j] < houses.length-1) {
					houses.splice(positions1[j] + 1, 1, 0)
				}
			}
		} else {
			for (let j = 0; j < positions2.length; j++) {
				houses.splice(positions2[j], 1, 0)
				if (positions2[j] > 0) {
					houses.splice(positions2[j] - 1, 1, 0)
				}
				if (positions2[j] < houses.length-1) {
					houses.splice(positions2[j] + 1, 1, 0)
				}
			}

		}
		totalSum = totalSum + (sum1>sum2?sum1:sum2)
	}
	return totalSum
}
