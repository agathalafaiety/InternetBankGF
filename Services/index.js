const bancoCadastrado = {
    logo: "Logo",
    nome: "Internet Bank GF",
    agencias: [
      {
        numero: 1212,
        contas: [
          {
            numero: 1234,
            senha: 4321,
            saldo: 500,
            usuario: {
              nome: "Paulo",
              idade: 30,
              sexo: "M",
              email: "paulo@gmail.com",
              cpf: "123.456.789-10",
            },
          },
          {
            numero: 6789,
            senha: 9876,
            saldo: 1000,
            usuario: {
              nome: "José",
              idade: 20,
              sexo: "M",
              email: "jose@gmail.com",
              cpf: "123.456.789-15",
            },
          },
        ],
      },
      {
        numero: 1213,
        contas: [
          {
            numero: 1234,
            senha: 4321,
            saldo: 400,
            usuario: {
              nome: "Ana",
              idade: 80,
              sexo: "F",
              email: "ana@gmail.com",
              cpf: "123.456.788-10",
            },
          },
        ],
      },
    ],
  };
  
  const salvarDadosNoLocalStorege = () => { localStorage.setItem("projeto-internetBankGF", JSON.stringify(bancoCadastrado)) }

  const pegarDadosNoLocalStorege = () => {
      return JSON.parse(localStorage.getItem('internetBank-GF'))
  }