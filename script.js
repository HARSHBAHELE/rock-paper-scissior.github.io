let userScore = 0;
let comScore = 0;
let counter = 0;

let choices = document.querySelectorAll(".choice");
let you = document.querySelector("#user");
let com = document.querySelector("#Computer")
let mess = document.querySelector("#mess")
let messBox = document.querySelector(".mess-box")

let showWin = (userWin) => {
    if(userWin) {
        userScore++
        you.innerText=userScore
        mess.innerText="You win You beats Computer !!";
        mess.style.backgroundColor="#4CCD99";
    } else {
        comScore++
        com.innerText=comScore;
        mess.innerText="You loose Computer beats you !!"
        mess.style.backgroundColor="#F95454";
    }
}
let draw = () => {
    mess.innerText="Game was Draw !!";
    mess.style.backgroundColor="#08C2FF";
}
let gencomChoice = () => {
    let options = ["rock","paper","scissor"];
    let randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

let playGame = (userChoice) => {
    console.log(userChoice);
    let comChioce = gencomChoice();
    console.log(comChioce);

    if(userChoice === comChioce) {
        draw();
    } else {
        let userWin = true;
        if(userChoice=="rock") {
            userWin = comChioce === "paper" ? false : true;
        } else if (userChoice === "paper") {
            comChioce==="scissors";
            userWin = comChioce === "scissor" ? false : true;
        } else {
            userWin = comChioce === "rock" ? false : true;
        }
        showWin(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        let userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});