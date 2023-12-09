// Los elfos están muy ocupados en el taller de Santa Claus organizando regalos 🎁 para la víspera de Navidad 🎄.

// El formato de entrada es especial, ya que indica el número de regalos y el tipo de regalo con letras de la a a la z. Por ejemplo, '66a11b' significa 66 regalos a y 11 regalos b.

// Los elfos tienen un sistema especial para organizar los regalos:

// Cada 10 regalos del mismo tipo se empaquetan en una caja, representada por {x}. Por ejemplo, 20 regalos tipo a se empaquetan en 2 cajas así: {a}{a}.
// Cada 5 cajas se apilan en un palé, representado por [x]. Por ejemplo, 10 cajas de a se apilan en 2 palés de esta manera: [a][a]
// Cualquier regalo adicional se coloca en una bolsa, representada por () y se colocan todas dentro. Por ejemplo 4 regalos de b se colocan en una bolsa así (bbbb)
// Los regalos luego se colocan en el siguiente orden: palés, cajas y bolsas. Y los regalos aparecen en el mismo orden que la cadena de entrada.

// Tu tarea es escribir una función organizeGifts que tome una cadena de regalos como argumento y devuelva una cadena representando el almacén.

const result1 = organizeGifts(`76a11b`)
console.log(result1)
// '[a]{a}{a}(aaaaaa){b}(b)'
console.log(organizeGifts("20a"))
console.log(organizeGifts("70b120a4c"))

/* Explicación:

  76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, resultando en 1 palé [a] (por las primeras 5 cajas), 2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

  11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b)

*/

// 10a = {a}
// 5{a} = [a]

// 130 pts: 1955 ops/s, complexity: 7
function organizeGifts(gifts) {
    let num = 0
    let line = ''
    let r = 0
    for(const c of gifts){
        if (isNaN(c)){
            r = Math.floor((num%50)%10)
            line = line
            +`[${c}]`.repeat(Math.floor(num/50))
            +`{${c}}`.repeat(Math.floor((num%50)/10))
            +(r>0 ? `(${c.repeat(r)})`:'')
        }
        num = isNaN(c)?0:num*10 + Number(c)
    }
    return line
}


// 130 pts: 1955 ops/s, complexity: 7
// function organizeGifts(gifts) {
//     let num = 0
//     let line = ''
//     let r = 0
//     for(const c of gifts){
//         if (isNaN(c)){
//             r = Math.floor(((num%50)%10))
//             line = line
//             +`[${c}]`.repeat(Math.floor(num/50))
//             +`{${c}}`.repeat(Math.floor((num%50)/10))
//             +(r>0 ? `(${c.repeat(r)})`:'')
//         }
//         num = isNaN(c)?0:num*10 + Number(c)
//     }
//     return line
// }

// 130 pts: 1525 ops/s, complexity: 7
// function organizeGifts(gifts) {
//     let num = 0
//     let gs = []
//     for(const c of gifts){
//         if (isNaN(c)) gs.push([c, num])
//         num = isNaN(c)?0:num*10 + Number(c)
//     }
//     let line = ''
//     let r = 0
//     for(const gift of gs){
//         r = Math.floor(((gift[1]%50)%10))
//         line = line
//         +`[${gift[0]}]`.repeat(Math.floor(gift[1]/50))
//         +`{${gift[0]}}`.repeat(Math.floor((gift[1]%50)/10))
//         +(r>0 ? `(${gift[0].repeat(r)})`:'')
//     }
//     return line
// }