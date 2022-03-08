function Converter() {
    const $input = document.querySelector("#valor");
    const $valorconvertido = document.querySelector("#valorConvertido");
  
    let distancia = Number($input.value);
    let tempo = distancia/299792;
  
    $valorconvertido.innerHTML = "<b><br><br>" + "Você levaria " + tempo.toFixed(6) + " segundos para<br>chegar ao destino.";
  }
  
  // Problemas
  //
  // conversor quilometro x anos luz
  // conversor temperaturas
  //

  //VALOR QUILEMETROS
  //VALOR EM SEGUNDOS
  