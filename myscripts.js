let computerSelection;
let playerSelection;



function computerPlay()
{
    const items = ['rock', 'paper', 'scissor'];

    const random = Math.floor(Math.random() * items.length);
    console.log(items[random]);
    computerSelection = (items[random]);
}

computerPlay()

function playerPlay()
{
    playerSelection = window.prompt("Choose from Rock, Paper and scissor.")
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection)
}

playerPlay()

// WORKING CODE FOR PRODUCING END RESULT

// if ( computerSelection == playerSelection)
//     console.log('Draw,you both choose ' + computerSelection);

// else if (
//         computerSelection == "rock" && playerSelection == "scissor" ||
//         computerSelection == "paper" && playerSelection == "rock" ||
//         computerSelection == "scissor" && playerSelection == "paper"
//         )
//         console.log('Computer Win !')

// else if (
//         computerSelection == "rock" && playerSelection == "paper" ||
//         computerSelection == "paper" && playerSelection == "scissor" ||
//         computerSelection == "scissor" && playerSelection == "rock"
//         )
//         console.log('Player Win!')


// else
//     console.log('Wrong Input!!!');


    
function playOnce(playerSelection,computerSelection)
{
    if ( computerSelection == playerSelection)
    console.log('Draw,you both choose ' + computerSelection);

else if (
        computerSelection == "rock" && playerSelection == "scissor" ||
        computerSelection == "paper" && playerSelection == "rock" ||
        computerSelection == "scissor" && playerSelection == "paper"
        )
        // return 'You Lose ! '+ computerSelection + ' Beats ' + playerSelection
        console.log('You Lose! '+ computerSelection + ' Beats ' + playerSelection)

else if (
        computerSelection == "rock" && playerSelection == "paper" ||
        computerSelection == "paper" && playerSelection == "scissor" ||
        computerSelection == "scissor" && playerSelection == "Rock"
        )
        // return 'You Win ! '+ (playerSelection) + ' Beats ' + computerSelection
        console.log('You Win! '+ playerSelection + ' Beats ' + computerSelection)

else
    console.log('Wrong Input!!!');   
}

playOnce(playerSelection,computerSelection)
