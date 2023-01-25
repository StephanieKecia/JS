//switch(expressão){case valor 1:  break (OBRIGATÓRIO), case valor 2:  break (OBRIGATÓRIO), default: (tipo o else)  break (OBRIGATÓRIO)}
//só funciona com numero inteiros e strings

var agora = new Date()
var diaSem = agora.getDay()

console.log(diaSem)

switch(diaSem){
    case 0:
        console.log('Domingo')
        break //obrigatório
        case 1:
           console.log('Segunda')
           break
        case 2:
            console.log('Terça')
            break
        case 3:
            console.log('Quarta')
            break
        case 4:
            console.log('Quinta')
            break
        case 5:
            console.log('Sexta')
            break
        case 6:
            console.log('Sábado')
            break
}