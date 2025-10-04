function entrar() {
    let nav = document.querySelector('nav')
    let h1 = document.getElementById('h1')
    let img = document.querySelector('p.img')
    nav.style.display='block'
    h1.style.display='none'
    img.style.position='center'

}
function sair() {
    let nav = document.querySelector('nav')
    let h1 = document.getElementById('h1')
    let img = document.querySelector('p.img')
    nav.style.display='none'
    h1.style.display='block'
    
}

function inscrever() {
   let fnome = document.getElementById('nome') 
   let fsnome = document.getElementById('snome')
   let fnum = document.getElementById('num')
   let res = document.getElementById('res')
   res.style.color='skyblue'
   res.style.font='bold'
   res.style.font='Arial'
   //novas declaraçoes
   let nome = fnome.value
   let snome = fsnome.value
   let num = fnum.value
  // validar os campos
  if(nome.length ==0 || snome.length==0 || num.length==0){
   res.innerHTML= 'Operaçao nulla, tens de preencher todos os campos!'
  } else{
    res.innerHTML= `Parabens ${nome}  foste cadastrado com sucesso!`
  }




}









