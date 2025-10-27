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
const cadastro = [1,2,3]
const cadastro1 = []
const cadastro2 = []
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
   let num = Number(fnum.value)
  // validar os campos
  if(nome.length ==0 || snome.length==0 || num.length==0){
   res.innerHTML= 'Operaçao nulla, tens de preencher todos os campos!'
  } else{
    if (cadastro.includes(num) && cadastro1.includes(nome) && cadastro2.includes(snome)) {
      res.innerHTML='usuario ja existe'
    } else{
     cadastro.push(num)
     cadastro1.push(nome)
     cadastro2.push(snome)
    res.innerHTML= `Parabens ${nome}  foste cadastrado com sucesso!`
  }
}
}










