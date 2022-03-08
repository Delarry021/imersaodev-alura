const $button = document.querySelector('button');
const $input = document.querySelector('input');
const $media = document.querySelector('#media');
const $aprovada = document.querySelector('#aprovada');
const $registros = document.querySelector('#registros');

let total = 0;
let quantidade = 0;
let media = 0;
let aprovada = 'Não';

function handleClick(event) {

    event.preventDefault();
    
    const nota = Number($input.value);

    if (quantidade < 4)
    {
        if (nota >= 0 && nota <= 10 && nota !== '') {
        
            total += nota;
            quantidade++;
    
            media = total / quantidade;
    
            if (media >= 6) {
                aprovada = "SIM";
            } else aprovada = "NÃO";
        
            $media.textContent = media.toFixed(2);
            $aprovada.textContent = aprovada;
            $registros.insertAdjacentHTML("beforeend", `<li>${nota}</li>`);
    
        }
    }
}

$button.addEventListener('click', handleClick);