// En el taller de Santa, los elfos aman los acertijos 🧠. Este año, han creado uno especial: un desafío para formar un palíndromo navideño.

// Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás. Los elfos quieren saber si es posible formar un palíndromo haciendo, como mucho, un intercambio de letras.

// Crea una función getIndexsForPalindrome que reciba una cadena de caracteres y devolverá:

// Si ya es un palíndromo, un array vacío.
// Si no es posible, null.
// Si se puede formar un palíndromo con un cambio, un array con las dos posiciones (índices) que se deben intercambiar para poder crearlo.
// Por ejemplo:

// getIndexsForPalindrome('anna') // []
// getIndexsForPalindrome('abab') // [0, 1]
// getIndexsForPalindrome('abac') // null
// getIndexsForPalindrome('aaaaaaaa') // []
// getIndexsForPalindrome('aaababa') // [1, 3]
// getIndexsForPalindrome('caababa') // null
// Si se puede formar el palíndromo con diferentes intercambios, siempre se debe devolver el primero que se encuentre.

console.log(getIndexsForPalindrome('anna')) // []
console.log(getIndexsForPalindrome('abab')) // [0, 1]
console.log(getIndexsForPalindrome('abac')) // null
console.log(getIndexsForPalindrome('aaaaaaaa')) // []
console.log(getIndexsForPalindrome('aaababa')) // [1, 3]
console.log(getIndexsForPalindrome('caababa')) // null
console.log(getIndexsForPalindrome('rotaratov')) // [4,8]

// 180 pts: 2581 ops/s, complexity: 8
function getIndexsForPalindrome(word) {
    function swap(w, x, y) {
        return w.substring(0, x) + 
        w[y] + 
        w.substring(x + 1, y ) + 
        w[x] + 
        w.substring(y + 1)
    }
    let i = 0
    let j = word.length - 1
    let changes = []
    while (i <= j) {
        if (word[i] !== word[j]) {
            if(changes.length == 2) return null
            let searchWord = word.substring(i + 1, j)
            let idx_i = searchWord.indexOf(word[j]) + i + 1
            if (idx_i > i) {
                word = swap(word, i, idx_i)
                changes = [i, idx_i]
            } else {
                let idx_j = searchWord.indexOf(word[i]) + i +1
                if (idx_j > i) {
                    word = swap(word, idx_j, j)
                    changes = [idx_j, j]
                } else {
                    return null
                }
            }
        }
        i++
        j--
    }
    return changes.length == 0? []: changes
}