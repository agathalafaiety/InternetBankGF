const salvarDadosNoLocalStorage = () => {
  const usuario = new Usuario("Banco GF", 30, 'I', 'internetbank-gf@hotmail.com', '123.456.789-10')
  const contas = [new Conta(0001, 1234, 0, usuario)]
  const agencias = [new Agencia(0001, contas)]
  const banco = new Banco('Internet Bank GF', agencias)
  localStorage.setItem('internetBank-GF', JSON.stringify(banco))
}

const pegarDadosDoLocalStorage = () => {
  return JSON.parse(localStorage.getItem('internetBank-GF'))
}

const criarAgencia = (conta) =>{

}

const salvarConta = (conta) => {
  try {
    return "Conta criada com sucesso!"
  } catch(erro) {
    return "Houve um erro ao criar a conta: " + erro
  }
}