const cartas = document.querySelectorAll('.card')
let carta1 = 0
let carta2 = 0
let x = 0
let carta1num = 0
let carta2num = 0
let numsSalvos = []

function teste(num) {
    if(x == 0 && !numsSalvos.includes(num)) {
        carta1 = cartas[num]
        carta1num = num
        carta1.classList.add('animation')
        x++
    } else if(x != 0 && carta1 !== cartas[num] && !numsSalvos.includes(num)) {
        carta2 = cartas[num]
        carta2num = num
        carta2.classList.add('animation')

        if(carta1.innerHTML === carta2.innerHTML) {
            console.log('correto')
            carta1 = 0
            carta2 = 0
            numsSalvos.push(carta1num,carta2num)
        }else {
            carta1.classList.remove('animation')
            carta2.classList.remove('animation')
        }

        x = 0 
    }

    console.log(numsSalvos)
}