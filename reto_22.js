// Fácil
// En la fábrica de juguetes de Santa, los elfos están desarrollando un lenguaje de programación llamado Santa.js 👨‍💻👩‍💻 basado en símbolos para controlar sus máquinas de juguetes 🚂.

// Han creado un sistema de instrucciones simple y necesitan tu ayuda para construir un compilador que interprete estos símbolos.

// El compilador trabaja con un contador que inicialmente tiene un valor de 0. Las instrucciones modificarán el valor de este contador.

// Instrucciones del lenguaje de los elfos en base a símbolos:

// +: Incrementa en 1 el valor del contador.
// *: Multiplica por 2 el valor del contador.
// -: Resta 1 al valor del contador.
// %: Marca un punto de retorno. No modifica el contador.
// <: Vuelve atrás una vez a la última instrucción con el símbolo % que haya visto. Si no hay un % previo, no hace nada.
// ¿: Inicia un bloque condicional que se ejecuta si el contador es mayor a 0.
// ?: Finaliza un bloque condicional.
// Crea una función compile que reciba un string con las instrucciones del lenguaje y devuelve el resultado de ejecutarlas. Aquí tienes algunos ejemplos:

// compile('++*-') // 3
// // (1 + 1) * 2 - 1 = 3

// compile('++%++<') // 6
// // 1 + 1 + 1 + 1 + 1 + 1 = 6

// compile('++<--') // 0
// // 1 + 1 - 1 - 1 = 0

// compile('++¿+?') // 3
// // 1 + 1 + 1 = 3

// compile('--¿+++?') // -2
// // - 1 - 1 = -2

console.log(compile('++*-')) // 3
// (1 + 1) * 2 - 1 = 3

console.log(compile('++%++<')) // 6
// 1 + 1 + 1 + 1 + 1 + 1 = 6

console.log(compile('++<--')) // 0
// 1 + 1 - 1 - 1 = 0

console.log(compile('++¿+?')) // 3
// 1 + 1 + 1 = 3

console.log(compile('--¿+++?')) // -2
// - 1 - 1 = -2
console.log(compile('--¿+++?+++¿--?')) // -1

console.log(compile('<<<<<<+<<<<<+%')) // 2

console.log(compile('')) // 0

//-------------------------------------Solution

// 120 pts: 2895 ops/s, complexity: 12
function compile(code) {
    let x = 0
    let count = 0
    let lastReturn = -1
    while (x <= code.length - 1) {
        let c = code[x]
        switch (c) {
            case '+':
                count++
                x++
                break;
            case '*':
                count = count * 2
                x++
                break
            case '-':
                count--
                x++
                break
            case '%':
                lastReturn = x
                x++
                break
            case '<':
                if (lastReturn >= 0) {
                    code = code.substring(0, x) + code.substring(x + 1)
                    x = lastReturn + 1
                    lastReturn = -1
                } else {
                    x++
                }
                break
            case '¿':
                if (count <= 0) {
                    x = code.substring(x).indexOf('?') + x
                } else {
                    x++
                }
                break
            case "?":
                x++
                break
            default:
                break;
        }
    }
    return count
}