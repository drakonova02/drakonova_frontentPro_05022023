const questions = [{
    caption: 'Подія натискання на елемент називається click?',
    correctAnswer: true
  },
  {
    caption: 'Усередині розмітки не можна додати обробник події?',
    correctAnswer: false
  },
  {
    caption: 'Припинити спливання події можна за допомогою метода stopImmediatePropagation?',
    correctAnswer: false
  },
  {
    caption: 'Припинити спливання події можна за допомогою метода stopPropagation?',
    correctAnswer: true
}]

const list = document.querySelector('.questions');

questions.forEach(function(question, index) {
    const task = document.createElement('li');
    const idTask = `question-${index}`;
    task.innerHTML = `<input data-correct='${question.correctAnswer}' type='checkbox' id="${idTask}"/>
                      <label for="${idTask}">${question.caption}</label>`
    list.append(task);
});

document.querySelector('button.check').addEventListener('click', function(event) {
    document.querySelector('.result')?.remove();

    let numberTrue = 0;
    const arrayAnswer = [];

    document.querySelectorAll('.questions input').forEach(function(element, index) {
        if(element.getAttribute('data-correct') === (element.checked).toString()) {
            arrayAnswer.push(index + 1);
            ++numberTrue;
        }
    });
    
    const result = document.createElement('div');
    result.className = 'result';
    result.innerText = `You have ${numberTrue}/${questions.length} correct answers: ${arrayAnswer.join(', ')}`;
    document.querySelector('body').append(result);
});