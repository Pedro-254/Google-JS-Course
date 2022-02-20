function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var msgboa = window.document.getElementById('msgboa')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12 ) {
        // bom dia
        img.src = 'Manhã.png'
        document.body.style.backgroundColor = '#deb684'
        msgboa.innerHTML = 'Bom dia!'
    } else if (hora >= 12 && hora <= 18){
        // boa tarde
        img.src = 'Tarde.png'
        document.body.style.backgroundColor = '#a5713f'
        msgboa.innerHTML = 'Boa Tarde!'
    } else {
        //boa noite
        img.src = 'Noite.png'
        document.body.style.backgroundColor = '#071c1f'
        msgboa.innerHTML = 'Boa Noite!'
    }
} 
