function Resp02() {
    const Numero = parseInt(prompt("Digite algum número aleatório:"));

    if (isNaN(Numero)) {
        alert("Insira um número, não letras.");
        return; 
    }

    if (Numero % 2 === 0) {
        alert(`O número ${Numero} é par.`); 
    } else {
        alert(`O número ${Numero} é ímpar.`);
    }
}

Resp02();
