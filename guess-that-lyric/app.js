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
for (let i = 0; i < questionsAndAnswers.length; i++) {
  // console.log(questionsAndAnswers[i].question);
}
$(() => {
  //create variable to keep track of user's score
  let score = 0;

  //create new div between question and button
  //for answer choices
  const $submitAnswer = $("<div>").addClass("submit-answer");
  $(".container").append($submitAnswer);

  // create new question function
  // when let's play button is clicked, it will generate a
  //random question and answer pair from array of object
  //source: TA Help
  const getNewQuestion = () => {
    // loop through array
    for (let i = 0; i < questionsAndAnswers.length; i++) {
      // first question/other questions will appear when button is clicked
      const $question = $(".description")
        .removeClass("description")
        .addClass("question")
        .text(questionsAndAnswers[i].question);
    }

    //add submission form so that user can type in their answer 
    

    const $answerButton = $("#btn").html("Answer").addClass("answer-button");

    // create event handler for when users chooses their answer and thier answer turns yellow
    //and stays yellow until user clicks answer button
    // source: https://api.jquery.com/multiple-selector/
    // source: https://www.w3schools.com/jquery/event_preventdefault.asp
    $choice1.on("click", () => {
      $("#choice-1").css("background-color", "#f1e189").css("color", "#eeeeee");
      answerQuestion("choice1");
    });
    $choice2.on("click", () => {
      $("#choice-2").css("background-color", "#f1e189").css("color", "#eeeeee");
      answerQuestion("choice2");
    });
    $choice3.on("click", () => {
      $("#choice-3").css("background-color", "#f1e189").css("color", "#eeeeee");
      answerQuestion("choice3");
    });


    //create event handler for answer button once user chooses their answer
    $answerButton.on("click", (e) => {
      // if correct give it the correct css stylying and add score
      if (userChoice === questionsAndAnswers[0].correctAnswer) {
        score++;
        console.log(score);
      }
      // else give it the incorrect styling and dont give score
      else {
        return score;
      }
      const $nextButton = $("#btn").html("Next").addClass("next-button");
      //create event listner for next button
      // $nextButton.on(click, () => {
      //   getNewQuestion();
      // });
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
    getNewQuestion();
  });
});
