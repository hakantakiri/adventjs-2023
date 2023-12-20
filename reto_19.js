// ¡Alerta en la fábrica de juguetes de Santa! El Grinch 😈 se ha infiltrado en el almacén y ha saboteado algunos de los juguetes 💣.

// Los elfos necesitan ayuda para encontrar los juguetes saboteados y eliminarlos antes de que llegue la Navidad. Para ello tenemos el mapa 🗺️ del almacén, que es una matriz.

// Los * representan los juguetes saboteados y las celdas vacías con un espacio en blanco son los lugares seguros.

// Tu tarea es escribir una función que devuelva la misma matriz pero, en cada posición, nos indique el número de juguetes saboteados que hay en las celdas adyacentes.

// Si una celda contiene un juguete saboteado, debe permanecer igual. Si una celda no toca ningún juguete saboteado, debe contener un espacio en blanco .

// const store = [
//   ['*', ' ', ' ', ' '],
//   [' ', ' ', '*', ' '],
//   [' ', ' ', ' ', ' '],
//   ['*', ' ', ' ', ' ']
// ]

// console.log(revealSabotage(store))
// /* Debería mostrar:
// [
//     ['*', '2', '1', '1'],
//     ['1', '2', '*', '1'],
//     ['1', '2', '1', '1'],
//     ['*', '1', ' ', ' ']
// ]
// */
// Ten en cuenta que…

// Las celdas diagonales también se consideran adyacentes.
// El tablero siempre tendrá al menos una celda vacía y un juguete saboteado *.
// El tablero puede tener cualquier tamaño.
// Los números son cadenas de texto.
const store = [
    ['*', ' ', ' ', ' '],
    [' ', ' ', '*', ' '],
    [' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ']
]

console.log(revealSabotage(store))
/* Debería mostrar:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/


// ---------------------------------------Solution

// 25 pts: 1193 ops/s, complexity: 15
function revealSabotage(store) {
    for (let y = 0; y <= store.length-1; y++) {
        for (let x = 0; x <= store[0].length-1; x++) {
            if(store[y][x] !== '*'){
                let p = y-1
                let count = 0
                while( p <= y+1){
                    let k = x-1
                    while( k <= x+1){
                        if( (p>=0 && k >= 0) && (p <=store.length-1
                        && k <= store[0].length-1 ) 
                        && !(p==y && k==x) && store[p][k] === '*'){
                            count++
                        }
                        k++
                    }
                    p++
                }
                store[y][x] = count?String(count):' '
            }
        }
    }
    return store
}