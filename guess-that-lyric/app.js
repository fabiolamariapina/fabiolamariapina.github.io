// create a nested array of objects for questions and correct answers
// source: https://stackoverflow.com/questions/56115993/create-nested
//-array-in-javascript
// structure inspired by
const questionsAndAnswers = [
  {
    question:
      "Yeah, I'm gonna take my ____ to the old town road I'm gonna ____ 'til I can't no more",
    correctAnswer: "horse,ride",
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
  const getNewQuestion = () => {
    // loop through question part of the array
    // it is the only thing that will change, the answer submission will stay the same
    for (let i = 0; i < questionsAndAnswers.length; i++) {
      // first question/other questions will appear when button is clicked
      const $question = $(".description")
        .removeClass("description")
        .addClass("question")
        .text(questionsAndAnswers[i].question);
    }

    //add submission form so that user can type in their answer
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
      .text("Answer")
      .removeClass("let's-play-button btn-lg")
      .addClass("answer-button btn-lg");

    // create event listner for next button
    // $nextButton.on(click, () => {
    //   getNewQuestion();
    // });

    //create event handler for answer button once user chooses their answer
    // $answerButton.on("click", () => {
    //   // create next button
    //   const $nextButton = $("#btn")
    //     .text("Next")
    //     .removeClass("answer-button btn-lg")
    //     .addClass("next-button btn-lg");

    // get user's answer
    // source: https://stackoverflow.com/questions/12949041/assign-jquery-variable-to-input
    // var userAnswer = $("#input-user-answer").val();
    // console.log(userAnswer);
    // userAnswer.toLowerCase().trim();

    //prevent another form from appending

    // loop through questionsAndAsnwers.correctAnswer to check
    //if user got it correct
    // for (let i = 0; i < questionsAndAnswers.length; i++) {
    //create variable to keep track of user's score
    // let score = 0;

    //check answer using if/else statement
    // if correct give it the correct css stylying and add score
    // if (userAnswer === questionsAndAnswers[i].correctAnswer) {
    //   score++;
    //   console.log(score);
    // }
    // else give it the incorrect styling and dont give score
    //   else {
    //     return score;
    //   }
    // }
    // });
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
    getNewQuestion();
  });
});
