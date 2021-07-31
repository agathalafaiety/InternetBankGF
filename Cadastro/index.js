const bancoCadastrado = pegarDadosDoLocalStorege()
console.log(bancoCadastrado)

var nomeDigitado;
var cpfDigitado;
var idadeDigitada;
var emailDigitado;
var sexoDigitado;
var senhaDigitada;
var confirmacaoDigitada;

const validarCpf = (cpf) => {
  bancoCadastro.agencias.forEach(agencia => {
    const contaEncontrada = agencia.contas.find(conta => cpf === conta.usuario.cpf)
    if (contaEncontrada) {
      alert("CPF já foi cadastrado por outro usúario, digite outro CPF")
    }
  })
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

const validarNome = (nome) => {
  if(nome.length < 2 ){
    alert("Nome inválido, digite novamente")
  }
}

const validarIdade = (idade) => {
  if(idade < 18){
    alert("A idade minima é 18 anos")
  }
}