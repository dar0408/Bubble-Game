var time = 60;
var score = 0;
var hitNumber = 0;

function bubbleMaker() {
    var num = "";
    for (var i = 0; i < 70; i++) {
        var randomBubble = Math.floor(Math.random() * 10);
        num += `<div class="bubble">${randomBubble}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = num;
}

function timer() {
    var reducer = setInterval(function () {
        if (time > 0) {
            time--;
            document.querySelector("#tic").textContent = time;
        } else {
            endGame();
            clearInterval(reducer);
        }
    }, 1000);
}

function setHitNumber() {
    hitNumber = Math.floor(Math.random() * 10);
    document.querySelector("#hited").textContent = hitNumber;
}

function incScore() {
    score += 10;
    document.querySelector("#scored").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (tar) {
    var clicked = Number(tar.target.textContent);

    if (hitNumber === clicked) {
        incScore();
        bubbleMaker();  // Regenerate bubbles
        setHitNumber(); // Generate a new hit target
    }
});

function endGame() {
    document.querySelector("#game-over").style.display = "flex";
    document.querySelector("#game-over h1").textContent = `Game Over! Your final score: ${score}`;
}

document.querySelector("#restart-btn").addEventListener("click", function () {
    // Reset the game state
    time = 60;
    score = 0;
    document.querySelector("#tic").textContent = time;
    document.querySelector("#scored").textContent = score;
    document.querySelector("#game-over").style.display = "none";
    bubbleMaker();
    setHitNumber();
    timer();
});

// Initialize the game
setHitNumber();
bubbleMaker();
timer();
