const bancoCadastrado = pegarDadosDoLocalStorage();
var erros = [];
var nomeDigitado;
var cpfDigitado;
var emailDigitado;
var idadeDigitada;
var senhaDigitada;
var confirmacaoDigitada;
var sexoSelecionado;

const criarConta = () => {
  const novaConta = {
    nome: nomeDigitado,
    cpf: cpfDigitado,
    email: emailDigitado,
    idade: idadeDigitada,
    senha: senhaDigitada,
    sexo: sexoSelecionado,
  };
  try {
    const resposta = salvarConta(novaConta);
    document.getElementById("form-container").classList.add("hide");
    document.getElementById("sucesso").classList.remove("hide");
    document.getElementById("agenciaDaConta").innerHTML = (
      "0000" + resposta.agencia.numero
    ).slice(-4);
    document.getElementById("numeroDaConta").innerHTML = (
      "0000" + resposta.conta.numero
    ).slice(-4);
  } catch (error) {
    alert(error);
  }
};

function irParaLogin() {
  window.location.href = "../index.html";
}

const validarCpf = () => {
  cpfDigitado = document.getElementById("cpf").value;
  var contaEncontrada;

  bancoCadastrado.agencias.forEach((agencia) => {
    if (agencia.contas.find((conta) => cpfDigitado == conta.usuario.cpf)) {
      contaEncontrada = agencia.contas.find(
        (conta) => cpfDigitado == conta.usuario.cpf
      );
    }
  });

  if (contaEncontrada) {
    erros.push["cpf"];
    document.getElementById("cpfError").innerHTML =
      "CPF já foi cadastrado por outro usúario, digite outro CPF";
  } else {
    erros = erros.filter((erro) => erro !== "cpf");
    document.getElementById("cpfError").innerHTML = "";
  }
};

const selecionarSexo = () => {
  sexoSelecionado = document.getElementById("sexo").value;
};

const digitarSenha = () => {
  senhaDigitada = document.getElementById("senha").value;
};

const validarEmail = () => {
  emailDigitado = document.getElementById("email").value;
  var contaEncontrada;

  bancoCadastrado.agencias.forEach((agencia) => {
    if (agencia.contas.find((conta) => emailDigitado == conta.usuario.email)) {
      contaEncontrada = agencia.contas.find(
        (conta) => emailDigitado == conta.usuario.email
      );
    }
  });

  if (contaEncontrada) {
    erros.push["email"];
    document.getElementById("emailError").innerHTML =
      "Email já foi cadastrado por outro usuário, digite outro email";
  } else {
    erros = erros.filter((erro) => erro !== "email");
    document.getElementById("emailError").innerHTML = "";
  }
};

const validarSenha = () => {
  senhaDigitada = document.getElementById("senha").value;
  confirmacaoDigitada = document.getElementById("confirmacaoSenha").value;
  if (senhaDigitada != confirmacaoDigitada) {
    erros.push("senha");
    document.getElementById("confirmacaoSenhaError").innerHTML =
      "As senhas não conferem, digite novamente.";
  } else {
    erros = erros.filter((erro) => erro !== "senha");
    document.getElementById("confirmacaoSenhaError").innerHTML = "";
  }
};

const validarNome = () => {
  nomeDigitado = document.getElementById("nome").value;
  if (nomeDigitado.length <= 2) {
    erros.push["nome"];
    document.getElementById("nomeError").innerHTML =
      "Nome inválido, digite novamente";
  } else {
    erros = erros.filter((erro) => erro !== "nome");
    document.getElementById("nomeError").innerHTML = "";
  }
};

const validarIdade = () => {
  idadeDigitada = document.getElementById("idade").value;
  if (idadeDigitada < 18) {
    erros.push["idade"];
    document.getElementById("idadeError").innerHTML =
      "A idade mínima é 18 anos";
  } else {
    errors = erros.filter((erro) => erro !== "idade");
    document.getElementById("idadeError").innerHTML = " ";
  }
};
