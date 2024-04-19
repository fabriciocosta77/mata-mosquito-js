let altura = 0
let largura = 0
let vidas = 1
let tempo = 10
let nivel = window.location.search
let criaMosquitoTempo = 1500


nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000
} else if (nivel === 'impossivel') {
    criaMosquitoTempo = 500
}


function ajustaTamanho() {
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustaTamanho()

let cronometro = setInterval(function() {
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(cria_mosquito)
        window.location.href = 'vitoria.html'
    } else { 
        document.getElementById('cronometro').innerHTML = tempo}}, 1000) 

function posAleatoria() {

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if(vidas > 3) {
            window.location.href = 'gameover.html'
        } else {
            document.getElementById('vida' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        }
    }

    let posX = Math.floor(Math.random() * largura) - 90
    let posY = Math.floor(Math.random() * altura) - 90

    posX = posX < 0 ? 0 : posX
    posY = posY < 0 ? 0 : posY

    console.log(posX, posY)

    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posX + 'px'
    mosquito.style.top = posY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function tamAleatorio() {
    let classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}