const bancoCadastrado = pegarDadosDoLocalStorage();
var erros = [];
var nomeDigitado;
var cpfDigitado;
var emailDigitado;
var idadeDigitada;
var senhaDigitada;
var confirmacaoDigitada;
var sexoDigitado;

const criarConta = () => {
  const novaConta = {
    nome: nomeDigitado,
    cpf: cpfDigitado,
    email: emailDigitado,
    idade: idadeDigitada,
    senha: senhaDigitada,
    sexo: sexoSelecionado
  }
  salvarConta(novaConta)
}

const criarConta = () => {
  var idadeDigitada = document.getElementById("idade").value;
  var emailDigitado = document.getElementById("email").value;
  var sexoSelecionado = document.getElementById("sexo").value;
  var senhaDigitada = document.getElementById("senha").value;
  var confirmacaoDigitada = document.getElementById("confirmacaoSenha").value;
};

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

const validarEmail = () => {
  emailDigitado = document.getElementById("email").value;
  var contaEncontrada
  bancoCadastrado.agencias.forEach(agencia => {
    if (agencia.contas.find(conta => emailDigitado == conta.usuario.email)) {
      contaEncontrada = agencia.contas.find(conta => emailDigitado == conta.usuario.email)
    }
  })
  if (contaEncontrada) {
    erros.push["email"]
    document.getElementById("emailError").innerHTML = "email já foi cadastrado por outro usuário, digite outro email"
  } else {
    erros = erros.filter(erro => erro !== "email")
    document.getElementById("emailError").innerHTML = ''
  }	
}

const validarSenha = () => {
  let = senha, confirmacaoSenha;
  senhaDigitada = document.getElementById("senha").value; 
  if (senha != confirmacaoSenha) {
    erros.push["senha"];
    document.getElementById("senhaError").innerHTML = "As senhas não conferem, digite novamente.";
  } else {
    erros = erros.filter((erro) => erro !== "senha");
    document.getElementById("senhaError").innerHTML = "";
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
  idadeDigitado = document.getElementById("idade").value;
  if (idade <= 18) {
    erros.push["idade"];
    document.getElementById("idadeError").innerHTML =
      "A idade minima é 18 anos";
  } else {
    erros = erros.filter((erro) => erro !== "idade");
    document.getElementById("idadeError").innerHTML = "";
  }
};
