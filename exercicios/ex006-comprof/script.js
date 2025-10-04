function gerartabuada(){
let num = document.getElementById("textn")
let tab = document.getElementById("seltab")

if(num.value.length == 0){
  alert("por favor digite um numero")
} else{
    // F AZER A CONVERSAO DE STRING PAR NUMERO
    let n = Number(num.value)
     let c = 1 
     tab.innerHTML=""//isto limpa a tela
     while(c<=10){
     // agora vo criar novo elemento html
     let item = document.createElement("option") 
     // criar elemento dentro de option
     item.text = `${n} * ${c} = ${n*c}`
     // para linguagens bankend como php e essencial adicionar value...
     item.value = `tab${c}`

     // Agora para aparecer e:
     tab.appendChild(item)
     c++
}
}   
}
