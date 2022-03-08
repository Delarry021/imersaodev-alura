function Converter() {
    const $input = document.querySelector("#valor");
    const $valorconvertido = document.querySelector("#valorConvertido");
  
    let valordolar = Number($input.value);
    let valorreal = valordolar * 5;
    let valoreuro = valordolar * 0.91;
    let valorbitcoin = valordolar * 0.000025;
  
    $valorconvertido.innerHTML = "<br>" + "R$ " + valorreal.toFixed(2) + "<br><br>" + "€ " + valoreuro.toFixed(2) + "<br><br>" + "₿ " + valorbitcoin.toFixed(5) + "<br>";
  }
  
  // Problemas
  //
  // conversor quilometro x anos luz
  // conversor temperaturas
  //
  