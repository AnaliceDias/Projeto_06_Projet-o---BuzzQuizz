let reqQuizzesServidor = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
let quizzesServidor;
let quizzDaVez;
reqQuizzesServidor.then(teste);

function teste (reqQuizzesServidor) {

    quizzesServidor = reqQuizzesServidor.data;
    console.log(quizzesServidor);

    for (let i = 0; i<quizzesServidor.length ; i++){
        quizzDaVez = quizzesServidor[i];
        console.log(quizzDaVez);
        let quizzes = document.querySelector('.quizzes'); 
        quizzes.innerHTML += `
        <article>
            <img src=${quizzDaVez.image}>
            <h2>${quizzDaVez.title}</h2>
        </article>
        `
    }

}

