var carta1 = {
  nome: "Bulbasauro",
  atributos: {
    ATAQUE: 3,
    DEFESA: 8,
  }
};

var carta2 = {
  nome: "Charmander",
  atributos: {
    ATAQUE: 7,
    DEFESA: 3,
  }
};

var carta3 = {
  nome: "Squirtle",
  atributos: {
    ATAQUE: 4,
    DEFESA: 8,
  }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  
  var elementoResultado = document.querySelector("#resultado");
  elementoResultado.innerHTML = ""
  
  campoCarta = document.querySelector("#carta")
  cartasImagem = ["bulbasaur.png","charmander.png","squirtle.png"]

  do {
    numeroCartaMaquina = parseInt(Math.random() * 3);
    numeroCartaJogador = parseInt(Math.random() * 3);
  } while (numeroCartaJogador == numeroCartaMaquina);

  cartaMaquina = cartas[numeroCartaMaquina];
  cartaJogador = cartas[numeroCartaJogador];
  
  console.log(cartaJogador);

  document.querySelector("#btnSortear").disabled = true;
  document.querySelector("#btnJogar").disabled = false;

  campoCarta.innerHTML = "<img src='" + cartasImagem[numeroCartaJogador] + "'>";

  exibirOpcoes();
}


function exibirOpcoes() {
  var opcoes = document.querySelector("#opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      " <input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }

  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributo() {
  var radioAtributos = document.getElementsByName("atributo");
  
  for (var i = 0; i < radioAtributos.length; i++) {

    if (radioAtributos[i].checked){
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributo();
  var elementoResultado = document.querySelector("#resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador === undefined)
  {
    alert("Por favor, selecione um atributo!")
  } else if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "<h2>" + "VOCE VENCEU" + "</h2>";
    desativarTudo()
  } else if (valorCartaJogador < valorCartaMaquina) {
    elementoResultado.innerHTML = "<h2>" + "VOCE PERDEU" + "</h2>";
    desativarTudo()
  } else if (valorCartaJogador == valorCartaMaquina)
  {
    elementoResultado.innerHTML = "<h2>" + "EMPATE" + "</h2>";
    desativarTudo()
  }
}

function desativarTudo() {
  document.querySelector("#btnSortear").disabled = false;
  document.querySelector("#btnJogar").disabled = true;
  
  var opcoes = document.querySelector("#opcoes");
  var opcoesTexto = "";
  opcoes.innerHTML = opcoesTexto;

  campoCarta.innerHTML += "<img src='" + cartasImagem[numeroCartaMaquina] + "'>"
}
