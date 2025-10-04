function gerartabuada(){
let num = document.getElementById("textn")
let tabuada = document.getElementById("seltab")
if(num.value.length==0){
  alert("[erro] Digite um numero!")
} else{

let n = Number(num.value)
tabuada.innerHTML=""
for(c=1; c<=10; c++){
let item = document.createElement("option")
item.text = `${n} x ${c} = ${n*c}`
item.value=`${c}` 
tabuada.appendChild(item)
}
}
}