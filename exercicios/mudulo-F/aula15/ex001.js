let num = ['joaquim','Lauzzy','Josivaldo','Laurindo']
num.push(1)
num.sort()
let pos = num.indexOf('Lauzzy')
if(pos==-1){
    console.log('Jovem nao encontrado')
} else{
    console.log('O Jovem selecionado encontra-se na posicao '+ pos)
}

/*for(let n in num){
    console.log('Esta empresa tem '+ num.length + ' funcionarios'+ 'onde o primeiro encontra-se na posicao '+ num[2])
}*/
