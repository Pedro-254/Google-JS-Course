var img = document.getElementById('foto')
var estado = 0
function ligar() {
        if (estado == 0) {

    img.src = 'ligada.jpg'

        }
}

function desligar() {
    if (estado == 0){
    img.src = 'desligada.jpg'
    }
}

function quebrar() {
    img.src = 'quebrada.jpg'
    estado = 1 
}

function trocar() {
    img.src = 'desligada.jpg'
    estado = 0
}