const senha = document.querySelector('#senha');
const proxPagina = document.querySelector('#prox_pagina');

const inputSenha = document.querySelector('#input_senha');
const inputAnchor = document.querySelector('#input_anchor')

const proximo = document.querySelector('#proximo');
const proximoA = document.querySelector('#proximo a');

const indicadorReposta = document.querySelector('#comecar_divs > span');

inputSenha.focus();

inputSenha.addEventListener('keyup', function (evt) {
    console.log(inputSenha.value)

    if(inputSenha.value == senha.getAttribute('title')) {
        inputAnchor.setAttribute('href', proxPagina.getAttribute('title'));

        setTimeout(() => {
            proximo.style.backgroundColor = "limegreen";
            proximoA.style.backgroundColor = "limegreen";
    
            indicadorReposta.textContent = "VOCÊ ACERTOU!";
            indicadorReposta.style.color = "limegreen";
        }, 200);
    } else {
        inputAnchor.setAttribute('href', '#');
        indicadorReposta.textContent = "DESVENDOU?";
        indicadorReposta.style.color = "#00bab5";
        
        proximo.style.backgroundColor = "#00bab5";
        proximoA.style.backgroundColor = "#00bab5";
    }
});

inputAnchor.addEventListener('click', function() {

    if(inputSenha.value == senha.getAttribute('title')) {
        inputAnchor.setAttribute('href', proxPagina.getAttribute('title'));
        proximo.style.backgroundColor = "limegreen"
        proximoA.style.backgroundColor = "limegreen"
    } else {
        proximo.style.backgroundColor = "#E44"
        proximoA.style.backgroundColor = "#E44"
        inputSenha.value = ""
    }
})

const revelar = document.querySelector('#revelar_senha div');
const respostactnr = document.querySelector('#resposta_ctnr');

let senhaShowing = false;

revelar.addEventListener('click', function() {
    if(senhaShowing == false) {
        senhaShowing = true;
        respostactnr.style.opacity = 1;
        respostactnr.style.visibility = 'visible';
        respostactnr.style.transform = 'translateY(0)'
    } else {
        senhaShowing = false;
        respostactnr.style.opacity = 0;
        respostactnr.style.visibility = 'hidden';
        respostactnr.style.transform = 'scale(0.1) translateY(2rem)'
    }
})