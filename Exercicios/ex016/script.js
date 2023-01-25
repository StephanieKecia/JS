function calcular(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var iv = Number(inicio.value) 
    var fv = Number(fim.value)
    var pv = Number(passo.value)
    res.innerHTML = 'Contando... <br>'
    //iv.length não funciona
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Erro. Tente novamente!')
    }else 
        if (pv<=0){
            window.alert('Passo inválido! Considerando PASSO 1')
            pv = 1
        }
        if (iv<fv){
        while(iv<=fv){
            res.innerHTML += `${iv}  \u{1F449}`
            iv += pv
        }
        //for(let c = iv; c <= fv; c+= pv){
        //} cria a variável c no proprio for 
    } else {
        while(iv>=fv){
            res.innerHTML += `${iv}  \u{1F449}`
            iv -= pv
        }
    }
        //for(let c = iv; c >= fv; c-= pv){
        //} cria a variável c no proprio for 
    res.innerHTML +='Feito!'
}
    res.style.textAlign = 'center'


