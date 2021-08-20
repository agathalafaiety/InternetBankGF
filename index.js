
salvarDadosDoBancoNoLocalStorage();
const bancoCadastrado = pegarDadosDoLocalStorage()
  
function criarConta() {
  window.location.href = "Cadastro/index.html"
}

function acessar() {
  const erros = verificarDados()
  if (erros.length > 0) {
    erros.forEach(erro => {
      document.getElementById(erro.id).innerHTML = erro.message
      document.getElementById(erro.id.substring(0, erro.id.length - 5)).classList.add("input-error")
    })
  } else {
    alert("Login liberado")
  }
}

function verificarDados() {
  var agenciaDigitada = document.getElementById("agencia").value
  var contaDigitada = document.getElementById("conta").value
  var senhaDigitada = document.getElementById("senha").value
  var agenciaEncontrada
  var contaEncontrada
  var erros = []

  agenciaEncontrada = bancoCadastrado.agencias.find(
    agencia => agenciaDigitada == agencia.numero)

  if (!agenciaEncontrada) {
    erros.push({
      id: "agenciaError",
      message: 'Agencia nao encontrada, digite novamente.'
    })
  }

  contaEncontrada = agenciaEncontrada?.contas.find
    (conta => contaDigitada == conta.numero)

  if (!contaEncontrada) {
    erros.push({
      id: "contaError",
      message: 'Conta nao encontrada, digite novamente.'
    })
  }

  if (senhaDigitada != contaEncontrada?.senha) {
    erros.push({
      id: "senhaError",
      message: 'Senha invalida, digite novamente'
    })
  }

  return erros
}