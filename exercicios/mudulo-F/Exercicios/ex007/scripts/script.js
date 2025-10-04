function adicionar() {
  let num = document.getElementById('textad')
  
let sel = document.getElementById('numeros')

if(num.value.length == 0){
  alert('erro, digite um número')
} else{
  let n = Number(num.value)
   sel.innerHTML =''
  for(let c = n ; c<=5; c ++){
    let item = document.createElement('option')
    item.text = `Numeros cadastrados${c}`
    sel.appendChild(item) 
   
  }










}
}























