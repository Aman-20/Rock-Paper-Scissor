let uscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const p = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");

const CompChoice = () => {
    let option = ["rock", "paper", "scissor"];
    const optionIdx = Math.floor(Math.random() * 3);
    return option[optionIdx];
}

const playgame = (your) => {
    console.log("Your Choice: ",your);

    let bot = CompChoice();
    console.log("Computer Choice: ",bot);

    if(your === bot){
        drawGame();
    } else {

        let winCond = true;
        if(your === "rock") {
            winCond = bot === "paper" ? false : true;
        } else if(your === "paper"){
            winCond = bot === "scissor"? false : true;
        } else {
            winCond = bot === "rock"? false : true;
        }

        showWinner(winCond,your,bot);
         
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        let userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

const drawGame = () => {
    console.log("draw");
    p.innerText = "It's a Draw!";
    p.style.backgroundColor = "#081b31";

}

const showWinner = (winCond,your,bot) => {
    if(winCond){
        console.log("You win");
        p.innerText=`You Win! ${your} beats ${bot}`;
        p.style.backgroundColor = "green";
        uscore++;
        userscore.innerText = uscore;


    } else {
        console.log("you Lose");
        p.innerText=`You Lose! ${bot} beats ${your}`;
        p.style.backgroundColor = "red";
        compscore++;
        computerScore.innerText = compscore;

    }
}