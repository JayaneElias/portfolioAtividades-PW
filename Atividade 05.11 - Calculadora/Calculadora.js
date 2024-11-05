let valorAtual = '';
let operacaoAtual = ''; 
let resultado = null;

function digitar(numero) {
    if (resultado !== null) {
        valorAtual = numero;  
        resultado = null;   
    } else {
        valorAtual += numero; 
    }
    document.getElementById('display').value = valorAtual; 
}


function operacao(op) {
   
    if (valorAtual === '' || (operacaoAtual !== '' && valorAtual.slice(-1) === operacaoAtual)) {
        return;
    }

    if (resultado !== null) {
        valorAtual = resultado.toString(); 
        resultado = null; 
    }

    operacaoAtual = op; 
    valorAtual += op;    
    document.getElementById('display').value = valorAtual; 
}

function calcular() {
    if (valorAtual === '' || operacaoAtual === '') return; 
    let partes = valorAtual.split(operacaoAtual); 
    let num1 = parseFloat(partes[0]);
    let num2 = parseFloat(partes[1]);

    if (isNaN(num1) || isNaN(num2)) return; 

    switch (operacaoAtual) { 
        case '+':
            resultado = num1 + num2; 
            break;
        case '-':
            resultado = num1 - num2; 
            break;
        case '*':
            resultado = num1 * num2; 
            break;
        case '/':
            if (num2 === 0) { 
                alert("Não é possível dividir por zero!"); 
                limpar(); 
                return;
            }
            resultado = num1 / num2;
            break;
    }

    document.getElementById('display').value = resultado; 
    valorAtual = resultado.toString(); 
    operacaoAtual = ''; 
}


function limpar() {
    valorAtual = ''; 
    operacaoAtual = ''; 
    resultado = null; 
    document.getElementById('display').value = ''; 
}
