import './style.css'

document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.createElement("div");
  quizContainer.classList.add("container");

  const title = document.createElement("h2");
  title.innerText = "Quiz Question";
  quizContainer.appendChild(title);

  // --- Array de objetos con pregunta y respuestas ---
  const quizData = [
    {
      question: "What is the capital of France?",
      answers: ["London", "Berlín", "Paris", "Madrid"]
    },
    {
      question: "What is the longest river in the world?",
      answers: ["Amazonas", "Nilo", "Yangtsé", "Miño"]
    },
    {
      question: "Who wrote Romeo and Juliet?",
      answers: ["Jane Austen", "Cervantes", "William Shakespeare", "Charles Dickens"]
    },
    {
      question: "How many planets are there in our solar system?",
      answers: ["7", "8", "9", "10"]
    }
  ];

  // --- Estado inicial ---
  let questionIndex = 0;

  const questionEl = document.createElement("p");
  quizContainer.appendChild(questionEl);

  const optionsList = document.createElement("ul");
  optionsList.classList.add("container-answers");
  quizContainer.appendChild(optionsList);

  // --- Función para renderizar pregunta y respuestas ---
  function renderQuestion() {
    const current = quizData[questionIndex];
    questionEl.innerText = current.question;
    optionsList.innerHTML = "";

    current.answers.forEach(answer => {
      const listItem = document.createElement("li");
      const button = document.createElement("button");
      button.classList.add("answer-btn");
      button.innerText = answer;
      listItem.appendChild(button);
      optionsList.appendChild(listItem);
    });

    // actualizar estado de botones de navegación
    previousButton.disabled = questionIndex === 0;
    nextButton.disabled = questionIndex === quizData.length - 1;
  }

  // --- Footer con botones ---
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

  // --- Eventos ---
  nextButton.addEventListener("click", () => {
    if (questionIndex < quizData.length - 1) {
      questionIndex++;
      renderQuestion();
    }
  });

  previousButton.addEventListener("click", () => {
    if (questionIndex > 0) {
      questionIndex--;
      renderQuestion();
    }
  });

  // --- Render inicial ---
  renderQuestion();
});
