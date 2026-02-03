const questions = document.querySelectorAll(".btn");
let res = document.getElementById("background")
questions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.closest(".faq").querySelector(".ans");

    if (answer.style.display === "block") {
      answer.style.display = "none";
      question.src="./assets/images/icon-plus.svg";
    } else {
      answer.style.display = "block";
      question.src="./assets/images/icon-minus.svg";
    }
  });
});
