let playerScore=0;
let compScore=0;
let roundPlayed=0;
let totalRounds=10;

function handlePlayerChoices(playerChoice){
    if(roundPlayed >= totalRounds) return;

    const choices=["rock","paper", "scissor"];
    const compChoices=choices[Math.floor(Math.random()*3)];
    let resultText="";
    if(playerChoice===compChoices){
        resultText=`It's a tie both have same choices `;
    }
    else if(
        playerChoice==="rock" && compChoices==="scissor"||
        playerChoice==="paper" && compChoices==="rock"||
        playerChoice==="scissor" && compChoices==="paper"
    ){
        playerScore++;
        resultText= `Player win  ${playerChoice}  beat ${compChoices}` ;
    }
    else{
        compScore++;
        resultText=`Computer win ${compChoices} beat ${playerChoice}`
    }
    roundPlayed++;
    //update score BOARD
    document.getElementById('result').innerText=resultText;
    document.getElementById('scoreBoard').innerText=`player ${playerScore}| computer ${compScore}`;

    //game stop after  10 rounds 
    if(roundPlayed===totalRounds){
        let finalMessage="";
        if(playerScore>compScore){
            finalMessage=`🎉 FINAL WINNER: PLAYER! 🎉`;
        }
        else if(compScore>playerScore){
            finalMessage=`🎉 FINAL WINNER: Computer! 🎉`;
        }
        else{
            finalMessage=`It's a tie!`;
        }
        document.getElementById('result').innerText=finalMessage;

        }
        document.getElementById('roundLeft').innerText=`Round ${roundPlayed}`;
}