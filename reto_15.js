// Estamos programando unos robots llamados giftbot 🤖🎁 que navegan de forma autónoma por los almacenes de regalos.

// Estamos creando una función a la que le pasamos: el almacén 🏬 que deben navegar y los movimientos ↔️ que pueden realizar.

// El almacén se representa como un array de cadenas de texto, donde:

// . significa que hay vía libre.
// * significa que hay un obstáculo.
// ! es la posición inicial del robot.
// Los movimientos son un array de cadenas de texto, donde:

// R mueve al robot una posición a la derecha.
// L mueve al robot una posición a la izquierda.
// U mueve al robot una posición hacia arriba.
// D mueve al robot una posición hacia abajo.
// Hay que tener en cuenta que el robot no puede superar los obstáculos ni los límites del almacén.

// Dados un almacén y los movimientos, debemos devolver el array con la posición final de nuestro robot.

// Ten en cuenta que la store es un array que puede ser de un número de filas que va de 1 a 100, ya que tenemos almacenes de todos los tamaños.

// También que el robot es posible que termine en su posición inicial si no puede moverse o si está dando vueltas.

const store = ['..!....', '...*.*.']

const movements = ['R', 'R', 'D', 'L']
const result = autonomousDrive(store, movements)
console.log(result)
/*
[
  ".......",
  "...*!*."
]
*/

// El último movimiento es hacia la izquierda, pero no puede moverse porque hay un obstáculo.

// 25 pts: 1860 ops/s, complexity: 15
function autonomousDrive(store, movements) {
    let idx= store.join('').indexOf('!')
    let p = [Math.floor(idx/store[0].length), 
    Math.floor(idx%store[0].length)]
    
    for( const m of movements){
        let y = p[0]
        let x = p[1]
        if (m === 'R' && store[y][x+1] == '.'){
            store[y] = store[y].substring(0,x)+'.!'+store[y].substring(x+2)
            p = [y, x+1>=store[y].length?x:x+1]
        }
        if (m === 'L' && store[y][x-1] == '.'){
            store[y] = store[y].substring(0,x-1)+'!.'+store[y].substring(x+1)
            p = [y, x>0?x-1:x]
        }
        if (m === 'U' && store[y-1] != undefined && store[y-1][x] == '.' ){
            store[y-1] = store[y-1].substring(0,x)+'!'+store[y-1].substring(x+1)
            store[y] = store[y].substring(0,x)+'.'+store[y].substring(x+1)
            p = [y>0?y-1:y, x]
        }
        if (m === 'D' && store[y+1] != undefined && store[y+1][x] == '.' ){
            store[y+1] = store[y+1].substring(0,x)+'!'+store[y+1].substring(x+1)
            store[y] = store[y].substring(0,x)+'.'+store[y].substring(x+1)
            p = [y+1>=store.length?y:y+1, x]
        }
    }
    return store
}

// 25 pts: 1860 ops/s, complexity: 16
// function autonomousDrive(store, movements) {
//     let idx= store.join('').indexOf('!')
//     let p = [Math.floor(idx/store[0].length), 
//     Math.floor(idx%store[0].length)]

//     function move(store, m, p){
//         let y = p[0]
//         let x = p[1]
//         if (m === 'R' && store[y][x+1] == '.'){
//             store[y] = store[y].substring(0,x)+'.!'+store[y].substring(x+2)
//             p = [y, x+1>=store[y].length?x:x+1]
//         }
//         if (m === 'L' && store[y][x-1] == '.'){
//             store[y] = store[y].substring(0,x-1)+'!.'+store[y].substring(x+1)
//             p = [y, x>0?x-1:x]
//         }
//         if (m === 'U' && store[y-1] != undefined && store[y-1][x] == '.' ){
//             store[y-1] = store[y-1].substring(0,x)+'!'+store[y-1].substring(x+1)
//             store[y] = store[y].substring(0,x)+'.'+store[y].substring(x+1)
//             p = [y>0?y-1:y, x]
//         }
//         if (m === 'D' && store[y+1] != undefined && store[y+1][x] == '.' ){
//             store[y+1] = store[y+1].substring(0,x)+'!'+store[y+1].substring(x+1)
//             store[y] = store[y].substring(0,x)+'.'+store[y].substring(x+1)
//             p = [y+1>=store.length?y:y+1, x]
//         }
//         return p
//     }
    
//     for( const m of movements){
//         p = move(store, m, p)
//     }
//     return store
// }
