function gerartabuada(){
let num = document.getElementById("textn")
let tab = document.getElementById("seltab")
if(num.value.length == 0){
  alert("[erro] digite um numero")
} else{

//converter
let n = Number(num.value)
var c = 1
tab.innerHTML="" // serve para limpar
while(c<=10){
var item = document.createElement("option")
item.text = `${n} * ${c} = ${n*c}`
c++

tab.appendChild(item)
}

}

}