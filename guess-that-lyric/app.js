// create a nested array of objects for questions and answer choices
// source: https://stackoverflow.com/questions/56115993/create-nested
//-array-in-javascript
// structure inspired by
const questionsAndAnswers = [
  {
    question:
      "Yeah, I'm gonna take my ____ to the old town road I'm gonna ____ 'til I can't no more",
    answers: {
      choice1: "horse,ride",
      choice2: "horse, die",
      choice3: "pony, ride",
    },
    correctAnswer: "horse,ride",
  },
  {
    question:
      "There's a fire starting in my ____ Reaching a fever ____ and it's bringing me out the dark",
    answers: {
      choice1: "heart, ditch",
      choice2: "heart, pitch",
      choice3: "dart, pitch",
    },
    correctAnswer: "heart, pitch",
  },
  {
    question: "That's why I need a one dance Got a ____ in my hand",
    answers: {
      choice1: "Bacardi",
      choice2: "Tequila",
      choice3: "Hennessy",
    },
    correctAnswer: "Hennessy",
  },
  {
    question:
      "I see the magazine workin' that _____ We know that shit ain't real, come on now, make it stop",
    answers: {
      choice1: "Booty",
      choice2: "Photoshop",
      choice3: "Facetune",
    },
    correctAnswer: "Photoshop",
  },
  {
    question: "Stop, wait a minute Fill my cup, put some ____ in it",
    answers: {
      choice1: "water",
      choice2: "liquor",
      choice3: "soda",
    },
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
  const $choices = $("<div>").addClass("choices");
  $(".container").append($choices);

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

    //answerChoice1
    const $choice1 = $("<button>")
      .attr("id", "choice-1")
      .addClass("btn-sm")
      .text(questionsAndAnswers[0].answers.choice1);
    $(".choices").append($choice1);

    //answerChoice2
    const $choice2 = $("<button>")
      .attr("id", "choice-2")
      .addClass("btn-sm")
      .text(questionsAndAnswers[0].answers.choice2);
    $(".choices").append($choice2);

    //answerChoice3
    const $choice3 = $("<button>")
      .addClass("btn-sm")
      .attr("id", "choice-3")
      .text(questionsAndAnswers[0].answers.choice3);
    $(".choices").append($choice3);

    //remove item from array once it has been used as a question
    // newQuestions.splice(Index, 1);

    //change let's play button to Answer button
    // source:
    //https://www.tutorialrepublic.com/faq/how-to-change-the-text
    //-of-a-button-using-jquery.php
    // change class of answer button but keep same styling of let's play
    //button
    // source: https://stackoverflow.com/questions/3959236/
    //how-to-change-class-name-of-an-element-by-jquery
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

    // create answerQuestion function
    // in the answerButton function: get the text of the button(can be done
    //with jquerry) and compare it to the correct answer using an if statement
    const answerQuestion = (choice) => {
      let userChoice = "";
      if (choice === "choice1") {
        // this is where I make user choice = to choice 1 button
        let userChoice = "choice1";
      } else if (choice === "choice2") {
        // this is where I make user choice = to choice 2 button
        let userChoice = "choice2";
      } else if (choice === "choice3") {
        //this is where I make user choice = to choice 3 button
        let userChoice = "choice3";
      } else if (choice === "choice4") {
        //this is where I make user choice = to choice 4 button
        let userChoice = "choice4";
      }
    };

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
