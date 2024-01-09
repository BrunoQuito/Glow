function começou() {

 var pergunta = window.prompt('Qual meu número?')
 
 var troca = window.document.getElementById('troca')

if (pergunta < 75){
  troca.innerText = `Você falou  o ${pergunta}, meu número é maior`
}else if (pergunta > 75){
  troca.innerHTML = `Você falou o ${pergunta}, meu número é menor`
}else if (pergunta == 75){ 
  troca.innerText = `Você acertou, meu número era 75`
 
}

}
