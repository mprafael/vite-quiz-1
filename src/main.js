import './style.css'

// --- Creación del contenedor principal ---
const quizContainer = document.createElement("div");
quizContainer.classList.add("container");

const title = document.createElement("h2");
title.innerText = "Quiz Question";
quizContainer.appendChild(title);

// --- Datos del quiz ---
const quizData = [
  {
    question: "What is the capital of France?",
    answers: ["London", "Berlín", "Paris", "Madrid"],
    solution: 2,
    selected: null
  },
  {
    question: "What is the longest river in the world?",
    answers: ["Amazonas", "Nilo", "Yangtsé", "Miño"],
    solution: 1,
    selected: null
  },
  {
    question: "Who wrote Romeo and Juliet?",
    answers: ["Jane Austen", "Cervantes", "William Shakespeare", "Charles Dickens"],
    solution: 2,
    selected: null
  },
  {
    question: "How many planets are there in our solar system?",
    answers: ["7", "8", "9", "10"],
    solution: 1,
    selected: null
  }
];

let questionIndex = 0;

// --- Elementos del DOM ---
const questionEl = document.createElement("p");
quizContainer.appendChild(questionEl);

const optionsList = document.createElement("ul");
optionsList.classList.add("container-answers");
quizContainer.appendChild(optionsList);

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

const checkButton = document.createElement("button");
checkButton.classList.add("footer-btn");
checkButton.innerText = "Check";
checkButton.disabled = true;

footer.appendChild(previousButton);
footer.appendChild(nextButton);
footer.appendChild(checkButton);
quizContainer.appendChild(footer);

document.body.appendChild(quizContainer);

// --- Renderizado de pregunta ---
function renderQuestion() {
  const current = quizData[questionIndex];
  questionEl.innerText = current.question;
  optionsList.innerHTML = "";

  current.answers.forEach((answer, index) => {
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    button.classList.add("answer-btn");
    button.innerText = answer;

    if (current.selected === index) {
      button.style.backgroundColor = "#3CB371";
    }

    button.addEventListener("click", () => {
      current.selected = index;
      const allButtons = optionsList.querySelectorAll(".answer-btn");
      allButtons.forEach(btn => (btn.style.backgroundColor = "#f8f8f8"));
      button.style.backgroundColor = "#3CB371";

      checkCompletion();
    });

    listItem.appendChild(button);
    optionsList.appendChild(listItem);
  });

  previousButton.disabled = questionIndex === 0;
  nextButton.disabled = questionIndex === quizData.length - 1;
}

// --- Comprobar si todas las preguntas están respondidas ---
function checkCompletion() {
  const allAnswered = quizData.every(q => q.selected !== null);
  checkButton.disabled = !allAnswered;
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

// --- Crear el modal ---
const modal = document.createElement("div");
modal.classList.add("modal");

const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");

const closeModal = document.createElement("span");
closeModal.classList.add("modal-close");
closeModal.innerHTML = "&times;";

const modalTitle = document.createElement("h2");
modalTitle.innerText = "Results";

const modalSeparator = document.createElement("hr");

const modalText = document.createElement("p");

modalContent.appendChild(closeModal);
modalContent.appendChild(modalTitle);
modalContent.appendChild(modalSeparator);
modalContent.appendChild(modalText);
modal.appendChild(modalContent);
document.body.appendChild(modal);

// --- Mostrar modal ---
function showModal(correctCount) {
  modalText.innerText = `You have ${correctCount} correct answers out of ${quizData.length}`;
  modal.style.opacity = "1";
  modal.style.visibility = "visible";
}

// --- Ocultar modal ---
function hideModal() {
  modal.style.opacity = "0";
  modal.style.visibility = "hidden";
}

// --- Cerrar modal ---
closeModal.addEventListener("click", hideModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) hideModal();
});

// --- Lógica del botón Check ---
checkButton.addEventListener("click", () => {
  let correctCount = 0;
  quizData.forEach(q => {
    if (q.selected === q.solution) correctCount++;
  });
  showModal(correctCount);
});

renderQuestion();
