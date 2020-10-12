// when user clicks the begin game button,
//the first question/lyric/song will appear
$(() => {
  // create event handler for let's
  //play button
  const $btn = $("#btn");
  $btn.on("click", () => {
    console.log("button was clicked");
  });
});
