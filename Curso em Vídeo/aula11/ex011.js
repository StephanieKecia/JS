var idade = 66
if(idade < 16){
    console.log('Não vota')
} else if(idade < 18 || idade > 65){
    console.log('Voto opcional')
} else{
    console.log('Voto obrigatório')
}

//aula 12
var hora = agora.getHours()
console.log(`Agora é exatamente ${hora} horas`)

//switch(expressão){case valor 1:  break (OBRIGATÓRIO), case valor 2:  break (OBRIGATÓRIO), default: (tipo o else)  break (OBRIGATÓRIO)}