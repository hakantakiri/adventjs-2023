// En el taller de Santa 🎅, algunos mensajes navideños han sido 
// escritos de manera peculiar: las letras dentro de los paréntesis 
// deben ser leídas al revés

// Santa necesita que estos mensajes estén correctamente formateados. 
// Tu tarea es escribir una función que tome una cadena de texto y 
// revierta los caracteres dentro de cada par de paréntesis, eliminando 
// los paréntesis en el mensaje final.

// Eso sí, ten en cuenta que pueden existir paréntesis anidados, 
// por lo que debes invertir los caracteres en el orden correcto.

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

console.log(decode('((nta)(sa))'))

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus



// 270 pts: 2308 ops/s, complexity: 3
function decode(message) {
    let i = message.indexOf('(')
    while (i < message.length) {
        if (message[i] == ')') {
            let x = -1 + i - message.substring(0, i)
            .split('')
            .reverse()
            .join('')
            .indexOf('(')
            message = message.replace(
                message.substring(x, i + 1),
                message.substring(x + 1, i)
                .split('').reverse().join('')
            )
            i=x
        }
        i++
    }
    return message
}

// 250 pts: 2629 ops/s, complexity: 5 || MADE WITH CHATGPT
// function decode(message) {
//     const chars = message.split('');
//     const stack = [];
//     for (let i = 0; i < chars.length; i++) {
//       if (chars[i] === '(') {
//         stack.push(i);
//       } else if (chars[i] === ')') {
//         let start = stack.pop();
//         let end = i;
//         while (start < end) {
//           const temp = chars[start];
//           chars[start] = chars[end];
//           chars[end] = temp;
//           start++;
//           end--;
//         }
//       }
//     }
//     return chars.join('').replace(/[()]/g, '');
//   }


// 260 pts: 2278 ops/s, complexity: 4 || MADE WITH CHATGPT
// function decode(message) {
//     let stack = [''];
//     let insideParentheses = false;
  
//     for (const char of message) {
//       if (char === '(') {
//         stack.push('');
//         insideParentheses = true;
//       } else if (char === ')') {
//         const reversed = stack.pop().split('').reverse().join('');
//         stack[stack.length - 1] += reversed;
//         insideParentheses = false;
//       } else {
//         insideParentheses
//           ? (stack[stack.length - 1] += char)
//           : (stack[stack.length - 1] += char);
//       }
//     }
  
//     return stack[0];
// }

// 190 pts: 2037 ops/s, complexity: 11
// function decode(message) {
//     let s  = []
//     let l = 0
//     for (const c of message) {
//         if( l === 0){
//             if(!'()'.includes(c)){
//                 s.push(c)
//             }
//             if(c == '('){
//                 l = 1
//                 s.push([])
//             }
//         }else {
//             if( l === 1){
//                 if(!'()'.includes(c)){
//                     s[s.length-1].unshift(c)
//                 }
//                 if(c == '('){
//                     l = 2
//                     s[s.length-1].unshift([])
//                 }
//                 if(c == ')'){
//                     l = 0
//                 }
//             }else{
//                 if( l === 2){
//                     if(!'()'.includes(c)){
//                         s[s.length-1][0].push(c)
//                     }
//                     if(c == ')'){
//                         l = 1
//                     }
//                 }
//             }
//         }
//     }
//     return s.flat(2).join('')
// }

// 250 pts: 2484 ops/s, complexity: 5
// function decode(message) {
//     let i = 0
//     let y = -1
//     let prevy= -1
//     while (i < message.length) {
//         if(i>y && message[i] === '('){
//             prevy = y
//             y = i
//         }
//         if (message[i] === ')') {
//             message = message.replace(
//                 message.substring(y, i + 1),
//                 message.substring(y + 1, i)
//                 .split('').reverse().join('')
//             )
//             i = y
//             y=prevy
//         }
//         i++
//     }
//     return message
// }


// 270 pts: 2137 ops/s, complexity: 3
// function decode(message) {
//     let i = 0
//     while (i < message.length) {
//         if (message[i] == ')') {
//             let coord = [-1 + i - message.substring(0, i)
//                 .split('')
//                 .reverse()
//                 .join('')
//                 .indexOf('('), i
//             ]
//             message = message.replace(
//                 message.substring(coord[0], coord[1] + 1),
//                 message.substring(coord[0] + 1, coord[1])
//                 .split('').reverse().join('')
//             )
//             i=0
//         }
//         i++
//     }
//     return message
// }

// 260 pts: 2352 ops/s, complexity: 4
// function decode(message) {
//     function findPair() {
//         const y = message.indexOf(')')
//         if (y < 0) return null
//         return [-1 + y - message.substring(0, y)
//             .split('')
//             .reverse()
//             .join('')
//             .indexOf('('), y
//         ]
//     }
//     let coord = findPair()
//     while (coord) {
//         message = message.replace(
//             message.substring(coord[0], coord[1] + 1),
//             message.substring(coord[0] + 1, coord[1])
//             .split('').reverse().join('')
//         )
//         coord = findPair(message)
//     }
//     return message
// }



// 230 pts: 2223 ops/s, complexity: 7 
// function decode(message) {
//     function findPair(m) {
//         let p=-1
//         for (let i = 0; i < m.length; i++) {
//             if(m[i] === '(' && i>p) p=i
//             if(m[i] === ')') return [p, i]
//         }
//     }

//     let coord = findPair(message)
//     while (coord) {
//         message = message.replace(
//             message.substring(coord[0], coord[1] + 1),
//             message.substring(coord[0] + 1, coord[1])
//             .split('').reverse().join('')
//         )
//         coord = findPair(message)
//     }
//     return message
// }

// 260 pts: 2303 ops/s, complexity: 4
// function decode(message) {
//     function findPair(m){
//                 const y = m.indexOf(')')
//                 if(y<0) return null
//                 return [-1+y-m.substring(0,y)
//                     .split('')
//                     .reverse()
//                     .join('')
//                     .indexOf('('), y]
//             }

//     let coord = findPair(message)
//     while(coord){
//         message =  message.replace(
//             message.substring(coord[0], coord[1]+1),
//             message.substring(coord[0]+1, coord[1]).split('').reverse().join('')
//             )
//         coord = findPair(message)
//     }
//     return message
// }


// 260 pts: 2200 ops/s, complexity: 4
// function decode(message) {
//     function findPair(m){
//         const y = m.indexOf(')')
//         if(y<0) return null
//         return [-1+y-m.substring(0,y)
//             .split('')
//             .reverse()
//             .join('')
//             .indexOf('('), y]
//     }

//     let coord = findPair(message)
//     while(coord){
//         message =  message.substring(0, coord[0]) + 
//         message.substring(coord[0]+1, coord[1]).split('').reverse().join('') + 
//         message.substring(coord[1]+1, message.length)
//         coord = findPair(message)
//     }
//     return message
// }

// 220 pts: 2336 ops/s, complexity: 7
// function decode(message) {
//     function findPair(m){
//         let i = 0
//         let x = -1
//         while(i<m.length){
//             if(m[i] === '(' && i>x ){
//                 x = i
//             }
//             if(m[i] === ')'){
//                 return [x,i]
//             }
//             i++
//         }
//         return null
//     }

//     let coord = findPair(message)
//     while(coord){
//         message =  message.substring(0, coord[0]) + 
//         message.substring(coord[0]+1, coord[1]).split('').reverse().join('') + 
//         message.substring(coord[1]+1, message.length)
//         coord = findPair(message)
//     }
//     return message

// 240 pts: 2500 ops/s, complexity: 6
// function decode(message) {
//     function findPair(m){
//         let i= m.indexOf('(')
//         if(i<0) return null
//         let j = m.indexOf('(', i+1)
//         let p = m.indexOf(')')
//         if(j>i && j<p) i=j
//         return [i,p]
//     }
//     let coord = findPair(message)
//     while(coord){
//         message =  message.substring(0, coord[0]) + 
//         message.substring(coord[0]+1, coord[1]).split('').reverse().join('') + 
//         message.substring(coord[1]+1, message.length)
//         coord = findPair(message)
//     }
//     return message
// }