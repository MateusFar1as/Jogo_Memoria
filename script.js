const cartas = document.querySelectorAll('.card')
const cartasImg = document.querySelectorAll('.imgCards')
let carta1 = 0
let carta2 = 0
let x = 0
let carta1num = 0
let carta2num = 0
let numsSalvos = []
let ItemCartas = ['/imgs/Endymion.png','/imgs/Endymion.png','/imgs/Slifer.jpg','/imgs/Slifer.jpg','/imgs/Endymion.png','/imgs/Endymion.png','/imgs/Slifer.jpg','/imgs/Slifer.jpg']

function teste(num) {
    if(!numsSalvos.includes(num) && (!carta2 || !carta2.classList.contains('animation')) ){
        if(x == 0) {
            carta1 = cartas[num]
            carta1num = num
            carta1.classList.add('animation')
            x++
        } else if(x != 0 && carta1 !== cartas[num]) {
            carta2 = cartas[num]
            carta2num = num
            carta2.classList.add('animation')

            if(carta1.innerHTML === carta2.innerHTML) {
                console.log('correto')
                carta1 = 0
                carta2 = 0
                numsSalvos.push(carta1num,carta2num)
            }else {
                setTimeout(() => {
                    carta1.classList.remove("animation");
                    carta2.classList.remove("animation");
                }, 1400);
            }
            x = 0 
        }
    }
}

function randomizar() {
    ItemCartas.sort(() => Math.random() - 0.5)
    cartasImg.forEach((e,i) => {
        e.setAttribute('src', ItemCartas[i])
    })
    numsSalvos.length = 0
}

randomizar()