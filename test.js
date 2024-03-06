const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const questions = document.querySelectorAll(".question");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const userAnswer = [];

  questions.forEach((question, index) => {
    const options = question.querySelectorAll('input[type="checkbox"]:checked');
    const userOptions = Array.from(options).map(option => option.value);
    userAnswer.push(userOptions);
  });

  console.log(userAnswer);

  userAnswer.forEach((ans, index) => {
    const correctAns = getCorrectAnswers(index + 1); // Questions start from index 1
    const isCorrect = checkAnswer(ans, correctAns);

    if (isCorrect) {
      score++;
      questions[index].classList.add("correct");
    } else {
      questions[index].classList.add("wrong");
    }
  });

  scrollTo(0, 0);
  result.classList.remove("hide");
  result.querySelector("p").textContent = `You scored ${score}/${questions.length}`;
});

function getCorrectAnswers(questionNumber) {
  // Define correct answers for questions 1-20 and 21-30
  const correctAnswers = {
    1: ["A"],
    2: ["B"],
    3: ["A"],
    4: ["D"],
    5: ["A"],
    6: ["B"],
    7: ["C"],
    8: ["D"],
    9: ["A"],
    10: ["B"],
    11: ["C"],
    12: ["D"],
    13: ["A"],
    14: ["B"],
    15: ["C"],
    16: ["D"],
    17: ["A"],
    18: ["B"],
    19: ["C"],
    20: ["D"],
    21: ["A", "B"],
    22: ["A", "B"],
    23: ["A", "B"],
    24: ["A", "B"],
    25: ["A", "B"],
    26: ["A", "B"],
    27: ["A", "B"],
    28: ["A", "B"],
    29: ["A", "B"],
    30: ["A", "B"]
  };

  return correctAnswers[questionNumber] || [];
}

function checkAnswer(userAns, correctAns) {
  // Check if the answer is correct based on the question type
  const isQuestion1To20 = userAns.length === 1 && userAns[0] === correctAns[0];
  const isQuestion21To30 = userAns.length === 2 && correctAns.length === 2 &&
    userAns.every(option => correctAns.includes(option));

  return isQuestion1To20 || isQuestion21To30;
}
