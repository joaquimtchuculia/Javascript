let imgAtual = "imagens/estudante1.jpg"
   let imgAnterior= "imagens/9f4ecef1-4261-46c3-92cf-7fcfd2c441c7-1.jpg"
   let img3 = "imagens/estudante2.jpg"
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
  