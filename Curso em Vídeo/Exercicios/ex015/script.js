function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if(fano.value.length == 0 || fano.value > ano){
    window.alert('ERRO')
   }else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    //var img = document.createElement('img')
    //img.setAttribute('id','foto')
    
    if(fsex[0].checked){
        genero = 'Homem'
        //if (idade >= 0 && idade < 10){
            //criança
            //img.setAttribute('src','fotomenino.png') 
        //}else if (idade < 21){
            //jovem
            //img.setAttribute('src','fotojovem.png')  
        //}
    }else if(fsex[1].checked){
        genero = 'Mulher'
    }
   }
   res.style.textAlign = 'center'
   res.innerHTML = `Identificamos um ${genero} com ${idade} anos!`
   //res.appendChild(img)
}