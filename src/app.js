const questions = [
    {
       question: "What is the capital of France?",
       options: ["Berlin", "Madrid", "Paris", "Rome"],
       answer: "Paris"
    },
    {
       question: "What is the largest mammal in the world?",
       options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
       answer: "Blue Whale"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "William Shakespeare", "J.K. Rowling", "Leo Tolstoy"],
        answer: "William Shakespeare"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "C++", "JavaScript", "Java"],
        correctAnswer: "JavaScript"
    },
    {
        question: "What is the default port for HTTP?",
        options: ["80", "22", "443", "8080"],
        correctAnswer: "80"
    },
    {
        question: "Which of the following is a version control system?",
        options: ["Git", "Docker", "AWS", "Jenkins"],
        correctAnswer: "Git"
    },
    {
        question: "Which HTML element is used to define a header for a document?",
        options: ["<header>", "<head>", "<h1>", "<section>"],
        correctAnswer: "<header>"
    },
    {
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
        answer: "O(log n)"
    },
    {
        question: "Who was the first President of the United States?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        answer: "George Washington"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Au", "Pb", "Fe"],
        answer: "Au"
    },
    {
        question: "In which year did World War II end?",
        options: ["1918", "1939", "1945", "1965"],
        answer: "1945"
    },
    {
        question: "Which programming language is known for its use in data science?",
        options: ["Java", "Python", "C#", "Ruby"],
        answer: "Python"
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        answer: "Albert Einstein"
    },
    {
        question: "Which of the following is a NoSQL database?",
        options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
        answer: "MongoDB"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
        answer: "Mitochondria"
    },
    {
        question: "Who invented the World Wide Web?",
        options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Larry Page"],
        answer: "Tim Berners-Lee"
    },
    {
        question: "Which of the following is a frontend framework?",
        options: ["Node.js", "React", "Django", "Flask"],
        answer: "React"
    },
    {
        question: "Which data structure uses a FIFO (First In First Out) approach?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: "Queue"
    },
    {
        question: "Who was the first human to journey into outer space?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
        answer: "Yuri Gagarin"
    },
    {
        question: "What is the boiling point of water at sea level in Celsius?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        answer: "100°C"
    },
    {
        question: "Which of the following is a cloud computing platform?",
        options: ["Azure", "Apache", "Linux", "MySQL"],
        answer: "Azure"
    },
    {
        question: "Which empire was ruled by Julius Caesar?",
        options: ["Roman Empire", "Greek Empire", "Persian Empire", "Ottoman Empire"],
        answer: "Roman Empire"
    },
    {
        question: "What is the most abundant gas in Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Nitrogen"
    },
    {
        question: "Which language is used to style web pages?",
        options: ["HTML", "CSS", "Python", "Java"],
        answer: "CSS"
    },
    {
        question: "Who discovered penicillin?",
        options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Isaac Newton"],
        answer: "Alexander Fleming"
    },
    {
        question: "What does 'RAM' stand for in computer systems?",
        options: ["Random Access Memory", "Read All Memory", "Run Access Memory", "Rapid Action Memory"],
        answer: "Random Access Memory"
    },
    {
        question: "In what year did the Titanic sink?",
        options: ["1912", "1920", "1898", "1918"],
        answer: "1912"
    },
    {
        question: "Which keyword is used to create a class in JavaScript?",
        options: ["function", "method", "class", "object"],
        answer: "class"
    },
    {
        question: "Which part of the cell contains the genetic material?",
        options: ["Cytoplasm", "Mitochondria", "Nucleus", "Cell membrane"],
        answer: "Nucleus"
    },
    {
        question: "Which was the first programming language?",
        options: ["C", "Fortran", "Java", "COBOL"],
        answer: "Fortran"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Rosalind Franklin", "Marie Curie", "Ada Lovelace", "Florence Nightingale"],
        answer: "Marie Curie"
    },
    {
        question: "Which of the following is a binary search tree property?",
        options: ["All nodes have two children", "All nodes are sorted", "Left subtree contains smaller values", "Right subtree contains smaller values"],
        answer: "Left subtree contains smaller values"
    },
    {
        question: "Which country first landed a man on the moon?",
        options: ["Russia", "United States", "China", "Germany"],
        answer: "United States"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "In computer science, what does the term 'big O' notation describe?",
        options: ["The exact run time of an algorithm", "The memory usage of an algorithm", "The upper bound of an algorithm's run time", "The lower bound of an algorithm's memory usage"],
        answer: "The upper bound of an algorithm's run time"
    },
    {
        question: "Which of the following is the primary reason for the red color of Mars?",
        options: ["Iron oxide on its surface", "Presence of carbon dioxide in the atmosphere", "High volcanic activity", "Reflection of sunlight"],
        answer: "Iron oxide on its surface"
    },
    {
        question: "What fundamental concept of general relativity explains the bending of light around massive objects?",
        options: ["Time dilation", "Gravitational lensing", "Space-time curvature", "Quantum fluctuations"],
        answer: "Gravitational lensing"
    },
    {
        question: "Which of the following is an example of a 'NP-complete' problem in computational theory?",
        options: ["Sorting a list", "Traveling Salesman Problem", "Finding the maximum in an array", "Matrix multiplication"],
        answer: "Traveling Salesman Problem"
    },
    {
       question: "What is the chemical symbol for gold?",
       options: ["Au", "Ag", "Pb", "Fe"],
       answer: "Au"
    },
    {
        question: "Who wrote the first algorithm designed to be processed by a machine?",
        options: ["Charles Babbage", "Ada Lovelace", "George Boole", "Michael Faraday"],
        answer: "Ada Lovelace"
     },
     {
        question: "On which continent is Brazil located?",
        options: ["North America", "Central America", "South America", "Africa"],
        answer: "South America"
     },
     {
        question: "How many times did Taylor Swift won Grammy's category Album of the Year?",
        options: ["One", "Two", "Four", "Five"],
        answer: "Four"
     },
     {
        question: "In Star Wars, who is Luke Skywalker's sister?",
        options: ["Lia", "Lena", "Lucy", "Leia"],
        answer: "Leia"
     },
     {
        question: "On which continent is Jamaica located?",
        options: ["North America", "Asia", "Africa", "Central America"],
        answer: "Central America"
     }
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('next-btn');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsContainer.innerHTML = '';  // Clear previous options
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        alert("Correct!");
    } else {
        alert("Incorrect. The correct answer is " + currentQuestion.answer);
    }
    nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("You've completed the quiz!");
    }
    nextButton.style.display = 'none';
});

loadQuestion();
