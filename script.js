const message = document.getElementById("message");
const entrada = document.getElementById("entrada");
const attempts = document.getElementById("attempts");
const startButton = document.getElementById("startButton");
const testButton = document.getElementById("testButton");

const codigoCorreto = 12345;
let tempoRestante = 10;
let timer = 0

startButton.addEventListener("click", iniciarJogo);
testButton.addEventListener("click", testarCodigo);

function iniciarJogo() {
    startButton.disabled = true;
    entrada.disabled = false;
    entrada.value = "";

    timer = setInterval(function () {
        tempoRestante =  tempoRestante -1
        time.textContent = tempoRestante 

        if(tempoRestante === 0){
        clearInterval(timer)
        message.textContent = "bommmm";  
           
        }
    }, 1000);
}

function testarCodigo() {
    const codigoDigitado = entrada.value;

    if (codigoDigitado == codigoCorreto) {
        
        clearInterval(timer)
        message.textContent = "UFA! Você parou a bomba.";
        clearInterval(timer)
        
    } else {
        message.textContent = "Código incorreto. Continue tentando!";
       
    }
}
