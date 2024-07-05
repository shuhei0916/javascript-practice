const quiz = [
    {
        question: 'q1',
        answers: [
            'opt1', 
            'opt2', 
            'opt3', 
            'opt4',
        ],
        correct: 'opt3'
    }, 
    {
        question: 'q2',
        answers: [
            'opt1', 
            'opt2', 
            'opt3', 
            'opt4',
        ],
        correct: 'opt1'

    }, 
    {
        question: 'q3',
        answers: [
            'opt1', 
            'opt2', 
            'opt3', 
            'opt4',
        ],
        correct: 'opt3'

    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    // HTMLのオブジェクトを格納する変数には、先頭に$をつける
    let buttonIndex = 0;
    while (buttonIndex < $button.length) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
     
}

setupQuiz();

const clichHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('correct');
        score++;
    } else {
        window.alert('incorrect');
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です');
    }
};

let handlerIndex = 0;
while (handlerIndex < $button.length) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clichHandler(e);  
    });  
    handlerIndex++;
};
