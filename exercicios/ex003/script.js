function carregar(){

var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()

var hora = 12
msg.innerHTML = `Agora sao ${hora} horas`
if(hora >= 0 && hora <=12){
    img.src = 'back-phone.jpg'
    document.body.style.background = 'green'
    // BOM DIA 
 } else if ( hora >= 12 && hora <= 18 ){
    img.src = 'back-tablet.jpg'
    document.body.style.background = 'yellow'
    //BOA TARDE

 } else{
    img.src = 'back-pc.jpg'
    document.body.style.background = 'black'
    //BOA NOITE

 }


}