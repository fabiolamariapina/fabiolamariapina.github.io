// create a nested array of objects for questions and answer choices
// https://stackoverflow.com/questions/56115993/create-nested
//-array-in-javascript
const questionsAndAnswers = [
  {
    question:
      "Yeah, I'm gonna take my ____ to the old town road I'm gonna ____ 'til I can't no more",
    choice1: "horse,ride",
    choice2: "horse, die",
    choice3: "pony, ride",
    choice4: "pony, die",
    correctAnswer: "horse,ride",
  },
  {
    question:
      "There's a fire starting in my ____ Reaching a fever ____ and it's bringing me out the dark",
    choice1: "heart, ditch",
    choice2: "dart, ditch",
    choice3: "dart, pitch",
    choice4: "heart, pitch",
    correctAnswer: "heart, pitch",
  },
  {
    question: "That's why I need a one dance Got a ____ in my hand",
    choice1: "Bacardi",
    choice2: "Tequila",
    choice3: "Hennessy",
    choice4: "Vodka",
    correctAnswer: "Hennessy",
  },
  {
    question:
      "I see the magazine workin' that _____ We know that shit ain't real, come on now, make it stop",
    choice1: "Booty",
    choice2: "Photoshop",
    choice3: "Facetune",
    choice4: "funky jazz",
    correctAnswer: "Photoshop",
  },
  {
    question: "Stop, wait a minute Fill my cup, put some ____ in it",
    choice1: "water",
    choice2: "liquor",
    choice3: "soda",
    choice4: "vodka",
    correctAnswer: "liquor",
  },
];

// create variables for correct answers

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
      .addClass("choice-1 btn-sm")
      .text(newQuestions[randomIndex].choice1);
    $(".choices").append($choice1);

    //answerChoice2
    const $choice2 = $("<button>")
      .addClass("choice-2 btn-sm")
      .text(newQuestions[randomIndex].choice2);
    $(".choices").append($choice2);

    //answerChoice3
    const $choice3 = $("<button>")
      .addClass("choice-3 btn-sm")
      .text(newQuestions[randomIndex].choice3);
    $(".choices").append($choice3);

    //answerChoice4
    const $choice4 = $("<button>")
      .addClass("choice-4 btn-sm ")
      .text(newQuestions[randomIndex].choice4);
    $(".choices").append($choice4);

    //remove item from array once it has been used as a question
    newQuestions.splice(randomIndex, 1);
  };

  // user will pick thier answer and then user will click the answer button
  // when user clicks the answer button, it will flash red for wrong answer choices and right
  // for wrong answe choices
  //what the user clicks will contribute to their point total
  const rightOrWrong = () => {
    // psuedocode
    // correct answer will be green, wrong anweres red -> all jQuery
    // if user gets answer correct, they will get one point added to score
    // else, they do not get any points
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

  // create event handler for when users chooses their answer
  // let userChoice = $("")

  //create event handler for answer button once user chooses their answer
  // $answerButton.on("click", () => {
  //   rightOrWrong();
  // });
});


//  //change let's play button to next button 
// next button will appear after user find out if their answer is right/wrong
    // source:
    //https://www.tutorialrepublic.com/faq/how-to-change-the-text
    //-of-a-button-using-jquery.php
    // change class of answer button but keep same styling of let's play
    //button
    // source: https://stackoverflow.com/questions/3959236/
    //how-to-change-class-name-of-an-element-by-jquery
    // const $nextButton = $("#btn").html("Next").addClass("next-button");
