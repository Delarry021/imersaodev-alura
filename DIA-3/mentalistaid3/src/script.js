const $secret_number = parseInt(Math.random() * 11);
var $cont = 5;

function Chutar() {
  const $chute = parseInt(document.querySelector("#valor").value);
  const $resultado = document.querySelector("#resultado");

  if ($cont >= 0) {
    if ($chute >= 0 && $chute <= 10) {
      if ($chute == $secret_number) {
        $resultado.innerHTML = "<b><br><br><br>Parabens, você acertou!";
      } else if ($chute > $secret_number) {
        $resultado.innerHTML =
          "<b><br><br><br>Errou, o número digitado é maior que o resultado. Você possui " +
          $cont +
          " tentativas";
        $cont--;
      } else {
        $resultado.innerHTML =
          "<b><br><br><br>Errou, o número digitado é menor que o resultado. Você possui " +
          $cont +
          " tentativas";
        $cont--;
      }
    } else
      $resultado.innerHTML = "<b><br><br><br>Digite um número de 0 até 10!";
  }
}

//estabelecer um numero de tentativas
//
//mostrar que o numero é maior ou menor doq era
