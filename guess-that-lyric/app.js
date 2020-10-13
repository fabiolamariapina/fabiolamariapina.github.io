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
    // I want to replace description and btn
    //with question and multiple choice answers
    // source: https://api.jquery.com/replacewith/
    const $question = $(".description").replaceWith(
      "<h3>Yeah, I'm gonna take my ____ to the old town road I'm gonna ____ 'til I can't no more</h3>"
    );
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
