const options = document.querySelectorAll('.option');
const result = document.getElementById('result');
let score = 0;
const correctAnswers = [2, 1, 2, 2, 2]; // Index of correct answers (0-based)

options.forEach((option, index) => {
    option.addEventListener('click', () => {
        const questionIndex = Math.floor(index / 4);
        if (index % 4 === correctAnswers[questionIndex]) {
            score++;
            option.style.backgroundColor = '#4CAF50';
        } else {
            option.style.backgroundColor = '#F44336';
            options[questionIndex * 4 + correctAnswers[questionIndex]].style.backgroundColor = '#4CAF50';
        }
        if (questionIndex === correctAnswers.length - 1) {
            result.textContent = `You scored ${score} out of ${correctAnswers.length}!`;
        }
    });
});