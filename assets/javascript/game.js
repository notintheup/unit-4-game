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

  $("h5.card-wins").html("Total wins:  " + wins);
  $("h5.card-losses").html("Total losses:  " + losses);
  $("h5.card-current").html("Current Total:  " + current);
  $("h5.card-target").html("Your target:  " + target);

  function win() {
    wins++
    $("h5.card-wins").html("Total wins:  " + (wins));
    reset();
  }

  function lose() {
    losses++
    $("h5.card-losses").html("Total losses: " + (losses));
    reset();
  }

  function reset() {
    current = 0;
    target = Math.floor(Math.random() * 101 + 19);
    $("h5.card-target").html("Your target:  " + target);
    crystal1 = (Math.floor(Math.random() * 10 + 2));
    crystal2 = (Math.floor(Math.random() * 11 + 2));
    crystal3 = (Math.floor(Math.random() * 12 + 2))
    crystal4 = (Math.floor(Math.random() * 13 + 2));
  }
  //Game runtime 
  $("img.gem1").click(function () {
    current = current + crystal1;
    $("h5.card-current").html("Current Total: " + current);
    if (target === current) {
      win();
    } else if (current >= target) {
      lose();
    }
  })
  $("img.gem2").click(function () {
    current = current + crystal2;
    $("h5.card-current").html("Current Total: " + current);
    if (target === current) {
      win();
    } else if (current >= target) {
      lose();
    }
  })
  $("img.gem3").click(function () {
    current = current + crystal3;
    $("h5.card-current").html("Current Total: " + current);
    if (target === current) {
      win();
    } else if (current >= target) {
      lose();
    }
  })
  $("img.gem4").click(function () {
    current = current + crystal4;
    $("h5.card-current").html("Current Total: " + current);
    if (target === current) {
      win();
    } else if (current >= target) {
      lose();
    }
  })

});