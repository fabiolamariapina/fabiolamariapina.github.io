// create a nested array of objects for questions and correct answers
// source: https://stackoverflow.com/questions/56115993/create-nested
//-array-in-javascript
// structure inspired by
const questionsAndAnswers = [
  {
    question:
      "Yeah, I'm gonna take my ____ to the old town road I'm gonna ____ 'til I can't no more",
    correctAnswer: "horse, ride",
  },
  {
    question:
      "There's a fire starting in my ____ Reaching a fever ____ and it's bringing me out the dark",
    correctAnswer: "heart, pitch",
  },
  {
    question: "That's why I need a one dance Got a ____ in my hand",
    correctAnswer: "Hennessy",
  },
  {
    question:
      "I see the magazine workin' that _____ We know that shit ain't real, come on now, make it stop",
    correctAnswer: "Photoshop",
  },
  {
    question: "Stop, wait a minute Fill my cup, put some ____ in it",
    correctAnswer: "liquor",
  },
];

$(() => {
  // create new question function
  // when let's play button is clicked, it will generate a
  //random question and answer pair from array of object
  //source: TA Help
  const getNewQuestion = (i) => {
    // first question/other questions will appear when button is clicked
    const $question = $(".description")
      .removeClass("description")
      .addClass("question")
      .text(questionsAndAnswers[i].question);
    // $(".container").append($question);
    // console.log($question);

    // add submission form so that user can type in their answer
    // create new div between question and button
    //for answer choices
    // form element
    const $form = $("<form>").addClass("form-inline");
    $(".container").append($form);

    // div where form is stored
    const $submitAnswer = $("<div>")
      .addClass("form-group mb-2")
      .attr("id", "form");

    //Enter Answer Here instruction for user
    $form.append($submitAnswer);
    const $input = $("<label>")
      .addClass("enter-answer-here")
      .text("Enter Answer Here");
    $submitAnswer.append($input);

    // where user will enter answer
    const $userInput = $("<input>")
      .addClass("form-control")
      .attr("id", "input-user-answer");
    $submitAnswer.append($userInput);

    //create answer button
    const $answerButton = $("#btn")
      .attr("id", "answer-btn")
      .text("Answer")
      .removeClass("let's-play-button btn-lg")
      .addClass("answer-button btn-lg");

    //create event listener
    $answerButton.on("click", () => {
      // get user's answer
      // source: https://stackoverflow.com/questions/12949041/assign-jquery-variable-to-input
      var userAnswer = $("#input-user-answer").val();
      // console.log(userAnswer);

      // create variable to keep track of user's score
      let score = 0;

      //create question counter and set it to 0
      // let questionCounter = 0;

      // loop through questionsAndAsnwers.correctAnswer to check
      //if user got it correct
      for (let i = 0; i < questionsAndAnswers.length; i++) {
        // check answer using if/else statement
        // if correct add to score
        if (userAnswer === questionsAndAnswers[i].correctAnswer) {
          score++;
          console.log(`Your score is ${score}`);
        }
        // else don't add to score
        else {
          console.log(`Your score is ${score}`);
        }
      }
      // questionCounter++;
      // console.log(questionCounter);
      getNewQuestion();
    });
  };

  // create event handler for let's
  //play button
  // source: General Assembly SEI
  //W03D01 notes
  const $btn = $("#btn");
  $btn.on("click", () => {
    // when let's play button is clicked,
    //the load page will disappear
    //and the first question will appear
    // remove and add class from .description
    //to .question
    // source: https://api.jquery.com/removeclass/
    // add text of object in questionAndAnswers array
    // make it so that when let's play button clicks,
    //a random array element (aka a random song/missing lyrics) appear
    // when let's play button is clicked, it will generate a new question
    getNewQuestion(0);
  });
});
