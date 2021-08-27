var agenciaEncontrada
var contaEncontrada

const usuarioLogado = pegarDadosDoLocalStorage("usuario-logado")
if (usuarioLogado) {
    window.location.href = "AreaLogada/index.html"
}

salvarDadosDoBancoNoLocalStorage();
const bancoCadastrado = pegarDadosDoLocalStorage("internetBank-GF")

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
        salvarDadosNoLocalStorage("usuario-logado", {
            agencia: agenciaEncontrada,
            conta: contaEncontrada
        })
        window.location.href = "AreaLogada/index.html"
    }
}

function verificarDados() {
    var agenciaDigitada = document.getElementById("agencia").value
    var contaDigitada = document.getElementById("conta").value
    var senhaDigitada = document.getElementById("senha").value

    var erros = []

    agenciaEncontrada = bancoCadastrado.agencias.find(
        agencia => agenciaDigitada == agencia.numero)

    if (!agenciaEncontrada) {
        erros.push({
            id: "agenciaError",
            message: 'Agencia nao encontrada, digite novamente.'
        })
    }

    contaEncontrada = agenciaEncontrada ? .contas.find(conta => contaDigitada == conta.numero)

    if (!contaEncontrada) {
        erros.push({
            id: "contaError",
            message: 'Conta nao encontrada, digite novamente.'
        })
    }

    if (senhaDigitada != contaEncontrada ? .senha) {
        erros.push({
            id: "senhaError",
            message: 'Senha invalida, digite novamente'
        })
    }

    return erros
}