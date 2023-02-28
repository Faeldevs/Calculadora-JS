function insert(n){
   let numero = document.getElementById('resultado').innerHTML 
   document.getElementById('resultado').innerHTML = numero + n
}

// Limpar os numeros ao clicar (AC)
function clean(){
    document.getElementById('resultado').innerHTML = ''
}

// Apagar por unidade (CE)
function back(){
    let apagar = document.getElementById('resultado').innerHTML 
    document.getElementById('resultado').innerHTML = apagar.substring(0, apagar.length -1)
}

// Calcular e criar um resultado
function calcular(){

    let resultado = document.getElementById('resultado').innerHTML
    if (resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    } else {
        alert('Preencha os campos')
    }
}