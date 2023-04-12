const cartas = document.querySelectorAll('.card')
const cartasImg = document.querySelectorAll('.imgCards')
let tentativasQuery = document.querySelector('h2')
let carta1 = 0
let cartaImg1 = 0
let carta2 = 0
let cartaImg2 = 0
let x = 0
let tentativas = 1
let carta1num = 0
let carta2num = 0
let numsSalvos = []
let ItemCartas = ['/imgs/Thunder.png','/imgs/Thunder.png','/imgs/exodia.png','/imgs/exodia.png','/imgs/background-dragon.png','/imgs/background-dragon.png','/imgs/Slifer.jpg','/imgs/Slifer.jpg']

function teste(num) {
    if(!numsSalvos.includes(num) && (!carta2 || !carta2.classList.contains('animation')) ){
        if(x == 0) {
            carta1 = cartas[num]
            carta1num = num
            cartaImg1 = cartasImg[num]
            carta1.classList.add('animation')
            cartaImg1.classList.add('animImg')
            x++
        } else if(x != 0 && carta1 !== cartas[num]) {
            carta2 = cartas[num]
            carta2num = num
            cartaImg2 = cartasImg[num]
            carta2.classList.add('animation')
            cartaImg2.classList.add('animImg')

            if(carta1.innerHTML === carta2.innerHTML) {
                console.log('correto')
                carta1 = 0
                carta2 = 0
                numsSalvos.push(carta1num,carta2num)
            }else {
                setTimeout(() => {
                    carta1.classList.remove("animation");
                    carta2.classList.remove("animation");
                    cartaImg1.classList.remove('animImg')
                    cartaImg2.classList.remove('animImg')
                }, 1400);
            }
            x = 0
            tentativasQuery.innerHTML = `Número de tentativas: ${tentativas++}`
        
            if(numsSalvos.length == 8){
                setTimeout(() => {
                    alert('teste')
                    randomizar()   
                },1000)
            }
        }
    }
}

function randomizar() {
    ItemCartas.sort(() => Math.random() - 0.5)
    cartasImg.forEach((e,i) => {
        e.setAttribute('src', ItemCartas[i])
        e.classList.remove('animImg')
    })
    cartas.forEach((e) => {
        e.classList.remove('animation')
    })
    numsSalvos.length = 0
    x = 0
    tentativas = 1
    tentativasQuery.innerHTML = `Número de tentativas: 0`
}

randomizar()