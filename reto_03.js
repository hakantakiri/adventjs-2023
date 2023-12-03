/**
 * En el taller de Santa, un elfo travieso ha estado jugando 
 * en la cadena de fabricación de regalos, añadiendo o eliminando 
 * un paso no planificado.

Tienes la secuencia original de pasos en la fabricación
 original y la secuencia modificada modified que puede
  incluir un paso extra o faltar un paso.

Tu tarea es escribir una función que identifique y
 devuelva el primer paso extra que se ha añadido o eliminado 
 en la cadena de fabricación. Si no hay ninguna diferencia 
 entre las secuencias, devuelve una cadena vacía.
 * 
 */

const original1 = 'abcd'
const modified1 = 'abcde'
console.log(findNaughtyStep(original1, modified1)) // 'e'

const original2 = 'stepfor'
const modified2 = 'stepor'
console.log(findNaughtyStep(original2, modified2)) // 'f'

const original3 = 'abcde'
const modified3 = 'abcde'
console.log(findNaughtyStep(original3, modified3)) // ''


// 340 pts: 3210 ops/s, complexity: 6
function findNaughtyStep(original, modified) {
    if (original === modified) return ''
    const comp = modified.length>original.length
    for (let i = 0; i < comp?modified.length:original.length; i++) {
        if (original[i] !== modified[i]) {
            return (comp? modified[i] : original[i])
        }
        
    }
}

// 340 pts: 3210 ops/s, complexity: 6
// function findNaughtyStep(original, modified) {
//     if (original === modified) return ''
//     const comp = modified.length>original.length
//     for (let i = 0; i < comp?modified.length:original.length; i++) {
//         if (original[i] !== modified[i]) {
//             return (comp? modified[i] : original[i])
//         }
        
//     }
// }


// 340 pts: 3204 ops/s, complexity: 6
// function findNaughtyStep(original, modified) {
//     if (original === modified) return ''
//     let i = 0
//     const comp = modified.length>original.length
//     while (i < comp?modified.length:original.length ) {
//         if (original[i] !== modified[i]) {
//             return (comp? modified[i] : original[i])
//         }
//         i++
//     }
// }