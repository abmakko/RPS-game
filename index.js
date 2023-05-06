let player_choice = '';
let player_option = 0;

let computer_win_tally = 0;
let player_win_tally = 0;
let computer_option = '';
let count = 0;
let draw_counter = 0;

let messages = '';

const rock_event = document.getElementById("rock");
const paper_event = document.getElementById("paper");
const scissor_event = document.getElementById("scissor");

const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

rock_event.addEventListener('click', init_animation);
paper_event.addEventListener('click', init_animation);
scissor_event.addEventListener('click', init_animation);

const count_container = document.getElementById("message");
const counter = document.getElementsByClassName("slides");

const rock_rightSide = document.getElementById("rock-right");
const rock_leftSide = document.getElementById("rock-left");

const scissor_leftSide = document.getElementById("scissor-left");
const scissor_rightSide = document.getElementById("scissor-right");

const paper_leftSide = document.getElementById("paper-left");
const paper_rightSide = document.getElementById("paper-right");

const button_group = document.getElementsByClassName("action-btn");

const hand_display = document.getElementsByClassName("hand-container");

const tags = document.getElementsByClassName("tag");

const prompt_msg = document.getElementById("prompt-text");

rock_rightSide.addEventListener('animationend', gameState_1);

let computerChoice = Math.floor(Math.random() * 3) + 1;

function gameState_1(){
    playerScore.textContent = player_win_tally;
    computerScore.textContent = computer_win_tally;
    prompt_msg.textContent = messages;
    console.log(messages);    
    Array.from(button_group).forEach(element => element.disabled = false);  
    Array.from(counter).forEach(element => element.classList.remove("number")); 
    rock_leftSide.classList.remove("animate_2");
    rock_rightSide.classList.remove("animate_1");
    count_container.style.display = "none";


    switch(player_option){
        case 1:
            rock_leftSide.style.display = "flex";
            scissor_leftSide.style.display = "none";
            paper_leftSide.style.display = "none";            
            break;
        case 2:
            paper_leftSide.style.display = "flex";
            rock_leftSide.style.display = "none";
            scissor_leftSide.style.display = "none";            
            break;
        case 3:
            scissor_leftSide.style.display = "flex";
            rock_leftSide.style.display = "none";        
            paper_leftSide.style.display = "none";            
            break;
    }

    switch(computerChoice){
        case 1:
            rock_rightSide.style.display = "flex";
            scissor_rightSide.style.display = "none";
            paper_rightSide.style.display = "none";
            
            break;
        case 2:
            paper_rightSide.style.display = "flex";
            rock_rightSide.style.display = "none";
            scissor_rightSide.style.display = "none";            
            break;
        case 3:
            scissor_rightSide.style.display = "flex";
            rock_rightSide.style.display = "none";        
            paper_rightSide.style.display = "none";            
            break;
    }   
}

function anim_1(){ 
    count_container.style.display = "flex";
    Array.from(counter).forEach(element => element.classList.add("number"));
    rock_leftSide.style.display = "flex";
    rock_rightSide.style.display = "flex";
    paper_leftSide.style.display = "none";
    paper_rightSide.style.display = "none";
    scissor_leftSide.style.display = "none";
    scissor_rightSide.style.display = "none";
    rock_leftSide.classList.add("animate_2");
    rock_rightSide.classList.add("animate_1");
}

function init_animation(e){
    prompt_msg.innerHTML = '';
    computerChoice = Math.floor(Math.random() * 3) + 1;
    Array.from(button_group).forEach(element => element.disabled = true);
    Array.from(tags).forEach(element => element.style.display = 'none');    
    
    anim_1();
    switch(e.target.id){
        case 'rock': 
            player_option = 1;
            if(computerChoice === 1 && player_option === 1){
            computer_option = "rock";                           
            messages = "DRAW";       
            
        }
        else if (computerChoice === 2){
            computer_option = "paper";                       
            computer_win_tally++;
            messages = "YOU LOST";  
        }
        else if(computerChoice === 3){
            computer_option = "scissor"; 
            messages = "YOU WON";            
            player_win_tally++;
        }

        

        break;

        case 'paper':
            player_option = 2;
            if(computerChoice === 2 && player_option === 2){
                computer_option = "paper";
                messages = "DRAW"; 
            }
            else if(computerChoice === 1){
                computer_option = "rock";
                player_win_tally++;
                messages = "YOU WON"; 
            }
            else if(computerChoice === 3){
                computer_option = "scissor";
                computer_win_tally++
                messages = "YOU LOST"; 
            }

            break;

            case 'scissor':
                player_option = 3;
                if(computerChoice === 3 && player_option === 3){
                    computer_option = "scissor";
                    messages = "DRAW"; 
                }
                else if (computerChoice === 1){
                    computer_option = "rock";
                    computer_win_tally++;
                    messages = "YOU LOST"; 
                }
                else if(computerChoice === 2){
                    computer_option = "paper";
                    player_win_tally++;
                    messages = "YOU WON"; 
                }
                break;
    }
}




function game_logic(){    

        while((player_choice !== "rock") && (player_choice !== "paper") && (player_choice !== "scissor") && (player_choice !== "scissors")){
            player_choice = prompt(`Rock, paper, scissor, This a Round Number ${count}, Please enter the appropriate Options`);
            player_choice = player_choice.toLowerCase();
            player_choice = String(player_choice);
                        
        }

        

        switch(player_choice){

            case 'rock': 
                player_option = 1;
                if(computerChoice === 1 && player_option === 1){
                    computer_option = "rock";
                    prompt(`Computer choose ${computer_option}! That was a draw`, "Press Okay to continue");
                    message = "This is a draw";
                    draw_counter++;
                }
                else if (computerChoice === 2){
                    computer_option = "paper";
                    prompt(`Computer choose ${computer_option}! You lost that round, Press Okay to continue`, "Press Okay to continue");
                    message = "You lose";
                    computer_win_tally++;
                }
                else if(computerChoice === 3){
                    computer_option = "scissor";
                    prompt(`Computer choose ${computer_option}! You won that round, Press Okay to continue`, "Press Okay to continue");
                    message = "you win this round";
                    player_win_tally++;
                }

                break;
            
            case 'papper':
            case 'paper':
                player_option = 2;
                if(computerChoice === 2 && player_option === 2){
                    computer_option = "paper";
                    prompt(`Computer choose ${computer_option}! That was a draw, Press Okay to continue`, "Press Okay to continue");
                    message = "This is a draw";
                    draw_counter++;
                }
                else if(computerChoice === 1){
                    computer_option = "rock";
                    prompt(`Computer choose ${computer_option}! You won that round, Press Okay to continue`, "Press Okay to continue");
                    message = "You win this round";
                    player_win_tally++;
                }
                else if(computerChoice === 3){
                    computer_option = "scissor";
                    prompt(`Computer choose ${computer_option}! You lost that Round! press okay continue`, "Press Okay to continue");
                    message = "You lose this round";
                    computer_win_tally++
                }

                break;

            case 'scissors':
            case 'scissor':
                player_option = 3;
                if(computerChoice === 3 && player_option === 3){
                    computer_option = "scissor";
                    prompt(`Computer choose ${computer_option}! That was a draw`, "Press Okay to continue");                    
                    message = "This is a draw";
                    draw_counter++;
                }
                else if (computerChoice === 1){
                    computer_option = "rock";
                    prompt(`Computer choose ${computer_option}! You lost that round, Press Okay to continue`, "Press Okay to continue");
                    message = "You lose this round";
                    computer_win_tally++;
                }
                else if(computerChoice === 2){
                    computer_option = "paper";
                    prompt(`Computer choose ${computer_option}! You won that round, Press Okay to continue`, "Press Okay to continue");
                    message = "You win this round";
                    player_win_tally++;
                }
                break;

            default: {prompt("something seriously went wrong");}
        }
}

function game_play(){

    for(i = 0; i < 5; i++){        
        player_choice = '';
        player_option = 0;
        message = '';
        computer_option = '';
        computerChoice = Math.floor(Math.random() * 3) + 1;
        count ++;

        game_logic();
    }
    count = 0;

    if(player_win_tally > computer_win_tally){
        if(draw_counter > 0){
            prompt(`You won the match with a total of ${player_win_tally} rounds, Computer had ${computer_win_tally} rounds, There was ${draw_counter} draw-matches`,  "Press Okay to Finish");
        }
        else{
            prompt(`You won the match with a total of ${player_win_tally} rounds, Computer had ${computer_win_tally} rounds`,  "Press Okay to Finish");
        }
    }
    else if(player_win_tally < computer_win_tally){
        if(draw_counter > 0){
            prompt(`You lost the match with a total of ${player_win_tally} rounds, Computer won ${computer_win_tally} rounds, There was ${draw_counter} draw-matches`,  "Press Okay to Finish");
        }
        else{
            prompt(`You lost the match with a total of ${player_win_tally} rounds, Computer won ${computer_win_tally} rounds`,  "Press Okay to Finish");
        }
    }
    else {
        prompt(`It was a Tie, You won ${player_win_tally} rounds, Computer won ${computer_win_tally} rounds, There was ${draw_counter} draw-matches`,  "Press Okay to Finish")
    }

    console.log(`Player score : ${player_win_tally}`);
    console.log(`Computer score : ${computer_win_tally}`);
}

//game_play();
