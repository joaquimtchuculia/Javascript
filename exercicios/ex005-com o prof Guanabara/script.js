function contar(){
    //Declararacao de variaveis que pegam os dados do HTML
let ini = document.getElementById("texti")
let fim = document.getElementById("textf")
let passo = document.getElementById("textp")
let res = document.getElementById("res")

//Validando os Campos
if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert("[erro] Faltam dados!")
} else{
    res.innerHTML = "Contando: "
    //Nova declaracao de variaveis para teste de repeticao 
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
     
    if(i<f){
    //contagem progressiva
    for(let c = i; c<=f; c += p){
        res.innerHTML += `${c} \u{1f449}`
    } 
   } else {
       //CONTAGEM REGRESSIVA
      for(let c = i; i>f; c -= p){
        res.innerHTML += `${c} \u{1f449}`
      }

    }
    res.innerHTML += `\u{1f3c1}`

}


}