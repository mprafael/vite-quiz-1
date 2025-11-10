import './style.css'

document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.createElement("div");
  quizContainer.classList.add("container");

  const title = document.createElement("h2");
  title.innerText = "Quiz Question";
  const question = document.createElement("p");
  let questionIndex = 0;  // Tracks the current question index
  const questions = [
    "What is the capital of France?",
    "What is the longest river in the world?",
    "Who wrote Romeo and Juliet?",
    "How many planets are there in our solar system?"
  ];
  question.innerText = questions[questionIndex];
  quizContainer.appendChild(title);
  quizContainer.appendChild(question);

  const optionsList = document.createElement("ul");
  optionsList.classList.add("container-answers");

  const options = ["London", "Berlin", "Paris", "Madrid"];
  options.forEach((option) => {
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    button.classList.add("answer-btn");
    button.innerText = option;
    listItem.appendChild(button);
    optionsList.appendChild(listItem);
  });

  quizContainer.appendChild(optionsList);

  const footer = document.createElement("div");
  footer.classList.add("container-footer");

  const previousButton = document.createElement("button");
  previousButton.classList.add("footer-btn");
  previousButton.innerText = "Previous";
  previousButton.disabled = true; // Disabled at the start

  const nextButton = document.createElement("button");
  nextButton.classList.add("footer-btn");
  nextButton.innerText = "Next";

  footer.appendChild(previousButton);
  footer.appendChild(nextButton);
  quizContainer.appendChild(footer);

  document.body.appendChild(quizContainer);

  // Function to update the question and options
  function updateQuestion() {
    question.innerText = questions[questionIndex];
    // Disable Next on last question
    nextButton.disabled = questionIndex === questions.length - 1;
    // Disable Previous on first question
    previousButton.disabled = questionIndex === 0;
  }

  // Event listener for Next button
  nextButton.addEventListener('click', () => {
    if (questionIndex < questions.length - 1) {
      questionIndex++;
      updateQuestion();
    }
  });

  // Event listener for Previous button
  previousButton.addEventListener('click', () => {
    if (questionIndex > 0) {
      questionIndex--;
      updateQuestion();
    }
  });
});
