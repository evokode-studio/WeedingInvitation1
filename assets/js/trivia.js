document.addEventListener("DOMContentLoaded", () => {
  const triviaItems = document.querySelectorAll(".trivia__item");
  const submitBtn = document.getElementById("submitTrivia");
  const resultText = document.getElementById("triviaResult");

  // Manejar selección
  triviaItems.forEach((item) => {
    const options = item.querySelectorAll(".trivia__option");
    options.forEach((option) => {
      option.addEventListener("click", () => {
        // Quitar selección previa
        options.forEach(opt => opt.classList.remove("selected"));
        option.classList.add("selected");
      });
    });
  });

  // Evaluar al enviar
  submitBtn.addEventListener("click", () => {
    let correct = 0;
    let answered = 0;

    triviaItems.forEach((item) => {
      const correctAnswer = item.getAttribute("data-correct");
      const selected = item.querySelector(".trivia__option.selected");
      if (selected) {
        answered++;
        if (selected.textContent.trim() === correctAnswer.trim()) {
          correct++;
        }
      }
    });

    if (answered < triviaItems.length) {
      resultText.textContent = "Por favor responde todas las preguntas.";
    } else {
      resultText.textContent = `¡Tuviste ${correct} de ${triviaItems.length} respuestas correctas!`;
    }
  });
});
