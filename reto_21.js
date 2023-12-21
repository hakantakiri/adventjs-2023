// Los elfos están recibiendo mensajes binarios extraños desde Marte 🪐. ¿Los extraterrestres están tratando de comunicarse con ellos? 👽

// El mensaje que llega es un array de 0s y 1s. Parece que han encontrado un patrón… Para asegurarse, quieren encontrar el segmento más largo de la cadena donde el número de 0s y 1s sea igual.

// findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])
// //                         |________|
// // posición del segmento:    [2, 5]
// // más largo equilibrado
// // de 0s y 1s

// findBalancedSegment([1, 1, 0])
// //                      |__|
// //                     [1, 2]

// findBalancedSegment([1, 1, 1])
// // no hay segmentos equilibrados: []
// Ten en cuenta que si hay más de un patrón equilibrado, debes devolver el más largo y el primero que encuentres de izquierda a derecha.

// Dicen que si encuentran el patrón, podrán enviar un mensaje de vuelta a Marte 🚀. Parece ser que tienen que enviarlos a https://mars.codes.

console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])) // [2, 5]
console.log(findBalancedSegment([1, 1, 0])) // [1, 2]
console.log(findBalancedSegment([1, 1, 1])) // []
console.log(findBalancedSegment([1, 0, 1])) // [0, 1]
console.log(findBalancedSegment([0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1])) // [5,10]
console.log(findBalancedSegment([1, 0, 0, 0, 1, 1, 1, 0, 0, 0])) // [0, 7]

//----------------------------------------Solution

// 25 pts: 720 ops/s, complexity: 7
function findBalancedSegment(message) {
    let len = 0
    let coords = []
    for (let i = 0; i < message.length; i++) {
        for (let j = message.length - 1; j > i+len; j--) {
            let test = message.slice(i, j + 1)
            let o = test.filter(n => n === 1).length
            let z = test.filter(n => n === 0).length
            if (o === z && j - i > len) {
                coords = [i, j]
                len = j - i
            }
        }
    }
    return coords
}