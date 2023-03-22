function calcular(){
    var num = document.querySelector('#nm')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else{
        var nm = (num.value)
        var i = 0
        tab.innerHTML=''//para limpar a lista
        while (i <= 10){
            var r = (nm*i)
            let item = document.createElement('option') //cria o item
            item.text += `${nm} x ${i} = ${r}`
            i++
            tab.appendChild(item) // acrescenta itens 
        }
    }
}