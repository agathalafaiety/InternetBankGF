const salvarDadosDoBancoNoLocalStorage = () => {
  const bancoAtual = pegarDadosDoLocalStorage()
  if(!bancoAtual){
    const usuario = new Usuario("Banco GF", 30, 'I', 'internetbank-gf@hotmail.com', '123.456.789-10')
    const contas = [new Conta(0001, 1234, 0, usuario)]
    const agencias = [new Agencia(0001, contas)]
    const banco = new Banco('Internet Bank GF', agencias)
    salvarDadosNoLocalStorage('internetBank-GF', banco)
  }
}

const pegarDadosDoLocalStorage = () => {
  return JSON.parse(localStorage.getItem('internetBank-GF'))
}

const salvarDadosNoLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const criarAgencia = (conta) =>{
  const bancoAtual = pegarDadosDoLocalStorage()
  const numeroDaAgencia = bancoAtual.agencias.length + 1
  const listaDeContas = [formatarConta(conta, 0001)]
  const novaAgencia = new Agencia(numeroDaAgencia, listaDeContas)
  bancoAtual.agencias.push(novaAgencia)
  salvarDadosNoLocalStorage("internetBank-GF", bancoAtual)
  return {
    agencia: novaAgencia, 
    conta: formatarConta(conta, 0001)
  }
}

const formatarConta = (conta, numeroDaConta) =>{
  const novoUsuario = new Usuario(
      conta.nome,
      conta.idade,
      conta.sexo,
      conta.email,
      conta.cpf
     )
  const novaConta = new Conta(numeroDaConta, conta.senha, 0, novoUsuario)
  return novaConta
}

const salvarConta = (conta) => {
  try {
    const bancoAtual = pegarDadosDoLocalStorage()
    const ultimaAgencia = bancoAtual.agencias[bancoAtual.agencias.length - 1]
    const contas = ultimaAgencia.contas
    const novaConta = formatarConta(conta, contas.length + 1)
    if(contas.length == 9999){
      criarAgencia(conta)
    }else{
      bancoAtual.agencias[bancoAtual.agencias.length - 1].contas.push(novaConta)
    }
    salvarDadosNoLocalStorage("internetBank-GF", bancoAtual)

    return {
      agencia: bancoAtual.agencias[bancoAtual.agencias.length - 1], 
      conta: novaConta
    }

  } catch(erro) {
    console.log(erro)
    throw "Houve um erro ao criar a conta: " + erro
  }
}