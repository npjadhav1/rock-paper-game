const options = ["rock", "paper", "scissors"];
const userChoiceContainer = document.getElementById("user-choice");
const computerChoiceContainer = document.getElementById("computer-choice");
const resultContainer = document.getElementById("result");

function selectRock()
{
    userChoiceContainer.innerText = "your choice: Rock(rock)";
   const userChoice = "rock";
   const ComputerChoice = getComputerChoice();

   computerChoiceContainer.innerText = "computer choice: " + computerChoice;

   checkWhoWon(userChoice,ComputerChoice);
}
function selectPaper()
{
    userChoiceContainer.innerText = "your choice: paper(paper)";
    const userChoice = "paper";
    const ComputerChoice = getComputerChoice();
 
    computerChoiceContainer.innerText = "computer choice: " + computerChoice;
 
    checkWhoWon(userChoice,ComputerChoice);
}
function selectScissors()
{
    userChoiceContainer.innerText = "your choice: Scissors(Scissors)";
    const userChoice = "Scissors";
    const ComputerChoice = getComputerChoice();
 
    computerChoiceContainer.innerText = "computer choice: " + computerChoice;
 
    checkWhoWon(userChoice,ComputerChoice);
}
function getComputerChoice()
{
    let randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
function checkWhoWon(userChoice,computerChoice)
{
    if((userChoice ==="rock" && computerChoice==="scissors") || 
    (userChoice==="paper" && computerChoice==="rock") ||
    (userChoice==="scissors" && computerChoice==="paper"))
    {
        resultContainer.innerHTML = "con...you won";
    }
    else if(computerChoice === "rock" && userChoice === "scissors") || 
    (userChoice==="paper" && computerChoice==="rock") ||
    (userChoice==="scissors" && computerChoice==="paper")
    {
        resultContainer.innerHTML = "you lost";
    }
    else
    {
        resultContainer.innerHTML = "Draw";
    }
}
