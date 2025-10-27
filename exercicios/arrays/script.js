let compras = ['Arroz','Feijão','Óleo']
 compras.push('Macarrão')
 compras.unshift('Sal')
 compras.pop()

if(compras.includes('feijão')){
    console.log('Fejão está na lista')
} else{
    console.log('Feijão não está na lista')
}
console.log(compras)