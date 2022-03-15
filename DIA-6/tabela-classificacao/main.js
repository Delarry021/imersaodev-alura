var vasco = {
  imagem:
    "https://logodownload.org/wp-content/uploads/2016/09/vasco-logo-1.png",
  nome: "Vasco",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var flamengo = {
  imagem:
    "https://logodownload.org/wp-content/uploads/2016/09/flamengo-logo-escudo-novo-1.png",
  nome: "Flamengo",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var fluminense = {
  imagem:
    "https://logodownload.org/wp-content/uploads/2016/09/fluminense-logo-escudo-1.png",
  nome: "Fluminense",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var botafogo = {
  imagem:
    "https://logodownload.org/wp-content/uploads/2016/11/botafogo-logo-escudo-1.png",
  nome: "Botafogo",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var madureira = {
  imagem:
    "https://logodownload.org/wp-content/uploads/2019/02/madureira-logo-escudo.png",
  nome: "Madureira",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var portuguesa = {
  imagem:
    "https://upload.wikimedia.org/wikipedia/commons/e/e5/Associa%C3%A7%C3%A3o_Atl%C3%A9tica_Portuguesa.png",
  nome: "Portuguesa-RJ",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var audax = {
  imagem:
    "https://upload.wikimedia.org/wikipedia/pt/2/2a/Escudo_Audax_Rio_2017.png",
  nome: "Audax-RJ",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var bangu = {
  imagem:
    "https://logodownload.org/wp-content/uploads/2019/02/bangu-logo-escudo.png",
  nome: "Bangu",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var novaiguacu = {
  imagem:
    "https://4.bp.blogspot.com/--3Mu7gBQ2_M/W94Hq1xhKPI/AAAAAAAAWn4/x65kNWpSagkA9_bdTYqGpINijsRo2ENxwCLcBGAs/s1600/nova-iguacu-rj-sombr-57972.png",
  nome: "Nova Iguaçu",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var voltaredonda = {
  imagem:
    "https://upload.wikimedia.org/wikipedia/en/d/df/Volta_Redonda_Futebol_Clube.png",
  nome: "Volta Redonda",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var boavista = {
  imagem:
    "https://1.bp.blogspot.com/-zCk5Fo0F8iE/Wj0ehVQmXDI/AAAAAAAAqmc/50zP2cnEXagAaUeXDxWiqlaUgmq0Dz5PQCLcBGAs/s1600/Boavista-Sport-Club-RJ.png",
  nome: "Boavista",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var resende = {
  imagem: "https://upload.wikimedia.org/wikipedia/pt/6/67/ResendeFCOL.png",
  nome: "Resende",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

vasco.pontos = calculaPontos(vasco);
flamengo.pontos = calculaPontos(flamengo);
flamengo.pontos = calculaPontos(fluminense);
flamengo.pontos = calculaPontos(botafogo);
flamengo.pontos = calculaPontos(madureira);
flamengo.pontos = calculaPontos(portuguesa);
flamengo.pontos = calculaPontos(audax);
flamengo.pontos = calculaPontos(bangu);
flamengo.pontos = calculaPontos(novaiguacu);
flamengo.pontos = calculaPontos(voltaredonda);
flamengo.pontos = calculaPontos(boavista);
flamengo.pontos = calculaPontos(resende);

var jogadores = [
  vasco,
  flamengo,
  fluminense,
  botafogo,
  madureira,
  portuguesa,
  audax,
  bangu,
  novaiguacu,
  voltaredonda,
  boavista,
  resende
];

function exibir(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr>";
    elemento += "<td>" + "<img src='" + jogadores[i].imagem + "'>" + "</td>";
    elemento += "<td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento +=
      "<td><button onClick='zerarTudo(" + i + ")'>Zerar</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibir(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibir(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibir(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calculaPontos(jogador);
  exibir(jogadores);
}

function zerarTudo(i) {
  var jogador = jogadores[i];
  jogador.derrotas = 0;
  jogador.vitorias = 0;
  jogador.pontos = 0;
  jogador.empates = 0;
  exibir(jogadores);
}
