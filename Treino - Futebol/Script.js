
function analise() {
var nometxt = document.getElementById('nome')
let Ptxt = document.getElementById('p')
let res = document.getElementById('res')

var nome = String(nometxt.value)
let P = Number(Ptxt.value) 

if (nome.length == 0 || P <= 0) {
    window.alert('Informações incorretas ou não suficientes, confira os dados e tente novamente!')
} else{
while (res.hasChildNodes()) {
    res.removeChild(res.lastChild);
}

for (let i = 0; i < P; i++) {

    res.appendChild(document.createTextNode('Partida ' + (i+1) +':'))
    res.appendChild(document.createElement('br'))

    res.appendChild(document.createTextNode("Impedimentos: "));
    var input = document.createElement('input')
    input.type = 'text'
    input.name = 'registro'
    input.id = `impedimentos${i}`
    res.appendChild(input)
    // colocando um break
    res.appendChild(document.createElement('br'))

    res.appendChild(document.createTextNode("Faltas: "));
    var input = document.createElement('input')
    input.type = 'text'
    input.name = 'registro'
    input.id = `faltas${i}`
    res.appendChild(input)
    res.appendChild(document.createElement('br'))

    res.appendChild(document.createTextNode("Cartões: "));
    var input = document.createElement('input')
    input.type = 'text'
    input.name = 'registro'
    input.id = `cartoes${i}`
    res.appendChild(input)
    res.appendChild(document.createElement('br'))

    res.appendChild(document.createTextNode(" Tempo de acréscimo: "));
    var input = document.createElement('input')
    input.type = 'text'
    input.name = 'registro'
    input.id = `acrescimo${i}`
    res.appendChild(input)
    res.appendChild(document.createElement('br'))
    res.appendChild(document.createElement('p'))
}

var btn = document.createElement('button');
btn.type = 'button';
btn.innerHTML = 'Estatística';
btn.id = 'est';
btn.onclick = function () {
    estatistica()
}
res.appendChild(btn)

}
}



function estatistica() {


let Ptxt = document.getElementById('p')
let P = Number(Ptxt.value) 
let Nimp = []
let Nfalt = []
let Ncart = []
let Nacr = []

for (let i = 0; i < P; i++) {

    var imp = Number(document.getElementById(`impedimentos${i}`).value)
    var falt = Number(document.getElementById(`faltas${i}`).value)
    var cart = Number(document.getElementById(`cartoes${i}`).value)
    var acr = Number(document.getElementById(`acrescimo${i}`).value)
    
    Nimp.push(imp)
    Nfalt.push(falt)
    Ncart.push(cart)
    Nacr.push(acr)

}

somaimp = 0
somafalt = 0
somacart = 0
somaacr = 0

for(var i = 0; i < Nimp.length; i++){
    somaimp += Nimp[i]
}
for(var i = 0; i < Nfalt.length; i++){
    somafalt += Nfalt[i]
}
for(var i = 0; i < Ncart.length; i++){
    somacart += Ncart[i]
}
for(var i = 0; i < Nacr.length; i++){
    somaacr += Nacr[i]
}

var mediaimp = (somaimp/P).toFixed(2)
var mediafalt = (somafalt/P).toFixed(2)
var mediacart = (somacart/P).toFixed(2)
var mediaacr = (somaacr/P).toFixed(2)

var nometxt = document.getElementById('nome')
var nome = String(nometxt.value)

    res.innerHTML = `<p>Estatísticas do juiz ${nome}: <p/>`
    res.innerHTML += ` <p> Impedimentos: ${mediaimp} <p/>`
    res.innerHTML += ` <p>Faltas: ${mediafalt}<p/>`
    res.innerHTML += `<p> Cartões: ${mediacart}<p/>`
    res.innerHTML += ` <p>Tempo de acréscimo: ${mediaacr}<p/>`

}