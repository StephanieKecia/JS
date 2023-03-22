function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    //var hora = new Date()
    //hora.getHours()   HORA COMPLETA
    var data = new Date()
    var hora = data.getHours()
    //var hora = 18
    if (hora > 0 && hora < 12){
        msg.innerHTML = ('Bom dia!')
        img.src = 'fotomanha.png'
        document.body.style.background = 'darkyellow'
    }else if(hora > 12 && hora < 18){
        msg.innerHTML = ('Boa tarde!')
        img.src = 'fototarde.png'
        document.body.style.background = 'orange'
    }else{
        msg.innerHTML = ('Boa noite!')
        img.src = 'fotonoite.png'
        document.body.style.background = 'black'
    }
}