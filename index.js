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
    const erros = verificarDados()
    if (erros.length > 0) {
        for (let posicao = 0; posicao <= erros.length; posicao++) {
            alert(erros[posicao])        
        }
    } else {
        alert("Login Liberado")
    }
  }
  
  function verificarDados() {
    var agenciaDigitada
    var contaDigitada
    var senhaDigitada
    var agenciaEncontrada
    var contaEncontrada
    var erros = []
  
    for (let posicaoAtual = 0; posicaoAtual <= bancoCadastrado.agencias.length; posicaoAtual++) {
      if (agenciaDigitada == bancoCadastrado.agencias[posicaoAtual].numero) {
        agenciaEncontrada = bancoCadastrado.agencias[posicaoAtual]
      }
    }
  
    if (!agenciaEncontrada) {
      erros.push('Agencia nao encontrada, digite novamente.')
    }
  
    for (let posicaoAtual = 0; posicaoAtual <= agenciaEncontrada?.contas.length; posicaoAtual++) {
      if (contaDigitada == agenciaEncontrada.contas[posicaoAtual].numero) {
        contaEncontrada = agenciaEncontrada.contas[posicaoAtual]
      }
    }
  
    if (!contaEncontrada) {
      erros.push('Conta nao encontrada, digite novamente.')
    }
  
    if (senhaDigitada != contaEncontrada?.senha) {
      erros.push('Senha invalida, digite novamente') 
    }

    return erros
  }

