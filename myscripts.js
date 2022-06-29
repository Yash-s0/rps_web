// Created 2 Variables to store the score of player and computer
let playerScore = 0
let computerScore = 0

// Selected button query
const buttons = document.querySelectorAll('button')

// Randomly chooses Rock paper or Scissor for computer
function computerPlay() 
{
    const rock_paper_array = ['rock', 'paper', 'scissor'];
    const select_random = Math.floor(Math.random()*rock_paper_array.length);
    console.log((rock_paper_array[select_random]));
    return (rock_paper_array[select_random]);
}

// Disable the Buttons after the function is called
function disableButtons()
{
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

// Will play the rounds and Declare the Winner and Losser
function playRound( playerSelection)
{
    let computerSelection = computerPlay()
    let result = ""

    if (playerSelection == computerSelection)
    {
        console.log('Draw!!! ')
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

    }

    else if ( playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'scissor' ||
        playerSelection == 'scissor' && computerSelection == 'rock' )
    {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (computerScore == 5) 
        {
            result += '<br><br>You Lose the game! Reload the page to play again'
            disableButtons()
        }
        // console.log('You Lose!' + computerSelection + ' beats ' + playerSelection)
    }

    else if ( playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissor' && computerSelection == 'paper' ||
        playerSelection == 'rock' && computerSelection == 'scissor' )
    {
        playerScore +=1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection 
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (playerScore == 5)  
        {
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }
        // console.log('You Win!' + playerSelection + ' beats ' + computerSelection)
    }
    
    document.getElementById('result').innerHTML = result
    return
}

buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})
