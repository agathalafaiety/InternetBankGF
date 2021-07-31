salvarDadosNoLocalStorege();
const banco = pegarDadosNoLocalStorege();

function criarConta() {
  window.location.href = "Cadastro/index.html"
}

function acessar() {
  var contasComSaldoMaiorQue500 = [];
  bancoCadastrado.agencias.forEach((agencia) => {
    let contasEncontradas = agencia.contas.filter(
      (conta) => conta.saldo >= 500
    );
    contasEncontradas.forEach((contaEncontrada) => {
      contasComSaldoMaiorQue500.push(contaEncontrada);
    });
  });
  console.log(contasComSaldoMaiorQue500);

  var sexoF = [];
  bancoCadastrado.agencias.forEach((agencia) => {
    let contasEncontradas = agencia.contas.filter(
      (conta) => (conta.usuario.sexo = "F")
    );
    contasEncontradas.forEach((contaEncontrada) => {
      sexoF.push(contaEncontrada);
    });
  });
  console.log(sexoF);

  const erros = verificarDados();
  if (erros.length > 0) {
    erros.forEach((erro) => {
      document.getElementById(erro.id).innerHTML = erro.message;
      document
        .getElementById(erro.id.substring(0, erro.id.length - 5))
        .classList.add("input-error");
    });
  } else {
    alert("Login liberado");
  }
}

function verificarDados() {
  var agenciaDigitada = document.getElementById("agencia").value;
  var contaDigitada = document.getElementById("conta").value;
  var senhaDigitada = document.getElementById("senha").value;
  var agenciaEncontrada;
  var contaEncontrada;
  var erros = [];

  agenciaEncontrada = bancoCadastrado.agencias.find(
    (agencia) => agenciaDigitada == agencia.numero
  );

  if (!agenciaEncontrada) {
    erros.push({
      id: "agenciaError",
      message: "Agencia nao encontrada, digite novamente.",
    });
  }

  contaEncontrada = agenciaEncontrada?.contas.find(
    (conta) => contaDigitada == conta.numero
  );

  if (!contaEncontrada) {
    erros.push({
      id: "contaError",
      message: "Conta nao encontrada, digite novamente.",
    });
  }

  if (senhaDigitada != contaEncontrada?.senha) {
    erros.push({
      id: "senhaError",
      message: "Senha invalida, digite novamente",
    });
  }

  return erros;
}
