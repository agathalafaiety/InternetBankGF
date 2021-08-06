const bancoCadastrado = pegarDadosDoLocalStorage()
var erros = [];
var nomeDigitado
var cpfDigitado

const criarConta = () => {
  var idadeDigitada = document.getElementById("idade").value;
  var emailDigitado = document.getElementById("email").value;
  var sexoSelecionado = document.getElementById("sexo").value;
  var senhaDigitada = document.getElementById("senha").value;
  var confirmacaoDigitada = document.getElementById("confirmacaoSenha").value;
}

const validarCpf = () => {
  cpfDigitado = document.getElementById("cpf").value;
  var contaEncontrada

  bancoCadastrado.agencias.forEach(agencia => {
    if (agencia.contas.find(conta => cpfDigitado == conta.usuario.cpf)) {
      contaEncontrada = agencia.contas.find(conta => cpfDigitado == conta.usuario.cpf)
    }
  })
  
  if (contaEncontrada) {
    erros.push["cpf"]
    document.getElementById("cpfError").innerHTML = 'CPF já foi cadastrado por outro usúario, digite outro CPF'
  } else {
    erros = erros.filter(erro => erro !== "cpf")
    document.getElementById("cpfError").innerHTML = ''
  }
}

function validarEmail(email) {
  bancoCadastrado.agencias.forEach(agencia => {
    const contaEncontrada = agencia.contas.find(conta => conta.usuario.email === email)
    if (contaEncontrada) {
      alert(" email ja foi utilizado por outro usúario, digite outro email")
    }
  })
}

const validarSenha = (senha, confirmacaoSenha) => {
  if (senha != confirmacaoSenha) {
    alert("As senhas não conferem, digite novamente.")
  }
}

const validarNome = () => {
  nomeDigitado = document.getElementById("nome").value;
  if (nomeDigitado.length <= 2) {
    erros.push["nome"]
    document.getElementById("nomeError").innerHTML = 'Nome inválido, digite novamente'
  } else {
    erros = erros.filter(erro => erro !== "nome")
    document.getElementById("nomeError").innerHTML = ''
  }
}

const validarIdade = (idade) => {
  if (idade < 18) {
    alert("A idade minima é 18 anos")
  }
}