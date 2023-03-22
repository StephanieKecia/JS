let num = [5,8,4]
num [3] = 6 // add item na chave indicada
num.push(7) // add item no final da array
num [4] = 9
console.log(`Os números são ${num}`)
num.length //comprimento
num.sort() //ordem crescente
num.indexOf(7) // procura em qual chave está o valor indicado
for(let pos = 0; pos<num.length; pos++){
    console.log(num[pos])
}

for(let pos in num){
    console.log(num[pos])
}