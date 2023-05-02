let player_choice = '';
let player_option = 0;

let computer_win_tally = 0;
let player_win_tally = 0;
let computer_option = '';
let count = 0;
let draw_counter = 0;

let message = '';


let computerChoice = Math.floor(Math.random() * 3) + 1;


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

game_play();
