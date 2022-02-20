var c = 1    //contador

// Estrutura de repetição com teste logico no INICIO
while (c <= 10) {
    console.log(`Passo ${c}`)
    c++ //c = c + 1
}

// Estrutura de repetição com teste logico no FINAL
do {
    console.log(`Passo ${c}`)
    c++ //c = c + 1
} while (c <= 10);

//Estrutura de repetição com variavel de CONTROLE: 
//for (Inicio, Teste, Incremento){BLOCO}
for (let c= 0; c <= 10; c++) {
    console.log(`Passo ${c}`)
    
}