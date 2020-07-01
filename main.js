const preBg = document.querySelector('#pre_bg');


document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {
        preBg.style.visibility = 'hidden';
        preBg.style.opacity = 0;
    }
}


const dicaBt = document.querySelector('#dica');
const ajudaBt = document.querySelector('#ajuda');

const dicactnr = document.querySelector('#dica_ctnr');
const ajudactnr = document.querySelector('#ajuda_ctnr');


ajudactnr.innerHTML = '</span><div class="fechar"></div><span>Lembrando que, quando conseguir decifrar este documento e identificar alguma pista ou código secreto, clique em AVANÇAR e digite o código encontrado na página seguinte, que vai pedir uma senha.</span><span>Se seu palpite estiver certo, a página vai abrir e pode nos relevar mais informações! Se não estiver certo, vai continuar pedindo uma senha.</span><span>Volte e reexamine as informações até ter certeza do código correto, lembrando que as senhas são sempre em minúsculas, sem acentos e sem espaços, tá bom?</span><span>Caso precise de alguma ajuda, clique no botão <DICA> e poderemos lhe fornecer alguma informação útil.</span><span> Se não conseguir ou preferir ir para a próxima etapa diretamente, clique no botão <RESPOSTA> e lhe daremos a senha correta da página seguinte.'

let ajudaShowing = false;

ajudaBt.addEventListener('click', function() {
    toggleAjuda()
})

let dicaShowing = false;

dicaBt.addEventListener('click', function() {
    toggleDica()
})


const fechar = document.querySelectorAll('.fechar');

for (i = 0; i < fechar.length; ++i) {
    fechar[i].addEventListener('click', function() {
        ajudaShowing = false;
        ajudactnr.style.opacity = 0;
        ajudactnr.style.visibility = 'hidden';
        ajudactnr.style.transform = 'scale(0.1) translateY(2rem)';
        dicaShowing = false;
        dicactnr.style.opacity = 0;
        dicactnr.style.visibility = 'hidden';
        dicactnr.style.transform = 'scale(0.1) translateY(2rem)'
        if(respostactnr) {
            senhaShowing = false;
            respostactnr.style.opacity = 0;
            respostactnr.style.visibility = 'hidden';
            respostactnr.style.transform = 'scale(0.1) translateY(2rem)'
        }
    });
}

function toggleDica() {
    ajudaShowing = false;
    ajudactnr.style.opacity = 0;
    ajudactnr.style.visibility = 'hidden';
    ajudactnr.style.transform = 'scale(0.1) translateY(2rem)'
    if(dicaShowing == false) {
        dicaShowing = true;
        dicactnr.style.opacity = 1;
        dicactnr.style.visibility = 'visible';
        dicactnr.style.transform = 'translateY(0)'
    } else {
        dicaShowing = false;
        dicactnr.style.opacity = 0;
        dicactnr.style.visibility = 'hidden';
        dicactnr.style.transform = 'scale(0.1) translateY(2rem)'
    }
    if(respostactnr) {
        senhaShowing = false;
        respostactnr.style.opacity = 0;
        respostactnr.style.visibility = 'hidden';
        respostactnr.style.transform = 'scale(0.1) translateY(2rem)'
    }
}

function toggleAjuda() {
    dicaShowing = false;
    dicactnr.style.opacity = 0;
    dicactnr.style.visibility = 'hidden';
    dicactnr.style.transform = 'scale(0.1) translateY(2rem)'
    if(ajudaShowing == false) {
        ajudaShowing = true;
        ajudactnr.style.opacity = 1;
        ajudactnr.style.visibility = 'visible';
        ajudactnr.style.transform = 'translateY(0)'
    } else {
        ajudaShowing = false;
        ajudactnr.style.opacity = 0;
        ajudactnr.style.visibility = 'hidden';
        ajudactnr.style.transform = 'scale(0.1) translateY(2rem)'
    }
    if(respostactnr) {
        senhaShowing = false;
        respostactnr.style.opacity = 0;
        respostactnr.style.visibility = 'hidden';
        respostactnr.style.transform = 'scale(0.1) translateY(2rem)'
    }
}