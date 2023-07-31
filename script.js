// Quiz Questions
const quizData = [
    {
        question: "Define an array?",
        options: ["The collection of similar types of data items", "The collection of different types of integer data items", "The collection of data items", "The collection of key value pair data items"],
        correctAnswer: "The collection of similar types of data items"
    },
    {
        question: "Who developed Python Programming Language?",
        options: ["Wick van Rossum","Rasmus Lerdorf","Guido van Rossum","Niene Stom"],
        correctAnswer: "Guido van Rossum"
    },
    {
        question: "Which of the following is not a core data type in Python programming?",
        options: ["Tuples","Lists","Class", "Dictionary"],
        correctAnswer: "Class"
    },
    {
        question: "The complexity of linear search algorithm is?",
        options: ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"],
        correctAnswer: "O(n)"
    },
    {
        question: "Which of the following sorting algorithm is of divide-and-conquer type?",
        options: ["Bubble sort", "Insertion sort", "Quick sort", "All of above"],
        correctAnswer: "Quick sort"
    }
];

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const option1 = document.getElementById("option1-text");
const option2 = document.getElementById("option2-text");
const option3 = document.getElementById("option3-text");
const option4 = document.getElementById("option4-text");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result-container");

let currentQuestion = 0;
let score = 0;

// Display the first question and options when the page loads
loadQuestion();


function updateButtons() {
    if (currentQuestion === quizData.length - 1) {
        submitBtn.style.display = "block";
        nextBtn.style.display = "none";
    } else {
        submitBtn.style.display = "none";
        nextBtn.style.display = "block";
    }
}


function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
    option1.textContent = currentQuizData.options[0];
    option2.textContent = currentQuizData.options[1];
    option3.textContent = currentQuizData.options[2];
    option4.textContent = currentQuizData.options[3];
    updateButtons(); 
}


function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) return;

    const userAnswer = selectedOption.nextElementSibling.textContent;
    const currentQuizData = quizData[currentQuestion];

    if (userAnswer === currentQuizData.correctAnswer) {
        score++;
    }

    selectedOption.checked = false;
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.style.display = "none";
    nextBtn.style.display = "none";
    submitBtn.style.display = "none";
    resultContainer.style.display = "block";
    resultContainer.textContent = `You scored ${score} out of ${quizData.length}! Great job!`;

    
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Restart Quiz";
    restartBtn.setAttribute("id", "restart-btn");
    resultContainer.appendChild(restartBtn);

  
    restartBtn.addEventListener("click", resetQuiz);
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    questionContainer.style.display = "block";
    loadQuestion();
    resultContainer.style.display = "none";
    updateButtons();
}


nextBtn.addEventListener("click", checkAnswer);

submitBtn.addEventListener("click", checkAnswer);
