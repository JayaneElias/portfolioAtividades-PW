function Resp01() {
    // Solicita o ano de nascimento do usuário
    const AnoAtual = parseInt(prompt("Digite o ano atual:"));
    const AnoNascimento = parseInt(prompt("Digite o seu ano de nascimento:"));

    // Verifica se os inputs são números válidos
    if (isNaN(AnoAtual) || isNaN(AnoNascimento)) {
        alert("Por favor, insira apenas números.");
        return;
    }

    // Verifica se o ano atual é menor que o ano de nascimento
    if (AnoAtual < AnoNascimento) {
        alert("O ano atual não pode ser menor que o ano de nascimento!");
    }  else {
        // Calcula a idade
        const IdadeAtual = AnoAtual - AnoNascimento;

        // Exibe a idade
        alert(`Você terá ${IdadeAtual} anos.`);
    }
}

// Chama a função
Resp01();
