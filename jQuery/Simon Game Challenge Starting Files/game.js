var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue" , "green" , "yellow"];

var started = false;
var level = 0;

$(document).keydown(function() {
    if (!started) {
        $("h1").text("Level " + level);
        nextSequence();
        started = true;
    }
});

function playSound(name) {
    var audio = new Audio('./sounds/'+name+'.mp3');
        audio.play();
};

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    animatePress(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length -1);
});

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("h1").text("Level " + level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
}

function animatePress(correntColour) {
    $("#" + correntColour).addClass("pressed");
    setTimeout(function() {
        $("#" + correntColour).removeClass("pressed")
    }, 100);
};

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if(gamePattern.length === userClickedPattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    }
    else {
        console.log("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over")
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        var audio = new Audio('./sounds/wrong.mp3');
            audio.play();
        startOver();
    }
};

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}