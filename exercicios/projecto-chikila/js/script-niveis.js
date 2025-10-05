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

function login() {
   let fnome = document.getElementById('nome') 
   
   let fnum = document.getElementById('nif')
   let res = document.getElementById('res')
   res.style.color='skyblue'
   res.style.font='bold'
   res.style.font='Arial'
   //novas declaraçoes
   let nome = fnome.value
   let num = fnum.value
  // validar os campos
  if(nome.length ==0 || num.length==0){
   res.innerHTML= 'Operaçao nulla, tens de preencher todos os campos!'
  } else{
    res.innerHTML= `Bem-vindo de volta`
    
  }
}
function aplicar1() {
 let aplicar = document.querySelector('input#aplicar')
 let res = document.querySelector('div#res') 
 let comp = document.querySelector('input#comprovante') 
 res.style.color='skyblue'
  res.innerHTML='transação realizada com sucesso!<br>Aplicação do produto: 10.000kz<br>Estado:A processar...'
 }



function aplicar2() {
 let aplicar = document.querySelector('input#aplicar')
 let res = document.querySelector('div#res') 
 let comp = document.querySelector('input#comprovante') 
 res.style.color='skyblue'
  res.innerHTML='transação realizada com sucesso!<br>Aplicação do produto: 20.000kz<br>Estado:A processar...'
 

}

function aplicar3() {
 let aplicar = document.querySelector('input#aplicar')
 let res = document.querySelector('div#res') 
 let comp = document.querySelector('input#comprovante') 
 res.style.color='skyblue'
  res.innerHTML='transação realizada com sucesso!<br>Aplicação do produto: 30.000kz<br>Estado:A processar...'
 

}