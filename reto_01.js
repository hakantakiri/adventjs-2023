/*
const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5
*/






const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5

// SOLUTION 2

function findFirstRepeated(gifts) {
    let seen = new Set()
    for (const id of gifts){
        if(seen.has(id)) {return id}
        else {seen.add(id)}
    }
    return -1
  }

// SOLUTION 1

// function findFirstRepeated(gifts) {
//   let index = Infinity
//   for (let i = 0; i < gifts.length; i++) {
//     for (let j = 0; j < gifts.length; j++) {
//       if (gifts[i] ===  gifts[j] && j>i && j< index){
//             index = j
//       }
//     }
//   }
//   return index === Infinity? -1: gifts[index]
// }