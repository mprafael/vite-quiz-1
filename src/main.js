import './style.css'

document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.createElement("div");
  quizContainer.classList.add("container");

  const title = document.createElement("h2");
  title.innerText = "Quiz Question";
  const question = document.createElement("p");
  question.innerText = "What is the capital of France?";
  quizContainer.appendChild(title);
  quizContainer.appendChild(question);

  const optionsList = document.createElement("ul");
  optionsList.classList.add("container-answers");

  const options = ["London", "Berlin", "Paris", "Madrid"];
  options.forEach((option, index) => {
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
  previousButton.disabled = true;

  const nextButton = document.createElement("button");
  nextButton.classList.add("footer-btn");
  nextButton.innerText = "Next";

  footer.appendChild(previousButton);
  footer.appendChild(nextButton);
  quizContainer.appendChild(footer);

  document.body.appendChild(quizContainer);
});
