document.addEventListener("DOMContentLoaded", () => {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const submitButton = document.getElementById("submit-btn");
  
    // Retrieve user details from query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name");
    const email = urlParams.get("email");
    const rollNumber = urlParams.get("rollNumber");
  
    const quizData = [
      {
        question: "What is the default value of a boolean variable in Java?",
        options: ["a) true", "b) false", "c) 0", "d) 1"],
        correctAnswer: "b) false",
      },
      {
        question: "Which of the following is not a primitive data type in Java?",
        options: ["a) int", "b) string", "c) double", "d) char"],
        correctAnswer: "b) string",
      },
      {
        question: "What is the size of int variable in Java?",
        options: ["a) 4 bytes", "b) 2 bytes", "c) 8 bytes", "d) 1 byte"],
        correctAnswer: "a) 4 bytes",
      },
      {
        question: "What is the result of 3 + 5 * 2?",
        options: ["a) 16", "b) 13", "c) 11", "d) 10"],
        correctAnswer: "c) 11",
      },
      {
        question: "Which keyword is used to prevent method overriding in Java?",
        options: ["a) override", "b) final", "c) static", "d) private"],
        correctAnswer: "b) final",
      },
      {
        question: "What is the superclass of all classes in Java?",
        options: ["a) Object", "b) Super", "c) Base", "d) Parent"],
        correctAnswer: "a) Object",
      },
      {
        question: "What is the purpose of the 'static' keyword in Java?",
        options: [
          "a) To make a variable constant",
          "b) To access class variables and methods",
          "c) To define a subclass",
          "d) To make a method synchronized",
        ],
        correctAnswer: "b) To access class variables and methods",
      },
      {
        question: "What is the purpose of the 'this' keyword in Java?",
        options: [
          "a) To refer to the current instance of the class",
          "b) To create a new instance of the class",
          "c) To call a superclass constructor",
          "d) To access static variables",
        ],
        correctAnswer: "a) To refer to the current instance of the class",
      },
      {
        question: "Which of the following is an interface in Java?",
        options: ["a) ArrayList", "b) LinkedList", "c) Map", "d) Runnable"],
        correctAnswer: "d) Runnable",
      },
      {
        question: "What is the output of 'System.out.println(10/3)?'",
        options: ["a) 3.333", "b) 3", "c) 3.0", "d) 3.3333"],
        correctAnswer: "b) 3",
      },
    ];
  
    let currentQuestionIndex = 0;
    let userResponses = [];
  
    function loadQuestion() {
      const currentQuestion = quizData[currentQuestionIndex];
      questionContainer.textContent = currentQuestion.question;
  
      optionsContainer.innerHTML = "";
      currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => selectOption(option));
        optionsContainer.appendChild(button);
      });
    }
  
    function selectOption(selectedOption) {
      const currentQuestion = quizData[currentQuestionIndex];
      userResponses.push({ question: currentQuestion.question, selectedOption });
  
      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.length) {
        loadQuestion();
      } else {
        // Quiz is finished, you can handle the results here
        const resultsURL = `results.html?name=${encodeURIComponent(
          name
        )}&email=${encodeURIComponent(email)}&rollNumber=${encodeURIComponent(
          rollNumber
        )}&responses=${encodeURIComponent(JSON.stringify(userResponses))}`;
        window.location.href = resultsURL; // You can add further logic to display results or redirect to a results page
      }
    }
  
    submitButton.addEventListener("click", () => selectOption(null));
  
    // Load the first question
    loadQuestion();
  });
  
  viewResultsButton.addEventListener("click", () => {
    // Construct the URL with query parameter for responses
    const resultsURL =
      "results.html?responses=" +
      encodeURIComponent(JSON.stringify(userResponses));
  
    // Redirect to the results page
    window.location.href = resultsURL;
  });