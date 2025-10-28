let estudante = document.querySelector('input#nome')
let senha = document.querySelector('input#senha')
const estudanteReal = ["Joaquim", "Joaquim ", "Rita", "Rita ", "Marcos", "Marcos ", "Tchissola", "Tchissola ", "Juliana", "Juliana " ]
const senhaReal = "Deldita"
let res = document.querySelector('div#res')


function entrar() {
 if (estudante.value.length==0 && senha.value.length==0) {
  
 res.innerHTML='preencha todos os campos!'  
 body.style.color='red' 
 } else{
  
    
   if(estudanteReal.includes(estudante.value) && senha.value == senhaReal){
    res.style.color='green'
    res.innerHTML='Carregando...'
    
    setTimeout(() => {

      window.location.href = 'paginas/minhas_notas.html'
    }, 2000);
    
   } else{
    res.style.color='red'
    res.innerHTML='Dados incorrectos'
    
    


   }

 }  
}






