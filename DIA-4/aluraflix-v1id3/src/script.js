function Pokemon() {
  const $exibir = document.querySelector("#exibir");

  const $lista = [
    "https://www.pokebeach.com/news/2022/02/Pokemon_Sprigatito_Poussacha_Felori.png",
    "https://www.pokebeach.com/news/2022/02/Pokemon_Quaxly_Coiffeton-Kwaks.png",
    "https://www.pokebeach.com/news/2022/02/Pokemon_Fuecoco_Chochodile_Krokel.png"
  ];

  const $nomes = ["SPRIGATITO", "QUAXLY", "FUECOCO"];

  for (var cont = 0 in $lista) {
    if (
      $lista[0] == $lista[1] ||
      $lista[0] == $lista[2] ||
      $lista[1] == $lista[2]
    ) {
      $exibir.innerHTML =
        "<h2>" +
        "COLOCOU DUAS IMAGENS IGUAIS" +
        "</h2>" +
        "<br>" +
        "<h2>" +
        "TENTE DENOVO!" +
        "</h2>";
    } else {
      document.getElementById("botao").style.display = "none";
      $exibir.innerHTML += "<img src=" + $lista[cont] + ">";
      $exibir.innerHTML += "<h2>" + $nomes[cont] + "</h2>";
    }
  }
}

//FAZER CM QUE NAO ENTRE FILMES REPETIDOS
//FAZER UM INPUT BUTTON QUANDO CLICAR APARECER O FILME
