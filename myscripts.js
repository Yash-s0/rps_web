// Computer selecting the output from Rock, Paper and Scissor

function computerPlay() 
{
    let computerSelection;
    const rock_paper_array = ['rock', 'paper', 'scissor'];
    const select_random = Math.floor(Math.random()*rock_paper_array.length);
    computerSelection = (rock_paper_array[select_random]);
    console.log(computerSelection)
    return computerSelection
}

// Prompting for user to give a input

function playerPlay()
{
    let playerSelection;
    selection_prompt = window.prompt("Choose from Rock, Paper and Scissor.")
    playerSelection = selection_prompt.toLowerCase();
    console.log(playerSelection)
    return playerSelection
}


// Checking the Winner

function playRound( playerSelection, computerSelection)
{
    if (playerSelection == computerSelection)
    {
        console.log('Draw!!! ')
    }
    else if (
        playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'scissor' ||
        playerSelection == 'scissor' && computerSelection == 'rock' )
    {
        console.log('You Lose!' + computerSelection + ' beats ' + playerSelection)
    }

    else if (
        playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissor' && computerSelection == 'paper' ||
        playerSelection == 'rock' && computerSelection == 'scissor' )
    {
        console.log('You Win!' + playerSelection + ' beats ' + computerSelection)
    }
    else 
    {
        console.log('Choose from Rock, Paper and Scissor ONLY.')
    }
}

// Function to play rounds of game

function game()
{
    for( let rounds = 0; rounds < 5; rounds++)
    {
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        result_ = playRound(playerSelection, computerSelection);
        // console.log(result_)
    }
}

game()