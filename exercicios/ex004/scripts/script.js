function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('textano')
var res = document.querySelector('div#res')
var img = document.createElement('img')
img.setAttribute('id','foto')
if(fano.value.length==0 || Number(fano.value) > ano){
    window.alert("Verifica os dados e tenta novamente!")
} else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
  var genero = '' 
   
  if (fsex[0].checked){
    genero = 'HOMEM'
    
  if(idade >=0 && idade <= 10){
     //crianca
    img.setAttribute('src', 'imagem/crianca-h.jpg')
    
  }
 else if( idade >= 11  && idade <= 25){
    //Jovem
    img.setAttribute('src','imagem/jovem-h2.jpg')
    
 } else if( idade <= 100){
    //Adulto
    img.setAttribute('src', 'imagem/adulto-h.jpg')
 } 
 else{
   // IDOSO

 } 




  } else if(fsex[1].checked){
    genero = 'MULHER'

    if(idade >=0 && idade <= 10){
     //crianca
    img.setAttribute('src', 'imagem/crianca-m.jpg')
    
  }
 else if( idade >= 11  && idade <= 25){
    //Jovem
    img.setAttribute('src','imagem/jovem-m2.jpg')
 } else if( idade < 100){
    //Adulto
    img.setAttribute('src', 'imagem/adulto-m.jpg')
 } 
 else{
   // IDOSO

 } 
  }
   
   res.innerHTML= `detectamos ${genero} com ${idade} anos!`
   res.appendChild(img)
} 




}


















