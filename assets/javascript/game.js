// Global space
$(document).ready(function () {

  //Declare variables for scoreboard
  var current = 0;
  var wins = 0;
  var losses = 0;
  //Generates a random number
  var target = Math.floor(Math.random() * 101 + 19)
  var crystal1 = (Math.floor(Math.random() * 10 + 2));
  var crystal2 = (Math.floor(Math.random() * 11 + 2));
  var crystal3 = (Math.floor(Math.random() * 12 + 2));
  var crystal4 = (Math.floor(Math.random() * 13 + 2));
  console.log(crystal1); 
  console.log(crystal2); 
  console.log(crystal3); 
  console.log(crystal4); 
  $("h5.card-wins").html("Total wins:  " + wins);
  $("h5.card-losses").html("Total losses:  " + losses);
  $("h5.card-current").html("Current Total:  " + current);
  $("h5.card-target").html("Your target:  " + target);

  //Game runtime 
  $("img.gem1").click(function () {
    current = current + crystal1;
    $("h5.card-current").html("Current Total: " + current)
  })
  $("img.gem2").click(function () {
    current = current + crystal2;
    $("h5.card-current").html("Current Total: " + current)
  })
  $("img.gem3").click(function () {
    current = current + crystal3;
    $("h5.card-current").html("Current Total: " + current)
  })
  $("img.gem4").click(function () {
    current = current + crystal4;
    $("h5.card-current").html("Current Total: " + current)
  })
});

