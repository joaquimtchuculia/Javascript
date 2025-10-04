function contar(){
//pegar os dados
var inicio = document.getElementById("inicio")
var fim = document.getElementById("fim")
 var passo = document.getElementById("passo")
 var res = document.getElementById("cont")
 /* Validacao dos campos: 
Para validar uma determinada acao usamos os comando if e else*/
 if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert("[erro] faltam dados. Por favor preencha todos os campos com dados")
 } 
    
    
    else{
 
     // DECLARACAO DE NOVAS VARIAVEIS PARA O TESTE

    res.innerHTML = `Contando:`
    let ini = Number(inicio.value)
    let f = Number(fim.value)
    let pass = Number(passo.value)
     
    //CONSTRUIR O CEREBRO DO PROGRAMA
    if(pass == 0){
        res.innerHTML = "Desculpa nao consigo contar! <br> Digite um nuumero diferente de 0 no campo Passo"
    } else{
   if(ini<f){
    for(cont = ini; cont<=f; cont += pass ){
     res.innerHTML += ` ${cont} \u{1f449}`
     // Este realizara contagem Progressiva
  }
    } else {
    // Esta fara contagem regressiva
     for(cont = ini; cont>=f; cont -= pass){
        res.innerHTML += ` ${cont} \u{1f449}`
     }
    }

    }
  res.innerHTML += `\u{1f3c1}`


 }

}