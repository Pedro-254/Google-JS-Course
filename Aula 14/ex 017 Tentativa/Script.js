function contar() {
    var numero = document.getElementById('numero')
    //var tabuada = document.getElementById('tabuada')
    let seltab = document.getElementById('seltab') // PEGANDO o select
    let Titulo = document.getElementById('Titulo')
if (numero.value.length == 0) {
    window.alert ('Por favor, digite um número!')
} else{
    var N = Number(numero.value)

    var M = 0

    seltab.innerHTML = ''   // LIMPANDO o select
    Titulo.innerHTML = `<p> Tabuada de ${N}: <p/>`

    while (M <= 10) {
        let item = document.createElement('option')          //CRIANDO um item (PARA) o select
        item.text = `${N} x ${M} = ${N*M}`                   // MODIFICANDO O TEXTO do item 
        item.value = `tab${M}`                               // DANDO UM VALOR para o item  -> serve mais para PHP aqui não tem muita utilidade
        //tabuada.innerHTML += `${N} x ${M} = ${N*M}<br/>`
        seltab.appendChild(item)                             //COLOCANDO esse item no select -> add ele como filho do seltab ou seja o select
        M++

    }
}
}
