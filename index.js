<<<<<<< HEAD
salvarDadosNoLocalStorege();
const banco = pegarDadosNoLocalStorege();

function criarConta() {
  window.location.href = "Cadastro/index.html"
}

function acessar() {
  var contasComSaldoMaiorQue500 = [];
  bancoCadastrado.agencias.forEach((agencia) => {
    let contasEncontradas = agencia.contas.filter(
      (conta) => conta.saldo >= 500
    );
    contasEncontradas.forEach((contaEncontrada) => {
      contasComSaldoMaiorQue500.push(contaEncontrada);
    });
  });
  console.log(contasComSaldoMaiorQue500);

  var sexoF = [];
  bancoCadastrado.agencias.forEach((agencia) => {
    let contasEncontradas = agencia.contas.filter(
      (conta) => (conta.usuario.sexo = "F")
    );
    contasEncontradas.forEach((contaEncontrada) => {
      sexoF.push(contaEncontrada);
    });
  });
  console.log(sexoF);

  const erros = verificarDados();
  if (erros.length > 0) {
    erros.forEach((erro) => {
      document.getElementById(erro.id).innerHTML = erro.message;
      document
        .getElementById(erro.id.substring(0, erro.id.length - 5))
        .classList.add("input-error");
    });
  } else {
    alert("Login liberado");
=======
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
>>>>>>> 2677e25c53b108c5ad2179adb2f3a57c16c0b57e
  }
}

function verificarDados() {
<<<<<<< HEAD
  var agenciaDigitada = document.getElementById("agencia").value;
  var contaDigitada = document.getElementById("conta").value;
  var senhaDigitada = document.getElementById("senha").value;
  var agenciaEncontrada;
  var contaEncontrada;
  var erros = [];

  agenciaEncontrada = bancoCadastrado.agencias.find(
    (agencia) => agenciaDigitada == agencia.numero
  );
=======
  var agenciaDigitada = document.getElementById("agencia").value
  var contaDigitada = document.getElementById("conta").value
  var senhaDigitada = document.getElementById("senha").value
  var agenciaEncontrada
  var contaEncontrada
  var erros = []

  agenciaEncontrada = bancoCadastrado.agencias.find( agencia => agenciaDigitada == agencia.numero)
>>>>>>> 2677e25c53b108c5ad2179adb2f3a57c16c0b57e

  if (!agenciaEncontrada) {
    erros.push({
      id: "agenciaError",
<<<<<<< HEAD
      message: "Agencia nao encontrada, digite novamente.",
    });
  }

  contaEncontrada = agenciaEncontrada?.contas.find(
    (conta) => contaDigitada == conta.numero
  );
=======
      message: 'Agencia nao encontrada, digite novamente.'
    })
  }

contaEncontrada = agenciaEncontrada?.contas.find(conta => 
    contaDigitada == conta.numero) 
>>>>>>> 2677e25c53b108c5ad2179adb2f3a57c16c0b57e

  if (!contaEncontrada) {
    erros.push({
      id: "contaError",
<<<<<<< HEAD
      message: "Conta nao encontrada, digite novamente.",
    });
=======
      message: 'Conta nao encontrada, digite novamente.'
    })
>>>>>>> 2677e25c53b108c5ad2179adb2f3a57c16c0b57e
  }

  if (senhaDigitada != contaEncontrada?.senha) {
    erros.push({
      id: "senhaError",
<<<<<<< HEAD
      message: "Senha invalida, digite novamente",
    });
  }

  return erros;
}
=======
      message: 'Senha invalida, digite novamente'
    })
  }

  return erros
}
>>>>>>> 2677e25c53b108c5ad2179adb2f3a57c16c0b57e
