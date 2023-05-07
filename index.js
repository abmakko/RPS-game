
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

const hand_boxL = document.getElementsByClassName("player-hand-left");
const hand_boxR = document.getElementsByClassName("player-hand-right");

const alert_box = document.getElementById("prompter");
const final_score = document.getElementsByClassName("score-board");

const final_playerScore = document.getElementById("player-score");

rock_rightSide.addEventListener('animationend', gameState_1);

const reset_Button = document.getElementById("start");
const resetBtnContainter = document.getElementById("new-game")

reset_Button.addEventListener('click', reset_Game);

let computerChoice = Math.floor(Math.random() * 3) + 1;

function reset_Game(){
    Array.from(button_group).forEach(element => element.disabled = false); 
    resetBtnContainter.style.display = "none";
    player_win_tally = 0;
    computer_win_tally = 0;
    messages = "VS"
    alert_box.textContent = messages;
    final_playerScore.style.color = "#40f000";
    clear_box();
    Array.from(tags).forEach(element => element.style.display = 'flex'); 
    Array.from(hand_boxL).forEach(element => element.id = ""); 
    Array.from(hand_boxR).forEach(element => element.id = "");
    
    playerScore.textContent = player_win_tally;
    computerScore.textContent = computer_win_tally;
    prompt_msg.textContent = messages;
}

function gameState_1(){
    playerScore.textContent = player_win_tally;
    computerScore.textContent = computer_win_tally;
    prompt_msg.textContent = messages;
        
    Array.from(button_group).forEach(element => element.disabled = false);  
    Array.from(counter).forEach(element => element.classList.remove("number")); 

    rock_leftSide.classList.remove("animate_2");
    rock_rightSide.classList.remove("animate_1");
    count_container.style.display = "none";


    switch(player_option){
        case 1:
            rock_leftSide.style.transform = "rotateY(0deg)";
            scissor_leftSide.style.transform = "rotateY(90deg)";
            paper_leftSide.style.transform = "rotateY(90deg)";            
            break;
        case 2:
            paper_leftSide.style.transform = "rotateY(0deg)"; 
            rock_leftSide.style.transform = "rotateY(90deg)";
            scissor_leftSide.style.transform = "rotateY(90deg)";                      
            break;
        case 3:
            scissor_leftSide.style.transform = "rotateY(0deg)";  
            paper_leftSide.style.transform = "rotateY(90deg)"; 
            rock_leftSide.style.transform = "rotateY(90deg)";                     
            break;
    }

    switch(computerChoice){
        case 1:
            rock_rightSide.style.transform = "rotateY(0deg)";
            scissor_rightSide.style.transform = "rotateY(90deg)";
            paper_rightSide.style.transform = "rotateY(90deg)";
            
            break;
        case 2:
            paper_rightSide.style.transform = "rotateY(0deg)"; 
            rock_rightSide.style.transform = "rotateY(90deg)";
            scissor_rightSide.style.transform = "rotateY(90deg)";
                      
            break;
        case 3:
            scissor_rightSide.style.transform = "rotateY(0deg)";
            paper_rightSide.style.transform = "rotateY(90deg)"; 
            rock_rightSide.style.transform = "rotateY(90deg)";
                       
            break;
    }   

    if(computer_win_tally > player_win_tally){        
        Array.from(hand_boxL).forEach(element => element.id = "lose-box");
        Array.from(hand_boxR).forEach(element => element.id = "");
    }
    else if(player_win_tally > computer_win_tally){
        Array.from(hand_boxR).forEach(element => element.id = "lose-box");
        Array.from(hand_boxL).forEach(element => element.id = "");        
    }
    else{
        Array.from(hand_boxL).forEach(element => element.id = ""); 
        Array.from(hand_boxR).forEach(element => element.id = "");
    }

    if(player_win_tally === 5){
        alert_box.innerHTML = "<h1>CONGRATS</h1>"
        Array.from(final_score).forEach(element => element.id = "");
        Array.from(button_group).forEach(element => element.disabled = true);
        resetBtnContainter.style.display = "flex";
    }
    else if(computer_win_tally === 5){
        Array.from(button_group).forEach(element => element.disabled = true);
        alert_box.innerHTML = "<h1>YOU LOSE</h1>"
        Array.from(final_score).forEach(element => element.id = "lose-box");
        final_playerScore.style.color = "red";
        resetBtnContainter.style.display = "flex";
    }
}

function clear_box(){
    scissor_rightSide.style.transform = "rotateY(90deg)";
    paper_rightSide.style.transform = "rotateY(90deg)"; 
    rock_rightSide.style.transform = "rotateY(90deg)";

    scissor_leftSide.style.transform = "rotateY(90deg)";  
    paper_leftSide.style.transform = "rotateY(90deg)"; 
    rock_leftSide.style.transform = "rotateY(90deg)";   
}

function anim_1(){ 
    count_container.style.display = "flex";
    Array.from(counter).forEach(element => element.classList.add("number"));
    clear_box();
    rock_leftSide.classList.add("animate_2");
    rock_rightSide.classList.add("animate_1");
}

function init_animation(e){
    prompt_msg.innerHTML = '';
    final_playerScore.style.color = "#40f000";
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


