const question = 'q1?';
const answers = ['opt1', 'opt2', 'opt3', 'opt4'];
const correct = 'opt3';

const $button = document.getElementsByTagName('button');
const setupQuiz = () => {
    document.getElementById('js-question').textContent = question;
    // HTMLのオブジェクトを格納する変数には、先頭に$をつける
    let buttonIndex = 0;
    while (buttonIndex < $button.length) {
        $button[buttonIndex].textContent = answers[buttonIndex];
        buttonIndex++;
    }
     
}
setupQuiz();

const clichHandler = (e) => {
    if (correct === e.target.textContent) {
        window.alert('correct');
    } else {
        window.alert('incorrect');
    }
};

let handlerIndex = 0;
while (handlerIndex < $button.length) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clichHandler(e);  
    });  
    handlerIndex++;
};
