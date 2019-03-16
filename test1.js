var quizC = document.getElementById('questions');
var resultsC = document.getElementById('answer');
var submitB = document.getElementById('results');

var myQuestions = [
    {
        question: "Which Planet is the Biggest?",
        answers: {
            A: "Earth",
            B: "Jupiter",
            C: "Venus",
            D: "Saturn"
        },
        correctAnswer: "B"
    },
    {
        question: "Which Planet is the Coldest?",
        answers: {
            A: "Neptune",
            B: "Mercury",
            C: "Uranus",
            D: "Jupiter"
        },
        correctAnswer: "A"
    },
    {
        question: "What is the 6th Planet From the Sun?",
        answers: {
            A: "Mars",
            B: "Saturn",
            C: "Jupiter",
            D: "Uranus"
        },
        correctAnswer: "Uranus"
    },
    {
        question: ""
    }
]

function createQuiz(){

}

function showResults(){

}

submitB.addEventListener('click', showResults);