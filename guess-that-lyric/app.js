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
      "<h3>Yeah, I'm gonna take my horse to the old town road I'm gonna ride 'til I can't no more</h3>"
    );
  });
});
