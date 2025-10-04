function parimp(n) {
    if(n%2==0){
        return 'par'
    } else{
        return 'impar'
    }
}

function somar(n1,n2){
   return n1 + n2
}

let sub = function(n1,n2){
    return n1-n2
}

let mult = function(n1,n2){
 return n1 * n2
}

let divis = function(n1,n2){
    return n1/n2
}

let dobro = function(n){
    return n*2
}

let raiz = function(n){
    return n**2
}
/* Esta e considerada forma burra de apresentar o vector na tela
console.log(parimp(17))
console.log(somar(4,6))
console.log(mult(7,9))
console.log(dobro(12))
console.log(raiz(5))*/
let operacaoMAT=[parimp(5),  somar(5,2),sub(5,2), mult(5,2),divis(25,5), dobro(5), raiz(5)]
/* Esta e a forma tradicinal
for(c = 0; c<5; c++){
console.log(operacaoMAT[c])
}*/


   for(let c in operacaoMAT){
    console.log(operacaoMAT[c])
}