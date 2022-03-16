var carta1 = {
    nome: "Bulbasauro",
    atributos: {
      ataque: 3,
      defesa: 8,
      magia: 5
    }
  };
  
  var carta2 = {
    nome: "Charmander",
    atributos: {
      ataque: 7,
      defesa: 3,
      magia: 9
    }
  };
  
  var carta3 = {
    nome: "Squirtle",
    atributos: {
      ataque: 4,
      defesa: 8,
      magia: 7
    }
  };
  
  var cartas = [carta1, carta2, carta3];
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    do {
      var numeroCartaMaquina = parseInt(Math.random() * 3);
      var numeroCartaJogador = parseInt(Math.random() * 3);
    } while (numeroCartaJogador == numeroCartaMaquina);
  
    cartaMaquina = cartas[numeroCartaMaquina];
    cartaJogador = cartas[numeroCartaJogador];
  
    console.log(cartaJogador);
  
    document.querySelector("#btnSortear").disabled = true;
    document.querySelector("#btnJogar").disabled = false;
  
    exibirOpcoes();
  }
  
  function exibirOpcoes() {
    var opcoes = document.querySelector("#opcoes");
    var opcoesTexto = "";
  
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo;
    }
  
    opcoes.innerHTML = opcoesTexto;
  }
  
  function obtemAtributo() {
    var radioAtributos = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributo();
    var elementoResultado = document.querySelector("#resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
    if (valorCartaJogador > valorCartaMaquina) {
      elementoResultado.innerHTML = "VOCE VENCEU";
    } else if (valorCartaJogador < valorCartaMaquina) {
      elementoResultado.innerHTML = "VOCE PERDEU";
    } else elementoResultado.innerHTML = "EMPATE";
  
    console.log(cartaMaquina);
    console.log(atributoSelecionado);
    console.log(cartaJogador.atributos[atributoSelecionado]);
  }
  
  //DESAFIOS
  //SORTEAR UM ATRIBUTO CASO NENHUM FOR SELECIONADO
  //APARECER UMA IMAGEM QUANDO VOCE SORTEOU
  //BOTAO PRA JOGAR DENOVO
  