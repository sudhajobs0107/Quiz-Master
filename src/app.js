const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "J.K. Rowling",
      "Leo Tolstoy",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "Which language is primarily used for web development?",
    options: ["Python", "C++", "JavaScript", "Java"],
    correctAnswer: "JavaScript",
  },
  {
    question: "What is the default port for HTTP?",
    options: ["80", "22", "443", "8080"],
    correctAnswer: "80",
  },
  {
    question: "Which of the following is a version control system?",
    options: ["Git", "Docker", "AWS", "Jenkins"],
    correctAnswer: "Git",
  },
  {
    question: "Which HTML element is used to define a header for a document?",
    options: ["<header>", "<head>", "<h1>", "<section>"],
    correctAnswer: "<header>",
  },
  {
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    answer: "O(log n)",
  },
  {
    question: "Who was the first President of the United States?",
    options: [
      "Abraham Lincoln",
      "George Washington",
      "Thomas Jefferson",
      "John Adams",
    ],
    answer: "George Washington",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Pb", "Fe"],
    answer: "Au",
  },
  {
    question: "In which year did World War II end?",
    options: ["1918", "1939", "1945", "1965"],
    answer: "1945",
  },
  {
    question:
      "Which programming language is known for its use in data science?",
    options: ["Java", "Python", "C#", "Ruby"],
    answer: "Python",
  },
  {
    question: "Who developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Nikola Tesla",
    ],
    answer: "Albert Einstein",
  },
  {
    question: "Which of the following is a NoSQL database?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    answer: "MongoDB",
  },
  {
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
    answer: "Mitochondria",
  },
  {
    question: "Who invented the World Wide Web?",
    options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Larry Page"],
    answer: "Tim Berners-Lee",
  },
  {
    question: "Which of the following is a frontend framework?",
    options: ["Node.js", "React", "Django", "Flask"],
    answer: "React",
  },
  {
    question: "Which data structure uses a FIFO (First In First Out) approach?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue",
  },
  {
    question: "Who was the first human to journey into outer space?",
    options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
    answer: "Yuri Gagarin",
  },
  {
    question: "What is the boiling point of water at sea level in Celsius?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    answer: "100°C",
  },
  {
    question: "Which of the following is a cloud computing platform?",
    options: ["Azure", "Apache", "Linux", "MySQL"],
    answer: "Azure",
  },
  {
    question: "Which empire was ruled by Julius Caesar?",
    options: [
      "Roman Empire",
      "Greek Empire",
      "Persian Empire",
      "Ottoman Empire",
    ],
    answer: "Roman Empire",
  },
  {
    question: "What is the most abundant gas in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Nitrogen",
  },
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "CSS", "Python", "Java"],
    answer: "CSS",
  },
  {
    question: "Who discovered penicillin?",
    options: [
      "Marie Curie",
      "Alexander Fleming",
      "Louis Pasteur",
      "Isaac Newton",
    ],
    answer: "Alexander Fleming",
  },
  {
    question: "What does 'RAM' stand for in computer systems?",
    options: [
      "Random Access Memory",
      "Read All Memory",
      "Run Access Memory",
      "Rapid Action Memory",
    ],
    answer: "Random Access Memory",
  },
  {
    question: "In what year did the Titanic sink?",
    options: ["1912", "1920", "1898", "1918"],
    answer: "1912",
  },
  {
    question: "Which keyword is used to create a class in JavaScript?",
    options: ["function", "method", "class", "object"],
    answer: "class",
  },
  {
    question: "Which part of the cell contains the genetic material?",
    options: ["Cytoplasm", "Mitochondria", "Nucleus", "Cell membrane"],
    answer: "Nucleus",
  },
  {
    question: "Which was the first programming language?",
    options: ["C", "Fortran", "Java", "COBOL"],
    answer: "Fortran",
  },
  {
    question: "Who was the first woman to win a Nobel Prize?",
    options: [
      "Rosalind Franklin",
      "Marie Curie",
      "Ada Lovelace",
      "Florence Nightingale",
    ],
    answer: "Marie Curie",
  },
  {
    question: "Which of the following is a binary search tree property?",
    options: [
      "All nodes have two children",
      "All nodes are sorted",
      "Left subtree contains smaller values",
      "Right subtree contains smaller values",
    ],
    answer: "Left subtree contains smaller values",
  },
  {
    question: "Which country first landed a man on the moon?",
    options: ["Russia", "United States", "China", "Germany"],
    answer: "United States",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    question:
      "Which programming language was created by Guido van Rossum in 1991?",
    options: ["Java", "Python", "C++", "Ruby"],
    answer: "Python",
  },
  {
    question: "Who is known as the 'Father of Computer Science'?",
    options: [
      "Alan Turing",
      "Charles Babbage",
      "Ada Lovelace",
      "John von Neumann",
    ],
    answer: "Alan Turing",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Fe", "Cu"],
    answer: "Au",
  },
  {
    question: "Which ancient civilization built the pyramids of Giza?",
    options: ["Mayans", "Romans", "Greeks", "Egyptians"],
    answer: "Egyptians",
  },
  {
    question: "What does HTML stand for in web development?",
    options: [
      "Hyper Text Markup Language",
      "High-Level Text Management Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Who developed the theory of general relativity?",
    options: [
      "Isaac Newton",
      "Niels Bohr",
      "Albert Einstein",
      "Stephen Hawking",
    ],
    answer: "Albert Einstein",
  },
  {
    question: "In which year did World War II end?",
    options: ["1943", "1945", "1947", "1950"],
    answer: "1945",
  },
  {
    question: "What is the smallest unit of data in computing?",
    options: ["Byte", "Bit", "Nibble", "Word"],
    answer: "Bit",
  },
  {
    question: "Which element is the most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    answer: "Nitrogen",
  },
  {
    question: "Who invented the World Wide Web?",
    options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Mark Zuckerberg"],
    answer: "Tim Berners-Lee",
  },
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-btn");

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsContainer.innerHTML = ""; // Clear previous options
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option));
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
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    alert("You've completed the quiz!");
  }
  nextButton.style.display = "none";
});

loadQuestion();
