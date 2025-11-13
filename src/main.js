import './style.css'

const quizContainer = document.createElement("div");
quizContainer.classList.add("container");

const title = document.createElement("h2");
title.innerText = "Quiz Question";
quizContainer.appendChild(title);

// --- Array de objetos con pregunta, respuestas y selección ---
const quizData = [
  {
    question: "What is the capital of France?",
    answers: ["London", "Berlín", "Paris", "Madrid"],
    selected: null
  },
  {
    question: "What is the longest river in the world?",
    answers: ["Amazonas", "Nilo", "Yangtsé", "Miño"],
    selected: null
  },
  {
    question: "Who wrote Romeo and Juliet?",
    answers: ["Jane Austen", "Cervantes", "William Shakespeare", "Charles Dickens"],
    selected: null
  },
  {
    question: "How many planets are there in our solar system?",
    answers: ["7", "8", "9", "10"],
    selected: null
  }
];

let questionIndex = 0;

const questionEl = document.createElement("p");
quizContainer.appendChild(questionEl);

const optionsList = document.createElement("ul");
optionsList.classList.add("container-answers");
quizContainer.appendChild(optionsList);

// --- Footer ---
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

// --- Función para renderizar pregunta y respuestas ---
function renderQuestion() {
  const current = quizData[questionIndex];
  questionEl.innerText = current.question;
  optionsList.innerHTML = "";

  current.answers.forEach((answer, index) => {
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    button.classList.add("answer-btn");
    button.innerText = answer;

    // Si esta opción fue la seleccionada, pintarla en verde
    if (current.selected === index) {
      button.style.backgroundColor = "#3CB371";
    }

    // Evento de clic para marcar la selección
    button.addEventListener("click", () => {
      // Guardar el índice de la respuesta seleccionada
      current.selected = index;

      // Resetear colores de todos los botones
      const allButtons = optionsList.querySelectorAll(".answer-btn");
      allButtons.forEach(btn => (btn.style.backgroundColor = "#f8f8f8"));

      // Marcar la nueva seleccionada
      button.style.backgroundColor = "#3CB371";
    });

    listItem.appendChild(button);
    optionsList.appendChild(listItem);
  });

  previousButton.disabled = questionIndex === 0;
  nextButton.disabled = questionIndex === quizData.length - 1;
}

// --- Navegación ---
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

renderQuestion();
