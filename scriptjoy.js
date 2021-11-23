var acertos = 0
var quizz
takeThisQuizz()
function takeThisQuizz(quizz) {

    //const oQuizz = quizz.id  ${id}
    var promQuizz = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/20")
    promQuizz.then(renderOQuizz);
    /*document.querySelector("")*/
}
function renderOQuizz(raaa) {
    quizz = raaa.data;
    let quizz_title = quizz.title;
    let quizz_image = quizz.image
    let quizz_questions = quizz.questions;

    let banner = document.querySelector(".banner");
    banner.innerHTML = `<img class = "banner-img" src="${quizz_image}"/>
                <h1>${quizz_title}</h1>`;



    //  banner();
    // 1. onclick-> pega a id do quizz, tbm manda o axios pegar quizz, renderizar o q vier da promessa


    for (let i = 0; i < quizz_questions.length; i++) {
        let question = quizz_questions[i];
        let question_title = question.title
        console.log(question_title)

        let pergunta = document.querySelector(".pergunta-card");
        pergunta.innerHTML += `<li class="pergunta">
            <h5>${question_title}</h5>
            </li>
            <div class="respostas p${i}">
            </div>
            `


        for (let j = 0; j < question.answers.length; j++) {
            let respostas = question.answers[j]
            let image = respostas.image
            let text = respostas.text
            let resp = document.querySelector(`.p${i}`)
            resp.innerHTML += `<div class="alternativas">
                <div id = "${i}-${j}" class="resp" onclick = "respostaa(${j},${i})">
                    <img  src="${image}" >
                    <h5 id = "${i}-${j}">${text}</h5>
                </div>
                </div>`

            //ao selecionar uma resp "esbranqueça as demais, uma vez clicado nao pode ser mudado "
            //percisam ser aleatorias (random)
            //
   
                //caso seja verdadeiro mude a cor do text true para verde e od dms vermelho 
           
            // é preciso contar os acertos se > metade = level 2  se < metade level 1
            // a contagem deve ser feita por porcentagem 
            // exibir titulo e imagem referente ao level 
            //Math.ceil, Math.floor, Math.round   
        }


    }   // botao  reiniciar quizz -> deve voltar para o topo da tela e as respostas devem estar zeradas 
    // botao voltar para home ->Tela 1: Lista de Quizzes





    for (let i = 0; i < fim.length; i++) {
        let nivel = fim[i];
        let titulo = nivel.title
        let imgN = nivel.image
        let texto = fim.text
        let valor = fim.minValue
        let fim = document.querySelector(`.resultado-card ${i}`);
        Reiniciar.innerHTML = ` <li class="seu-nivel">
                <h5>${titulo}</h5>
                </li>
                <div class="nivel1">
                    <div class="conteudo-nivel">
                        <img src="${imgN}" alt="">
                        <h5>${texto}</h5>
                    </div>
                </div> `
        
    }



}


function respostaa(alternativa, pergunta) {
    if (quizz.questions[pergunta].respondida){
        return
    }
    if (quizz.questions[pergunta].answers[alternativa].isCorrectAnswer) {
      
        acertos ++

    }
    
            
    for (let i = 0; i < quizz.questions[pergunta].answers.length; i++) {
        let textO = document.getElementById(`${pergunta}-${i}`)
        if (quizz.questions[pergunta].answers[i].isCorrectAnswer) {
           
            textO.classList.add("alternativa-certa")
        }
        else{
            textO.classList.add("alternativa-errada")
        }
        
    }
    quizz.questions[pergunta].respondida = true
    document.getElementById('pergunta-card').scrollTop
}