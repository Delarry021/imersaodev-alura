function Converter() {
    const $input = document.querySelector("#valor");
    const $valorconvertido = document.querySelector("#valorConvertido");
  
    let valorceusius = Number($input.value);
    let valorkelvin = valorceusius + 273;
    let valorfahrenheit = (9*valorceusius/5)+32;
  
    $valorconvertido.innerHTML = "<b><br>" + "Celius para Kelvin " + valorkelvin.toFixed(1) + "K<br><br>" + "Celcius para Fahrenheit " + valorfahrenheit.toFixed(1) + "°F";
  }
  
  // Problemas
  //
  // conversor quilometro x anos luz
  // conversor temperaturas
  //
  