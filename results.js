document.addEventListener("DOMContentLoaded", () => {
    const resultsContainer = document.getElementById("results-container");
    const nameElement = document.getElementById("name");
    const emailElement = document.getElementById("email");
    const rollNumberElement = document.getElementById("roll-number");
    const marksContainer = document.getElementById("marks");
    const answersContainer = document.getElementById("quiz-answers");
  
    // Retrieve user details and responses from query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name");
    const email = urlParams.get("email");
    const rollNumber = urlParams.get("rollNumber");
    const responsesJson = urlParams.get("responses");
    const userResponses = JSON.parse(responsesJson) || [];
  
    // Display user details
    nameElement.textContent = name;
    emailElement.textContent = email;
    rollNumberElement.textContent = rollNumber;
  
    // Your quiz data (similar to what you have in quiz.js)
    const quizData = [
      {
        question: "What is the default value of a boolean variable in Java?",
        correctAnswer: "b) false",
      },
      {
        question: "Which of the following is not a primitive data type in Java?",
        correctAnswer: "b) string",
      },
      {
        question: "What is the size of int variable in Java?",
        correctAnswer: "a) 4 bytes",
      },
      {
        question: "What is the result of 3 + 5 * 2?",
        correctAnswer: "c) 11",
      },
      {
        question: "Which keyword is used to prevent method overriding in Java?",
        correctAnswer: "b) final",
      },
      {
        question: "What is the superclass of all classes in Java?",
        correctAnswer: "a) Object",
      },
      {
        question: "What is the purpose of the 'static' keyword in Java?",
        correctAnswer: "b) To access class variables and methods",
      },
      {
        question: "What is the purpose of the 'this' keyword in Java?",
        correctAnswer: "a) To refer to the current instance of the class",
      },
      {
        question: "Which of the following is an interface in Java?",
        correctAnswer: "d) Runnable",
      },
      {
        question: "What is the output of 'System.out.println(10/3)?'",
        correctAnswer: "b) 3",
      },
  
      // Add more Java-related questions here...
    ];
  
    // Calculate marks and display answers
    let correctCount = 0;
    userResponses.forEach((response, index) => {
      const question = quizData[index];
      const answerStatus =
        response.selectedOption === question.correctAnswer
          ? "correct"
          : "incorrect";
  
      const answerItem = document.createElement("li");
      answerItem.textContent = `${index + 1}. ${
        question.correctAnswer
      } (${answerStatus})`;
      answersContainer.appendChild(answerItem);
  
      if (answerStatus === "correct") {
        correctCount++;
      }
    });
  
    // Display marks
    marksContainer.textContent = `${correctCount}/${quizData.length}`;
  });