const companyName = "Intrepid Duck";

document.getElementById("currentdatetime").innerHTML = "Today is: " + Date();

function greetUser() 
{
const userName = document.getElementById("name").value;
const userFeeling = document.getElementById("feeling").value;
document.getElementById("greetingmessage").innerHTML = `The ${companyName} welcomes you, ${userName}! We're glad you are doing ${userFeeling}!`;
}

function numberSides() 
{
    let x = parseInt(document.getElementById("number").value, 10);
    x = Math.abs(x);

    let text;
    if (x === 1) 
    {
        text = "henagon";
    } 
    else if (x === 2) 
    {
        text = "digon";
    } 
    else if (x === 3) 
    {
        text = "trigon";
    } 
    else if (x === 4) 
    {
        text = "tetragon";
    } 
    else if (x === 5) 
    {
        text = "pentagon";
    } 
    else if (x === 6) 
    {
        text = "hexagon";
    } 
    else if (x === 7) 
    {
        text = "heptagon";
    } 
    else if (x === 8) 
    {
        text = "octagon";
    } 
    else if (x === 9) 
    {
        text = "enneagon";
    } 
    else if (x === 10) 
    {
        text = "decagon";
    } 
    else 
    {
        text = "Input not valid";
    }
    document.getElementById("sides").innerHTML = text;

}

function randomQuacks() 
{
    const randomCount = Math.floor(Math.random() * 8) + 1;
    let message = '';

    for (let i = 0; i < randomCount; i++) {
        message += 'Quack ';
    }

    document.getElementById("quackmessage").innerHTML = message.trim();
}


function generateCardRarity() 
{
    const rarities = ["Common", "Uncommon", "Rare", "Epic", "Legendary"];
    const randomRarity = rarities[Math.floor(Math.random() * rarities.length)];
    document.getElementById("raritymessage").innerHTML = `You found a ${randomRarity} card!`;
}


let cardCount = 0;
function addCard() 
{
    cardCount++;
    document.getElementById("collectionmessage").innerHTML = `You now have ${cardCount} cards in your collection!`;
}


function showGameRules() 
{
    const rules = `
        1. Each player starts with 5 cards.<br>
        2. Players take turns to attack.<br>
        3. The player with the highest power wins.<br>
        4. Special abilities can be used once per game.<br>
        5. Have fun and enjoy trading!
    `;
    document.getElementById("rulesmessage").innerHTML = `Game Rules:<br>${rules}`;
}

function subtractNumbers(num1, num2) 
{
    const difference = num1 - num2;
    document.getElementById("differencemessage").innerHTML = `The difference between ${num1} and ${num2} is: ${difference}`;
}