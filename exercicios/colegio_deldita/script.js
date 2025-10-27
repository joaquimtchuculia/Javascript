let estudante = document.querySelector('input#nome')
let senha = document.querySelector('input#senha')
let res = document.querySelector('div#res')

function entrar() {
 if (estudante.value.length==0 && senha.value.length==0) {
 res.innerHTML='preencha todos os campos!'   
 } else{
  
  let estudantes = ["Joaquim","Lauzzy"]  
   if(senha.value != "Deoldita"){
    res.style.color='red'
    res.innerHTML='Senha incorreta'
    
   } else{
    res.innerHTML='Login feito com sucesso'
    
    


   }

 }  
}






