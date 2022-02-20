function calcular(){
    var peso = document.getElementById('peso')
    var altura = document.getElementById('altura')
    var idade = document.getElementById('idade')
    var res = document.getElementById('res')
    var estado = document.getElementById('estado')

    var p = Number(peso.value)
    var a = Number(altura.value)
    var i = Number(idade.value)

    var imc = p / (a*a)
    var Fimc = imc.toFixed(0)

    res.innerHTML = `Seu IMC é ${Fimc} Kg/m2`

if (i >= 0 && i < 18) {

    if (imc >= 0 && imc < 15) {
        //Magro
        estado.innerHTML = '<p> Sua condição atual é de Magreza. </p>'
        } else if ( imc < 22) {
        //normal
        estado.innerHTML = '<p> Sua condição atual é Normal. </p>'
        } else if ( imc < 25){
        //sobrepeso
        estado.innerHTML = '<p> Sua condição atual é de Sobrepeso. </p>'
        } else{
        //obeso
        estado.innerHTML = '<p> Sua condição atual é de Obesidade. </p>'
        }
    
        var pesomin = (15 * p) / imc //calculo do peso minimo
        var pesomax = (22 * p) / imc //calculo do peso max
        var Fpesomin = pesomin.toFixed(0)
        var Fpesomax = pesomax.toFixed(0)
        estado.innerHTML += `Seu peso ideal seria entre ${Fpesomin} Kg e ${Fpesomax} Kg `
        
    

} else if (i < 60) {
    if (imc >= 0 && imc < 18.5) {
        //Magro
        estado.innerHTML = '<p> Sua condição atual é de Magreza </p>'
    } else if ( imc < 25) {
        //normal
        estado.innerHTML = '<p> Sua condição atual é Normal </p>'
    } else if ( imc < 30){
        //sobrepeso
        estado.innerHTML = '<p> Sua condição atual é de Sobrepeso </p>'
    } else{
        //obeso
        estado.innerHTML = '<p> Sua condição atual é de Obesidade </p>'
    }
    
        var pesomin = (18.5 * p) / imc //calculo do peso minimo
        var pesomax = (25 * p) / imc //calculo do peso max
        var Fpesomin = pesomin.toFixed(0)
        var Fpesomax = pesomax.toFixed(0)
        estado.innerHTML += `Seu peso ideal seria entre ${Fpesomin} Kg e ${Fpesomax} Kg `
        
    
} else {
    if (imc >= 0 && imc < 22) {
        //Magro
        estado.innerHTML = '<p> Sua condição atual é de Magreza </p>'
    } else if ( imc < 27) {
        //normal
        estado.innerHTML = '<p> Sua condição atual é Normal </p>'
    } else if ( imc < 29){
        //sobrepeso
        estado.innerHTML = '<p> Sua condição atual é de Sobrepeso </p>'
    } else{
        //obeso
        estado.innerHTML = '<p> Sua condição atual é de Obesidade </p>'
    }
    
        var pesomin = (22 * p) / imc //calculo do peso minimo
        var pesomax = (27 * p) / imc //calculo do peso max
        var Fpesomin = pesomin.toFixed(0)
        var Fpesomax = pesomax.toFixed(0)
        estado.innerHTML += `Seu peso ideal seria entre ${Fpesomin} Kg e ${Fpesomax} Kg `
    
    

}

} // fim da função
