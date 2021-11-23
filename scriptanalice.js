/*
==================================================================
PROJETO - 06 - BUZZQUIZZ
ANALICE E JOYCE
==================================================================
*/

let reqQuizzesServidor = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');

reqQuizzesServidor.then(ServQuizz);

function ServQuizz (reqQuizzesServidor) {

    let quizzDaVez;
    let quizzesServidor = reqQuizzesServidor.data;
    let quizzes = document.querySelector('.listaDeQuizzes .quizzes'); 

    for (let i = 0; i<quizzesServidor.length ; i++){

        quizzDaVez = quizzesServidor[i];
        
        quizzes.innerHTML += `
        <article data-identifier="quizz-card">
            <img src=${quizzDaVez.image}>
            <h2>${quizzDaVez.title}</h2>
        </article>
        `
    }

    function ServQuizzUsuario(quizzesServidor){

        let quizzesUsuarioHTML = document.querySelector('.listaQuizzesDoUsuario .quizzesUsuario'); 
        
        let quizzStorage = quizzesServidor[0]; //só para fins de teste
       
        const quizzStorageSerializado = JSON.stringify(quizzStorage);
        localStorage.setItem('DoUsuario', quizzStorageSerializado);
        let quizzesDoUsuario = localStorage.getItem('DoUsuario'); 

        //for (let i = 0; i<quizzesDoUsuario.length; i++) {
            
            //quizzDaVez = quizzesServidor[i];
        
            quizzesUsuarioHTML.innerHTML += `
        <article data-identifier="quizz-card">
            <img src=${quizzStorage.image}>
            <h2>${quizzStorage.title}</h2>
        </article>
        `
        //} 
    }

    ServQuizzUsuario(quizzesServidor);
   
}

function esconder2 (botao){
    let divDasPerguntas = document.querySelector(".criarMaisPerguntas2")
    divDasPerguntas.classList.remove("esconder");

    botao.classList.add("esconder");
}

function esconder3 (botao){
    let divDasPerguntas = document.querySelector(".criarMaisPerguntas3")
    divDasPerguntas.classList.remove("esconder");

    botao.classList.add("esconder");
}

function criarQuizz (){ //chama a tela 3.1

    let tela1 = document.querySelector(".tela1");
    let tela3_1 = document.querySelector(".tela3_1");

    tela1.classList.add("esconder");
    tela3_1.classList.remove("esconder");
}

function chamarTela3_2 () {

    let tela3_1 = document.querySelector(".tela3_1");
    let tela3_2 = document.querySelector(".tela3_2");

    let inputTitulo = tela3_1.querySelector(".titulo_quizz");
    let inputImagem = tela3_1.querySelector(".URLdaImagem");
    let inputQuantidadePerguntas = tela3_1.querySelector(".QuantidadePerguntas");
    let inputQuantidadeNiveis = tela3_1.querySelector(".QuantidadeNiveis");

    if (inputTitulo.value !== null && inputImagem.value !== null && inputQuantidadePerguntas.value !== null && inputQuantidadeNiveis.value !== null){
        tela3_1.classList.add("esconder");
        tela3_2.classList.remove("esconder");

    }else {
        alert("Há campos não preenchidos");
    }   

}

function chamarTela3_3 () {

    let tela3_2 = document.querySelector(".tela3_2");
    let tela3_3 = document.querySelector(".tela3_3");

    tela3_2.classList.add("esconder");
    tela3_3.classList.remove("esconder");

}

function chamarTela3_4 () {

    let tela3_3 = document.querySelector(".tela3_3");
    let tela3_4 = document.querySelector(".tela3_4");

    tela3_3.classList.add("esconder");
    tela3_4.classList.remove("esconder");

}
