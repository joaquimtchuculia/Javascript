function contar(){
let inicio = document.getElementById("inicio")
let fim = document.getElementById("fim")
let passo = document.getElementById("passo")
let resultado = document.getElementById("cont")
if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
  alert("[erro] Faltam dados para preencher")
} else{
var i = Number(inicio.value)
let f = Number(fim.value)
let p = Number(passo.value)
resultado.innerHTML="Contando"
if(i<f){
 
for(let c = i; c<=f; c+=p){

 resultado.innerHTML+=` ${c} \u{1f449}`   
}
} else{
   for(let c=i; c>=f; c-=p){
      resultado.innerHTML+=`${c} \u{1f449}`
   }
}
resultado.innerHTML+=`\u{1f3c1}`
}
}