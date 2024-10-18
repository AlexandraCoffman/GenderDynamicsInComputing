
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-quiz');
    const questionText = document.getElementById('question-text');
    const quizOptions = document.getElementById('quiz-options');
    const quizChoices = document.querySelectorAll('.quiz-choice');
    const feedback = document.getElementById('feedback');

    let currentQuestionIndex = 0;
    let score = 0;

    const quizQuestions = [
        {
            question: "Who is known as the first computer programmer?",
            options: ["Joan Clarke", "Grace Hopper", "Ada Lovelace", "Kathleen Booth"],
            answer: 2
        },
        {
            question: "Which woman worked on breaking the Enigma code?",
            options: ["Ada Lovelace", "Joan Clarke", "Grace Hopper", "Margaret Hamilton"],
            answer: 1
        },
        {
            question: "Who coined the term 'software engineering'?",
            options: ["Grace Hopper", "Margaret Hamilton", "Kathleen Booth", "Ada Lovelace"],
            answer: 1
        },
        {
            question: "Who created the first assembly language?",
            options: ["Grace Hopper", "Margaret Hamilton", "Kathleen Booth", "Joan Clarke"],
            answer: 2
        }
    ];
    const startQuiz = () => {
        currentQuestionIndex = 0;
        score = 0;
        feedback.textContent = '';
        loadQuestion();
    };
    const loadQuestion = () => {
        if (currentQuestionIndex < quizQuestions.length) {
            const currentQuestion = quizQuestions[currentQuestionIndex];
            questionText.textContent = currentQuestion.question;
            quizChoices.forEach((button, index) => {
                button.textContent = currentQuestion.options[index];
                button.style.display = 'inline-block'; // Ensure buttons are visible
            });
            quizOptions.style.display = 'block';
        } else {
            endQuiz();
        }
    };
    const handleAnswer = (selectedIndex) => {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        if (selectedIndex === currentQuestion.answer) {
            feedback.textContent = "Correct!";
            score++;
        } else {
            feedback.textContent = `Incorrect. The correct answer was "${currentQuestion.options[currentQuestion.answer]}".`;
        }
        currentQuestionIndex++;
        setTimeout(loadQuestion, 1500);
    };
    const endQuiz = () => {
        questionText.textContent = `You finished the quiz! Your score is ${score} out of ${quizQuestions.length}.`;
        quizOptions.style.display = 'none';
    };
    startButton.addEventListener('click', startQuiz);
    quizChoices.forEach((button, index) => {
        button.addEventListener('click', () => handleAnswer(index));
    });
});
window.addEventListener('scroll', function() {
    const content = document.querySelector('.content');
    const heroHeight = document.querySelector('.hero-section').offsetHeight;
  
    if (window.scrollY > heroHeight * 0.8) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  });