// Global space
$(document).ready(function () {
  //Declare variables for scoreboard
  var current = 0;
  var wins = 0;
  var losses = 0;
  var target = Math.floor(Math.random() * 101 + 19)

  $("h5.card-wins").html("Total wins:  " + wins);
  $("h5.card-losses").html("Total losses:  " + losses);
  $("h5.card-current").html("Current Total:  " + current);
  $("h5.card-target").html("Your target:  " + target);

  //Generates a random target number
  //Game variables
  var crystal1 = (Math.floor(Math.random() * 10 + 2));
  var crystal2 = (Math.floor(Math.random() * 11 + 2));
  var crystal3 = (Math.floor(Math.random() * 12 + 2));
  var crystal4 = (Math.floor(Math.random() * 13 + 2));
  console.log(crystal1);
  console.log(crystal2);
  console.log(crystal3);
  console.log(crystal4);
})

//Game 
$(".gem1, .gem2, .gem3, .gem4").on({
  mouseenter: function(){
    $(this).css("background-color", "purple");
  }, 
  mouseleave: function(){
    $(this).css("background-color", "lightblue");
  }, 
  click: function(){
    clickVal += $(this).val();
    $("h5.card-current").text("current" + clickVal);
  } 
});

