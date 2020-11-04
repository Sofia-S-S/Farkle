// jQuery

$(document).ready(function () {
  var pl1 = prompt("First Player");
  var pl2 = prompt("Srcond Player");
  var pl3 = prompt("Third Player");
  var pl4 = prompt("Fourth Player");
  var pl5 = prompt("Fifth Player");
  var pl6 = prompt("Sixth Player");
          
  $("#p1").append(`${pl1}`);
  $("#p2").append(`${pl2}`);
  $("#p3").append(`${pl3}`);
  $("#p4").append(`${pl4}`);
  $("#p5").append(`${pl5}`);
  $("#p6").append(`${pl6}`);
  
  var scoreThisRoll = 0;
  var total = 0;
  var scorePlOne = 0;
  var scorePlTwo = 0;
  var scorePlThree = 0;
  var scorePlFour = 0;
  var scorePlFive = 0;
  var scorePlSix = 0;
  // Combinations' Btn click
  $(".btn").on("click", function () {
    scoreThisRoll = parseFloat(this.value);
    total = total + scoreThisRoll;
    console.log(scoreThisRoll, total);
    // Display score
    $("#yourScore").append(`<br>${scoreThisRoll}`);
    $("#totalScore").empty().prepend(`${total}`);
  });
  // Done btn
  $(".done").on("click", function () {
    if (this.id === "doneOne") {
      scorePlOne = scorePlOne + total;
      // Display score
      $("#scorePlOne").empty().prepend(`${scorePlOne}`);
      $("#yourScore").empty();
      $("#totalScore").empty();
      total = 0;
    } else if (this.id === "doneTwo") {
      scorePlTwo = scorePlTwo + total;
      // Display score
      $("#scorePlTwo").empty().prepend(`${scorePlTwo}`);
      $("#yourScore").empty();
      $("#totalScore").empty();
      total = 0;
    } else if (this.id === "doneThree") {
      scorePlThree = scorePlThree + total;
      // Display score
      $("#scorePlThree").empty().prepend(`${scorePlThree}`);
      $("#yourScore").empty();
      $("#totalScore").empty();
      total = 0;
    } else if (this.id === "doneFour") {
      scorePlFour = scorePlFour + total;
      // Display score
      $("#scorePlFour").empty().prepend(`${scorePlFour}`);
      $("#yourScore").empty();
      $("#totalScore").empty();
      total = 0;
    } else if (this.id === "doneFive") {
      scorePlFive = scorePlFive + total;
      // Display score
      $("#scorePlFive").empty().prepend(`${scorePlFive}`);
      $("#yourScore").empty();
      $("#totalScore").empty();
      total = 0;
    } else {
      scorePlSix = scorePlSix + total;
      // Display score
      $("#scorePlSix").empty().prepend(`${scorePlSix}`);
      $("#yourScore").empty();
      $("#totalScore").empty();
      total = 0;
    }
  });
  // Farkle btn
  $(".farkle").on("click", function () {
    if (this.id === "farkleOne") {
      total = 0;
      scorePlOne = scorePlOne + total;
      // Display score
      $("#scorePlOne").empty().prepend(`${scorePlOne}`);
      $("#yourScore").empty();
      $("#totalScore").empty();
    } else if (this.id === "farkleTwo") {
      total = 0;
      scorePlTwo = scorePlTwo + total;
      // Display score
      $("#scorePlTwo").empty().prepend(`${scorePlTwo}`);
      $("#yourScore").empty();
      $("#totalScore").empty();
    } else if (this.id === "farkleThree") {
      total = 0;
      scorePlThree = scorePlThree + total;
      // Display score
      $("#scorePlThree").empty().prepend(`${scorePlThree}`);
      $("#yourScore").empty();
      $("#totalScore").empty();
    } else if (this.id === "farkleFour") {
      total = 0;
      scorePlFour = scorePlFour + total;
      // Display score
      $("#scorePlFour").empty().prepend(`${scorePlFour}`);
      $("#yourScore").empty();
      $("#totalScore").empty();
    } else if (this.id === "farkleFive") {
      total = 0;
      scorePlFive = scorePlFive + total;
      // Display score
      $("#scorePlFive").empty().prepend(`${scorePlFive}`);
      $("#yourScore").empty();
      $("#totalScore").empty();
    } else {
      total = 0;
      scorePlSix = scorePlSix + total;
      // Display score
      $("#scorePlSix").empty().prepend(`${scorePlSix}`);
      $("#yourScore").empty();
      $("#totalScore").empty();
    }
  });
  // Farkle btn
  $(".delete").on("click", function () {
    total = 0;
    $("#yourScore").empty();
    $("#totalScore").empty();
  });
});
