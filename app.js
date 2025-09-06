//Step 1: Initialize scores and select DOM elements
let userScore=0;
let computerScore=0;

//DOM elements
const choices=document.querySelectorAll('.choice');
const msg=document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const computerScorePara= document.querySelector("#computer-score");

//Step 2: Function to generate computer's choice
const genCompsChoice=()=>{
    const choices=['rock','paper','scissors'];
    const randomNum=Math.floor(Math.random()*3);
    return choices[randomNum];
}

//step 3:draw function
const drawGame=()=>{
    msg.innerText="Its a Draw! Try Again!";
    msg.style.backgroundColor="gray";
    msg.style.color="white";
}

//Step 4: Show winner function
const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green";
        msg.style.color="white";
    }else{
        computerScore++;
        computerScorePara.innerText=computerScore;
        msg.innerText=`You Lose! ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }
}
//Step 5: Play game function
const playGame=(userChoice)=>{
    console.log("User Choice is:",userChoice);
    const computerChoice=genCompsChoice();
    console.log("Computer Choice is :",computerChoice);

    if(userChoice===computerChoice){
        drawGame();
    }else {
        let userWin=true;
        if(userChoice==="rock"){
            userWin=computerChoice ==="paper"? userWin=false:true;
        }else if(userChoice==="paper"){
            userWin=computerChoice==="scissors"? userWin=false:true;
        }else{
            userWin=computerChoice==="rock"? userWin=false:true;
        }
        showWinner(userWin,userChoice,computerChoice);

    }
}
//Step 6: Add event listeners to choices
choices.forEach(choice=>{
    choice.addEventListener('click',()=>{
        playGame(choice.id);
        
    })
})
