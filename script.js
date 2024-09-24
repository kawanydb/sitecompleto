function disableOptions(questionName){
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if (!option.checked) {
            option.disabled = true;
        }
    });
}

function playSound () {
    let clickSound = document.getElementById('selecionasom');
    clickSound.play();
}

function submitQuiz() {

    let enviarBtn = document.getElementById('enviarBtn');
    enviarBtn.disabled = true;

    let resetBtn = document.getElementById('resetBtn');
    resetBtn.disabled = false;

    let correctAnswers = {
        q1: "B",
        q2: "B",
        q3: "C",
        q4: "B",
        q5: "B",
        q6: "C",
        q7: "B",
        q8: "C",
        q9: "A",
        q10: "A",

    };

    let form = document.getElementById('quiz-form');
    let score = 0;

    for (let key in correctAnswers){
        let userAnswer = form.elements[key].value;
        if(userAnswer === correctAnswers[key]) {
            score++;
        }
    }

    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 10 perguntas`;

    if(score === 10) {
        let sucessSound = document.getElementById('venceusom');
        sucessSound.play();
    }

    else {
        let perdeuSound = document.getElementById('perdeusom');
        perdeuSound.play();
    }
    
}

function resetQuiz() {
    // Reabilita o botão de envio quando o quiz é reiniciado
    let enviarBtn = document.getElementById('enviarBtn');
    enviarBtn.disabled = false;

    // Desabilita o botão de "Responder novamente" novamente
    let resetBtn = document.getElementById('resetBtn');
    resetBtn.disabled = true;

    // Limpa as respostas e reseta o formulário
    document.getElementById('quiz-form').reset();

    // Reabilita as opções de resposta
    let options = document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled = false);

    // Limpa o resultado
    let result = document.getElementById('result');
    result.innerHTML = "";
}
