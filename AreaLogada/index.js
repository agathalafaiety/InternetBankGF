const usuarioLogado = pegarDadosDoLocalStorage("usuario-logado");
var valorDigitado;
var agenciaDigitada;
var contaDigitada;
var agenciaEncontrada;
var contaEncontrada;
const bancoAtual = pegarDadosDoLocalStorage("internetBank-GF");
var erros = [];

window.addEventListener('load',
    function() {
        document.getElementById("nome").innerHTML = usuarioLogado.conta.usuario.nome;
        document.getElementById("saldo").innerHTML = usuarioLogado.conta.saldo;
    });

const validarValor = () => {
    valorDigitado = document.getElementById("valor").value;
    if (usuarioLogado.conta.saldo < valorDigitado) {
        erros.push("valor");
        document.getElementById("valorError").innerHTML = "O seu saldo é insuficiente, digite outro valor";
    } else {
        erros = erros.filter(erro => erro != "valor");
        document.getElementById("valorError").innerHTML = "";
    }
};

const validarAgencia = () => {
    agenciaDigitada = document.getElementById("agencia").value;
    agenciaEncontrada = bancoAtual.agencias.find(
        agencia => agenciaDigitada == agencia.numero);

    if (!agenciaEncontrada) {
        document.getElementById("agenciaError").innerHTML = "Agencia não encontrada, digite novamente.";
        erros.push("agencia");
    } else {
        document.getElementById("agenciaError").innerHTML = "";
        erros = erros.filter(erro => erro != "agencia");
    }
};

const validarConta = () => {
    contaDigitada = document.getElementById("conta").value;
    contaEncontrada = agenciaEncontrada ? .contas.find(conta => contaDigitada == conta.numero);
    if (!contaEncontrada) {
        document.getElementById("contaError").innerHTML = "Agencia não encontrada, digite novamente.";
        erros.push("conta");
    } else {
        document.getElementById("contaError").innerHTML = "";
        erros = erros.filter(erro => erro != "conta");
    }
};

const transferir = () => {
    if (erros.length == 0 && agenciaDigitada && contaDigitada && valorDigitado) {
        try {
            bancoAtual.agencias.find(agencia => agencia.numero == usuarioLogado.agencia.numero)
                .contas.find(conta => conta.numero == usuarioLogado.conta.numero).saldo -= parseFloat(valorDigitado);

            bancoAtual.agencias.find(agencia => agencia.numero == agenciaDigitada)
                .contas.find(conta => conta.numero == contaDigitada).saldo += parseFloat(valorDigitado);

            salvarDadosNoLocalStorage("internetBank-GF", bancoAtual);

            alert("Transferencia feita com sucesso!");
        } catch (error) {
            alert("Ocorreu um erro ao transferir: " + error);
        }

    }
};














bancoAtual.agencias.find(agencia => agencia.numero == agenciaDigitada)
    .contas(conta => conta.numero == contaDigitada).saldo += valorDigitado;