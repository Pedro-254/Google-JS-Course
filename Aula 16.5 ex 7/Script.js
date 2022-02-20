let bank = []
let res = document.getElementById('resposta')
function add() {

    res.innerHTML = ''
    let ntxt = document.getElementById('numb')
    let registro = document.getElementById('reg')
    

    let num = Number(ntxt.value)


    if (ntxt.value.length == 0 || bank.indexOf(num) != -1 || num < 1 || num > 100) {
    window.alert('Valor invalido ou já existente.')
    }
    else{
   let item = document.createElement('option')
   item.text = `Valor ${num} adicionado`
   registro.appendChild(item) 

   bank.push(num)
    }

    ntxt.value = ''
    ntxt.focus()     // Focar no ntxt (que é a caixa de texto)
}

function Finalizar() {
    let tamtxt = bank.length
    let tam = Number(tamtxt)

    if (tam == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {
        res.innerHTML = `<p> Ao todo, temos ${tam} números cadastrados. <p/>`

        maior = bank[0]
        menor = bank[0]
        for (let pos in bank) {
            if (bank[pos] < menor) {
                menor = bank[pos]
            }
            if (bank[pos] > maior) {
                maior = bank[pos]
            }
        }
       res.innerHTML +=`<p> O maior número informado foi ${maior}. <p/>`
        res.innerHTML += `<p> O menor número informado foi ${menor}. <p/>`
    
        var soma = 0

        for (let I = 0; I < bank.length; I++) {
            soma += bank[I]
            
        }
    
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.<p/>`
        var média = soma/bank.length
        res.innerHTML += `<p> A média dos valores digitados é ${média}.<p/>`
    }

    }
