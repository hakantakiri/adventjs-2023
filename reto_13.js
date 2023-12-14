// Los elfos están preparando la víspera de Navidad y necesitan tu ayuda para calcular si van sobrados o no de tiempo ⏳.

// Para ello te pasan un array con la duración de cada entrega. El formato de la duración es HH:mm:ss, las entregas empiezan a las 00:00:00 y el límite de tiempo es 07:00:00.

// Tu función debe devolver el tiempo que les faltará o el tiempo que les sobrará para terminar las entregas. El formato de la duración devuelta debe ser HH:mm:ss.

// Si terminan antes de las 07:00:00, el tiempo restante hasta las 07:00:00 debe ser mostrado con un signo negativo. Por ejemplo, si sobran 1 hora y 30 minutos, devuelve -01:30:00

console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']))
// '-02:20:00'

console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']))
// '00:30:00'

console.log(calculateTime([
    '00:45:00',
    '00:45:00',
    '00:00:30',
    '00:00:30'
])) // '-05:29:00'

console.log(calculateTime(['02:00:00', '03:00:00', '02:00:00']))
// "00:00:00"

// 230 pts: 2140 ops/s, complexity: 5
function calculateTime(deliveries) {
    let time = 25200
    for (const t of deliveries) {
        time = time -
        Number(t.substring(6)) -
        Number(t.substring(3,5))*60 -
        Number(t.substring(0,2))*3600
    }
    let abs = Math.abs(time)
    return (time <= 0 ? '' : '-') + 
    (Math.floor((abs) / 3600)).toString().padStart(2, "0") 
    + ':' +
    (Math.floor(((abs) % 3600) / 60)).toString().padStart(2, "0") 
    + ':' +
    ((((abs) % 3600) % 60)).toString().padStart(2, "0")
}

// 130 pts: 1558 ops/s, complexity: 5
// function calculateTime(deliveries) {
//     let time = [0, 0, 0]
//     for (const t of deliveries) {
//         time[2] = time[2] + Number(t.split(':')[2])
//         time[1] = time[1] + Number(t.split(':')[1])
//         time[0] = time[0] + Number(t.split(':')[0])
//     }
//     let sum = (time[2] + time[1] * 60 + time[0] * 3600 )- 25200
//     time = [Math.floor((Math.abs(sum)) / 3600),
//             Math.floor(((Math.abs(sum)) % 3600) / 60),
//             (((Math.abs(sum)) % 3600) % 60)
//         ]
//     return (sum >= 0 ? '' : '-') + (time[0]).toString().padStart(2, "0") + ':' +
//         (time[1]).toString().padStart(2, "0") + ':' +
//         (time[2]).toString().padStart(2, "0")
// }