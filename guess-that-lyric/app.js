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
      choice4: "pony, die",
    },
    correctAnswer: "horse,ride",
  },
  {
    question:
      "There's a fire starting in my ____ Reaching a fever ____ and it's bringing me out the dark",
    answers: {
      choice1: "heart, ditch",
      choice2: "dart, ditch",
      choice3: "dart, pitch",
      choice4: "heart, pitch",
    },
    correctAnswer: "heart, pitch",
  },
  {
    question: "That's why I need a one dance Got a ____ in my hand",
    answers: {
      choice1: "Bacardi",
      choice2: "Tequila",
      choice3: "Hennessy",
      choice4: "Vodka",
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
      choice4: "funky jazz",
    },
    correctAnswer: "Photoshop",
  },
  {
    question: "Stop, wait a minute Fill my cup, put some ____ in it",
    answers: {
      choice1: "water",
      choice2: "liquor",
      choice3: "soda",
      choice4: "vodka",
    },
    correctAnswer: "liquor",
  },
];

$(() => {
  // create new array from old array so that it will be
  //easier to eliminate anything from array that has already been
  //asked as a questions
  //source: TA help
  let newQuestions = questionsAndAnswers;

  //create new variable to keep track of user's score
  let score = 0;

  // create new question function
  // when let's play button is clicked, it will generate a
  //random question and answer pair from array of object
  //source: TA Help
  const getNewQuestion = () => {
    // generate random questions and answers when button is clicked
    const randomIndex = Math.floor(Math.random() * newQuestions.length);
    const $question = $(".description")
      .removeClass("description")
      .addClass("question")
      .text(newQuestions[randomIndex].question);

    //create new div between question and button
    //for answer choices
    const $choices = $("<div>").addClass("choices");
    $(".container").append($choices);

    //answerChoice1
    const $choice1 = $("<button>")
      .attr("id", "choice-1")
      .addClass("btn-sm")
      .text(newQuestions[randomIndex].answers.choice1);
    $(".choices").append($choice1);

    //answerChoice2
    const $choice2 = $("<button>")
      .attr("id", "choice-2")
      .addClass("btn-sm")
      .text(newQuestions[randomIndex].answers.choice2);
    $(".choices").append($choice2);

    //answerChoice3
    const $choice3 = $("<button>")
      .addClass("btn-sm")
      .attr("id", "choice-3")
      .text(newQuestions[randomIndex].answers.choice3);
    $(".choices").append($choice3);

    //answerChoice4
    const $choice4 = $("<button>")
      .attr("id", "choice-4")
      .addClass("btn-sm")
      .text(newQuestions[randomIndex].answers.choice4);
    $(".choices").append($choice4);

    //remove item from array once it has been used as a question
    newQuestions.splice(randomIndex, 1);

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
      answerQuestion();
    });
    $choice2.on("click", () => {
      $("#choice-2").css("background-color", "#f1e189").css("color", "#eeeeee");
      answerQuestion();
    });
    $choice3.on("click", () => {
      $("#choice-3").css("background-color", "#f1e189").css("color", "#eeeeee");
      answerQuestion();
    });
    $choice4.on("click", () => {
      $("#choice-4").css("background-color", "#f1e189").css("color", "#eeeeee");
      answerQuestion();
    });

    // create event listener that listens for that .btn-sm class to be clicked
    //and then make it fire off answer button function
    // $(".btn-sm").on("click", () => {
    //   answerQuestion();
    // });

    // create answerQuestion function
    // in the answerButton function: get the text of the button(can be done
    //with jquerry) and compare it to the correct answer using an if statement
    const answerQuestion = () => {
      //create event handler for answer button once user chooses their answer
      $answerButton.on("click", () => {
        // get the text of the button and compare it to correct answer
        // let userChoice = $("#choice-1").click();
        // if correct give it the correct css stylying and add score
        if (userChoice === newQuestion[randomIndex.correctAnswer]) {
          // css styling: in my css folder
          score++;
        }
        // else give it the incorrect styling and dont give score
        else {
          // css styling in css file
          return score;
        }
        const $nextButton = $("#btn").html("Next").addClass("next-button");
        //create event listner for next button
        $nextButton.on(click, () => {
          getNewQuestion();
        });
      });
    };
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
    //a random array element (aka a random song/missing lyrics) appears
    getNewQuestion();
  });
});
