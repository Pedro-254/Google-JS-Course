var idade = 12

if (idade > 18 && idade <= 65) { 
    console.log ('Voto obrigatório')

} else {
    if (idade >= 16 && idade < 18) {
        console.log ('Voto opicional')
        
    } else {
        if (idade > 65) {
            console.log ('Voto opicional')
        } else {
            console.log ('Não vota')
            
        }
    }
}