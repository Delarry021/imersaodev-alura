const $real = document.querySelector("#real");
const $euro = document.querySelector("#euro");
const $iene = document.querySelector("#iene");
const $bolivar = document.querySelector("#bolivar");
const $bitcoin = document.querySelector("#bitcoin");

function Converter() {
  const $input = document.querySelector("#valor");
  const $valorconvertido = document.querySelector("#valorConvertido");
  const $valordolar = Number($input.value);

  if ($real.checked) {
    dolarReal($valorconvertido, $valordolar);
  } else if ($euro.checked) {
    dolarEuro($valorconvertido, $valordolar);
  } else if ($iene.checked) {
    dolarIene($valorconvertido, $valordolar);
  } else if ($bolivar.checked) {
    dolarBolivar($valorconvertido, $valordolar);
  } else if ($bitcoin.checked) {
    dolarBitcoin($valorconvertido, $valordolar);
  }
}

function dolarReal($valorconvertido, $valordolar) {
  let valorreal = $valordolar * 5;
  $valorconvertido.innerHTML = "<br><br><br>" + "R$ " + valorreal.toFixed(2);
}

function dolarEuro($valorconvertido, $valordolar) {
  let valoreuro = $valordolar * 0.91;
  $valorconvertido.innerHTML = "<br><br><br>" + "€ " + valoreuro.toFixed(2);
}

function dolarIene($valorconvertido, $valordolar) {
  let valoriene = $valordolar * 117;
  $valorconvertido.innerHTML = "<br><br><br>" + "¥ " + valoriene.toFixed(2);
}

function dolarBolivar($valorconvertido, $valordolar) {
  let valorbolivar = $valordolar * 432485;
  $valorconvertido.innerHTML = "<br><br><br>" + "Bs " + valorbolivar.toFixed(2);
}

function dolarBitcoin($valorconvertido, $valordolar) {
  let valorbitcoin = $valordolar * 0.000025;
  $valorconvertido.innerHTML = "<br><br><br>" + "₿ " + valorbitcoin.toFixed(5);
}

//desafio maior: fazer varias funcoes pra cada conversao no conversor
//1.devolvendo o valor usando return
//2.colocar um radiobutton com os valores para conversao
