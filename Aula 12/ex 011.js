var agora = new Date()
var hora = agora.getHours()
console.log (`Agora são exatamente ${hora} hora(s)`)
if (hora <= 12 && hora >= 6) {
    console.log ('Bom dia!')
} else if (hora <= 18 && hora >= 13) {
    console.log ('Boa tarde!')
} else if(hora <= 24 && hora >= 19){
    console.log ('Boa noite!')
}else{
    console.log ('Boa madrugada!')
}