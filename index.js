const bancoCadastrado = {
  logo: 'Logo',
  nome: 'Internet Bank GF',
  agencias: [
    {
      numero: 1212,
      contas: [{
        numero: 1234,
        senha: 4321,
        saldo: 500,
        usuario: {
          nome: 'Paulo',
          idade: 30,
          sexo: 'M',
          email: 'paulo@gmail.com',
          cpf: '123.456.789-10'
        }
      },
      {
        numero: 6789,
        senha: 9876,
        saldo: 1000,
        usuario: {
          nome: 'José',
          idade: 20,
          sexo: 'M',
          email: 'jose@gmail.com',
          cpf: '123.456.789-15'
        }
      }
      ]
    },
    {
      numero: 1213,
      contas: [{
        numero: 1234,
        senha: 4321,
        saldo: 500,
        usuario: {
          nome: 'Ana',
          idade: 80,
          sexo: 'F',
          email: 'ana@gmail.com',
          cpf: '123.456.788-10'
        }
      }
      ]
    }
  ]
}

function acessar() {
  var sexoF = []
  bancoCadastrado.agencias.forEach(agencia => {
    let contasEncontradas = agencia.contas.filter( conta => conta.usuario.sexo = 'F')
    contasEncontradas.forEach(contaEncontrada => {
      sexoF.push(contaEncontrada)
    })
  })
  console.log(sexoF)
}

function acessar() {
  const erros = verificarDados()
  if () {
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

  agenciaEncontrada = bancoCadastrado.agencias.find( agencia => agenciaDigitada == agencia.numero)

  if (!agenciaEncontrada) {
    erros.push({
      id: "agenciaError",
      message: 'Agencia nao encontrada, digite novamente.'
    })
  }

contaEncontrada = agenciaEncontrada?.contas.find(conta => 
    contaDigitada == conta.numero) 

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