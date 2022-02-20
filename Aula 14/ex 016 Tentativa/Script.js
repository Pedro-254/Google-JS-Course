

function contar() {
    var iniciotxt = document.getElementById('inicio')
    var fimtxt = document.getElementById('fim')
    var passotxt = document.getElementById('passo')
    var res = document.getElementById('res')
    
  if (iniciotxt.value.length == 0 || fimtxt.value.length == 0 || passotxt.value.length == 0) {
    res.innerHTML = 'Impossivel contar!'  
    window.alert(`[ERRO] Faltam dados`) 
      
 }else {
                                                                 
    var c = Number(iniciotxt.value)
    var fim = Number(fimtxt.value)
    var passo = Number(passotxt.value)
        
     
    if (passo <= 0) {
        window.alert('Passo invalido, considerando passo "1" ')
        passo = 1
    } // resolvendo passo = 0


        res.innerHTML = 'Contando:<br/>'
    
    if (c < fim) {
        
    
    while (c <= fim) {
        
        res.innerHTML += `${c},`
        var c = c + passo
    } //contagem decrescente
    } else {
        while (c >= fim) {
        
            res.innerHTML += `${c},`
            var c = c - passo
        } //contagem crescente
    }

    res.innerHTML += `Fim!`
 // codigo de contagem
                                                             
} // PROBLEMA -> se for muito grande fica feio
}