$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      var audio = document.getElementById("audio");
      audio.play();
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
   
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });
});
