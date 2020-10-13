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
  },
  {
    question:
      "There's a fire starting in my ____ Reaching a fever ____ and it's bringing me out the dark",
    choice1: "heart, ditch",
    choice2: "dart, ditch",
    choice3: "dart, pitch",
    choice4: "heart, pitch",
  },
  {
    question: "That's why I need a one dance Got a ____ in my hand",
    choice1: "Bacardi",
    choice2: "Tequila",
    choice3: "Hennessy",
    choice4: "Vodka",
  },
  {
    question:
      "I see the magazine workin' that _____ We know that shit ain't real, come on now, make it stop",
    choice1: "Booty",
    choice2: "Photoshop",
    choice3: "Facetune",
    choice4: "funky jazz",
  },
  {
    question: "Stop, wait a minute Fill my cup, put some ____ in it",
    choice1: "water",
    choice2: "liquor",
    choice3: "soda",
    choice4: "vodka",
  },
];
// console.log(questionsAndAnswers[1].question);

$(() => {
  // create event handler for let's
  //play button
  // source: General Assembly SEI
  //W03D01 notes
  const $btn = $("#btn");
  $btn.on("click", () => {
    // when let's play button is clicked,
    //the load page will disappear
    //and the first question will appear
    const $question = $(".description")
      .removeClass("description")
      .addClass("question").;
    //create new div between question and button
    //for answer choices
    const $choices = $("<div>").addClass("choices");
    $(".container").append($choices);
    //answerChoice1
    const $choice1 = $("<button>")
      .addClass("choice-1 btn-sm")
      .text("horse, ride");
    $(".choices").append($choice1);
    //answerChoice2
    const $choice2 = $("<button>")
      .addClass("choice-2 btn-sm")
      .text("horse, die");
    $(".choices").append($choice2);
    //answerChoice3
    const $choice3 = $("<button>")
      .addClass("choice-3 btn-sm")
      .text("pony, ride");
    $(".choices").append($choice3);
    //answerChoice4
    const $choice4 = $("<button>")
      .addClass("choice-4 btn-sm ")
      .text("pony, die");
    $(".choices").append($choice4);
    //change let's play button to Answer button
    // source:
    //https://www.tutorialrepublic.com/faq/how-to-change-the-text
    //-of-a-button-using-jquery.php
    // change class of answer button but keep same styling of let's play
    //button
    // source: https://stackoverflow.com/questions/3959236/
    //how-to-change-class-name-of-an-element-by-jquery
    const $answerButton = $("#btn").html("Answer").addClass("answer-button");
  });
});

//for loop to generate random questions and answers
//recursive function
//right= function
for (let i = 0; i < questionsAndAnswers.length; i++) {
  // console.log(questionsAndAnswers);
  // output text for question and answer choices
}
