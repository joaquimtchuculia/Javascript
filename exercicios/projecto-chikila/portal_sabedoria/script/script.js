let estudante = document.querySelector('input#usuario')
let senha = document.querySelector('input#senha')
const estudanteReal = ["Salomão Fernandes", "Gutinho", "Miriam Quissúmua", "Blessing", "Elizandra Daniel", "Fabio Gomes", "Edvanio Conda", "Maria Muhongo", "Juliana", "Juliana " ]
const senhaReal = "SABEDORIA2026"
let res = document.querySelector('div#res')


function entrar() {
 if (estudante.value.length==0 && senha.value.length==0) {
  
 res.innerHTML='preencha todos os campos!'  
 res.style.color='red' 
 } else{
      
    
   if(estudanteReal.includes(estudante.value) && senha.value == senhaReal){
    localStorage.setItem("verificado","sim")
    res.style.color='green'
    res.innerHTML='Carregando...'
    
    setTimeout(() => {

      window.location.href = 'paginas/minhas_notas.html'
    }, 2000);
      setTimeout(() => {
      localStorage.removeItem("verificado")
      window.location.href="portal_colegio_sabedoria.html"
    }, 5000);
    
   } else{
    res.style.color='red'
    res.innerHTML='Dados incorrectos'
    
    


   }

 }  
}

let imgAtual = "imagens/IMG_9255.PNG"
   let imgAnterior= "imagens/9f4ecef1-4261-46c3-92cf-7fcfd2c441c7-1.jpg"
   let img3 = "imagens\ID 000001 Complexo Escolar Nossa Senhora da Sabedoria (244)-940-739-911.zip - 1.png"
   function trocar() {
    document.getElementById("figura").src = imgAtual
    
    let aux = imgAtual
      imgAtual = imgAnterior
      imgAnterior= img3
      img3 = aux

   }
   setInterval(() => {
    trocar()
   }, 5000);
  




