// Santa 🎅 is organizing a big Christmas dinner 🫓 and wants to ensure that all dishes are unique and varied!

// He gives you a list of Christmas dishes where each element consists of a list of strings that start with the name of the dish, followed by all the ingredients used for its preparation.

// You have to write a function that groups the dishes by ingredients whenever there are at least 2 dishes that contain them.

// So we return an array of arrays where the first position is the name of the ingredient and the rest are the names of the dishes.

// Both the list of ingredients and the dishes should be alphabetically ordered.

// const dishes = [
//   ["christmas turkey", "turkey", "sauce", "herbs"],
//   ["cake", "flour", "sugar", "egg"],
//   ["hot chocolate", "chocolate", "milk", "sugar"],
//   ["pizza", "sauce", "tomato", "cheese", "ham"],
// ]

// organizeChristmasDinner(dishes)

// /*

// "sauce" is in 2 dishes: "christmas turkey" and "pizza".
// "sugar" is in 2 dishes: "cake" and "hot chocolate".
// The rest of the ingredients only appear in one dish, so we do not show them.

// We show "sauce" first because alphabetically it comes before "sugar".
// And the dishes of each ingredient are also alphabetically ordered.

// [
//   ["sauce", "christmas turkey", "pizza"],
//   ["sugar", "cake", "hot chocolate"]
// ]
// */
// Keep in mind that:

// All the names of the dishes are different.
// The names of the ingredients for a given dish are different from each other.
// If there are no repeated ingredients, we return an empty array.

const dishes = [
	["christmas turkey", "turkey", "sauce", "herbs"],
	["cake", "flour", "sugar", "egg"],
	["hot chocolate", "chocolate", "milk", "sugar"],
	["pizza", "sauce", "tomato", "cheese", "ham"],
]

console.log(organizeChristmasDinner(dishes))

/*
  
  "sauce" is in 2 dishes: "christmas turkey" and "pizza".
  "sugar" is in 2 dishes: "cake" and "hot chocolate".
  The rest of the ingredients only appear in one dish, so we do not show them.
  
  We show "sauce" first because alphabetically it comes before "sugar".
  And the dishes of each ingredient are also alphabetically ordered.
  
  [
    ["sauce", "christmas turkey", "pizza"],
    ["sugar", "cake", "hot chocolate"]
  ]
  */

//-------------------------------------Solution

// 25 pts: 807 ops/s, complexity: 10
function organizeChristmasDinner(dishes) {
	let s = {}
	let res = []
	let result = []
	for (const d of dishes) {
		for (const i in d) {
			if (i > 0) {
				if (!s[d[Number(i)]]) s[d[Number(i)]] = []
				s[d[Number(i)]].push(d[Number(0)])
				if (s[d[Number(i)]].length == 2) {
					res.push(d[Number(i)])
				}
			}
		}
	}
	res.sort()
	for (const ingredient of res) {
		result.push([ingredient, ...s[ingredient].sort()])
	}
	return result
}
