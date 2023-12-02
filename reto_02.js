const gifts1 = ['tren', 'oso', 'pelota']
const materials1 = 'tronesa'

console.log(manufacture(gifts1, materials1)) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

console.log(manufacture(gifts2, materials2)) // ["puzzle"]

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

console.log(manufacture(gifts3, materials3)) // []

function manufacture(gifts, materials) {
    // Code here
    let set = new Set(materials)
    let result = []
    console.log('set: ', set)
    for (const gift of gifts) {
        let valid = true
        let ar = new Set(gift)
        for(const c of ar){
            console.log(`validating ${c} in ${Object.toString(set)}`)
            if(!set.has(c)){
                false
            }
        }
        if(valid) result.push(gift)
    }

    return result
}