let computerScore = 0;
let playerScore = 0;
let NoOfPlays = 0;
let flipBtn = document.querySelector("#btn");
let guess = document.querySelector("#guess").value

function coinFlip() {
    var flip = Math.floor(Math.random() * 2)
    if (flip === 0) return "heads"
    else return "tails"
}

flipBtn.addEventListener('click', () => {

    if (NoOfPlays == 5) {
        playerScore = 0
        computerScore = 0
        NoOfPlays = 0
    }

    let result = coinFlip()

    if (result === guess) {
        NoOfPlays += 1
        document.getElementById("playerscore").innerHTML = " Your score is " + NoOfPlays
        document.getElementById("computerscore").innerHTML = " computerScore is " + computerScore
    } else {
        computerScore++

        document.getElementById("playerscore").innerHTML = result + " " + " Your score is " + NoOfPlays
        document.getElementById("computerscore").innerHTML = " computerScore is " + computerScore
    }
    NoOfPlays += 1
        // console.log(NoOfPlays)

})