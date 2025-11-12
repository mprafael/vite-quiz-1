import './style.css'

document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.createElement("div");
  quizContainer.classList.add("container");

  const title = document.createElement("h2");
  title.innerText = "Quiz Question";
  const question = document.createElement("p");
  let questionIndex = 0;  // Índice actual de pregunta

  const questions = [
    "What is the capital of France?",
    "What is the longest river in the world?",
    "Who wrote Romeo and Juliet?",
    "How many planets are there in our solar system?"
  ];

  const answers = [
    ["London", "Berlín", "Paris", "Madrid"],
    ["Amazonas", "Nilo", "Yangtsé", "Miño"],
    ["Jane Austen", "Cervantes", "William Shakespeare", "Charles Dickens"],
    ["7", "8", "9", "10"]
  ];

  question.innerText = questions[questionIndex];
  quizContainer.appendChild(title);
  quizContainer.appendChild(question);

  const optionsList = document.createElement("ul");
  optionsList.classList.add("container-answers");
  quizContainer.appendChild(optionsList);

  // Función para mostrar respuestas
  function renderAnswers() {
    optionsList.innerHTML = ""; // limpiar opciones anteriores
    answers[questionIndex].forEach(option => {
      const listItem = document.createElement("li");
      const button = document.createElement("button");
      button.classList.add("answer-btn");
      button.innerText = option;
      listItem.appendChild(button);
      optionsList.appendChild(listItem);
    });
  }

  renderAnswers();

  const footer = document.createElement("div");
  footer.classList.add("container-footer");

  const previousButton = document.createElement("button");
  previousButton.classList.add("footer-btn");
  previousButton.innerText = "Previous";
  previousButton.disabled = true; // al inicio no se puede retroceder

  const nextButton = document.createElement("button");
  nextButton.classList.add("footer-btn");
  nextButton.innerText = "Next";

  footer.appendChild(previousButton);
  footer.appendChild(nextButton);
  quizContainer.appendChild(footer);

  document.body.appendChild(quizContainer);

  // Función para actualizar pregunta y respuestas
  function updateQuestion() {
    question.innerText = questions[questionIndex];
    renderAnswers();
    // controlar botones
    previousButton.disabled = questionIndex === 0;
    nextButton.disabled = questionIndex === questions.length - 1;
  }

  // Eventos de navegación
  nextButton.addEventListener('click', () => {
    if (questionIndex < questions.length - 1) {
      questionIndex++;
      updateQuestion();
    }
  });

  previousButton.addEventListener('click', () => {
    if (questionIndex > 0) {
      questionIndex--;
      updateQuestion();
    }
  });
});
