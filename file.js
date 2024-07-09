// Entrada de Dados Pontuação
let Resultado1 = document.getElementById('selectMenu1')
let Resultado2 = document.getElementById('selectMenu2')
let Resultado3 = document.getElementById('selectMenu3')
let Resultado4 = document.getElementById('selectMenu4')
let ResultadoErrado = document.getElementById('optionErrada')

let elementoInputResultado = document.getElementById('Resultado')


// Saída de Dados
function MostrarValoresSelect() {
    elementoInputResultado.value = Number(Resultado1.value) + Number(Resultado2.value) + Number(Resultado3.value) + Number(Resultado4.value)

   if (elementoInputResultado.value == 20) {
    alert("Parabéns! Você acertou todas as perguntas.")
 }

    else if (elementoInputResultado.value >= 1 && elementoInputResultado.value <= 19) {

    alert("Tente novamente! Você não acertou todas as perguntas.")
 }

    else if (elementoInputResultado.value == 0) {
      alert("Tente novamente! Alguma pergunta está sem resposta.")
    }
}
