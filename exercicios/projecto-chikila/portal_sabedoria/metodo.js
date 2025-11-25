let data = [
    {nome:"jo", idade:22, activo:true, sal:2000, bonus:5},
     {nome:"lo", idade:23,activo:true, sal:2300, bonus:0}
]

const users = data.map((item) =>{
if (item.activo===true && item.sal<3000 && item.bonus===0) {
  item.sal+=500 
  item.bonus+=500 
}
return "ola "+ item.nome + " o teu salario passou agora pra "+item.sal+" kz  porque recebeste um bunus de "+item.bonus + " kz"
}

)
console.log(users)


let imgAtual = "fundo2.jpg";
 
let imgAnterior= "fundo1.jpg";

let contador = document.getElementById("contador")

function trocar() {
  document.getElementById("figura").src = imgAtual
  
  let aux = imgAtual
  imgAtual = imgAnterior
  
}

contador=Number(contador.value)
setInterval(() => {
  trocar()
  contador=0
 contador.innerHTML=contador++ 
}, 4000);

function somar() {
  for (let c = 0; c<10; c++) {
   
    
  }

}




