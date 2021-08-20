const salvarDadosNoLocalStorage = () => {
  const usuario = new Usuario(
    "Banco GF",
    30,
    "I",
    "internetbank-gf@hotmail.com",
    "123.456.789-10"
  );
  const contas = [new Conta(0001, 1234, 0, usuario)];
  const agencias = [new Agencia(0001, contas)];
  const banco = new Banco("Internet Bank GF", agencias);
  localStorage.setItem("internetBank-GF", JSON.stringify(banco));
};

const pegarDadosDoLocalStorage = () => {
  return JSON.parse(localStorage.getItem("internetBank-GF"));
};

const criarAgencia = () => {
  const bancoAtual = pegarDadosDoLocalStorage();
  bancoAtual.agencias.push({
    numero: bancoAtual.agencias.length + 1,
    contas: [formatarConta(conta, 0001)],
  });
};

const pegarDadosDoLocalStorage = () => {
  return JSON.parse(localStorage.getItem("internetBank-GF"));
};

const salvarConta = (conta) => {
  try {
    const bancoAtual = pegarDadosDoLocalStorage();
    const contas = ultimaAgencia.conta;
    const ultimaAgencia = bancoAtual.filter(
      (agencia) => bancoAtual.agencias.lenght - 1
    );
    const agenciaAnalisada =
      bancoAtual.agencias[bancoAtual.agencias.lenght - 1];
    if (agenciaAnalisada == 9999) {
      criarAgencia(contas);
    } else {
      const conta = contas.push(bancoAtual.contas.lenght + 1);
      const pegarDadosDoLocalStorage = () => {
        return JSON.parse(localStorage.getItem("internetBank-GF"));
      };
    }
    return "Conta criada com sucesso!";
  } catch (erro) {
    return "Houve um erro ao criar a conta: " + erro;
  }
};
const formatarConta = (conta, numeroDaConta) => {
  const novoUsuario = (
    cpfDigitado,
    senhaDigitada,
    numeroDaConta,
    conta,
    idadeDigitada
  ) => {
    const novaConta = (senhaDigitada, novoUsuario) => {
      return novaConta;
    };
  };
};
