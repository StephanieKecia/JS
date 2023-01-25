//funções
//chamada / parâmentro / ação / retorno
//mãe(chamada) entrega dinheiro(parâmetro) p filho comprar(ação) leite(retorno) na mercearia.
//ações são chamadas ou decorrência de algum evento.

function parimp(n){
    if(n%2==0){
        return 'par'
    } else{
        return 'impar'
    }
}

let res = parimp(12)
console.log(res)
//console.log(parimp(12))
//let v = function(x)

//Recursividade - chamando uma função dentro dela mesmo
/* TIPO 2
function fatorial (n){
    if (n==1){
        return 1
    }else{
        return n * fatorial(n-1)
    }

TIPO 1
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}*/