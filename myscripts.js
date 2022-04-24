function computerPlay(items)
{
    random_item = [Math.floor(Math.random()*items.length)];;
    return random_item
}

const items = ["Rock", "Paper", "Scissors"];
const result = computerPlay(items);
console.log(result);