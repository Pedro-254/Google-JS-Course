var Bclaro = document.getElementById ('claro')
var Bescuro = document.getElementById ('escuro')

var txtimg = document.getElementById('foto') // pegando o local onde a imagem vai ser aplicada
var img = document.createElement('img') // criar elemento imagem
img.setAttribute('id', 'foto')          // Colocar um id na imagem


function ativarclaro() {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    img.setAttribute('src', 'foto-bebe-m.png') // setando a imagem para cada tipo de função
}

function ativarescuro() {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
    img.setAttribute('src', 'foto-bebe-f.png')  // setando a imagem para cada tipo de função
}

txtimg.appendChild(img) // Aplicar a imagem no local