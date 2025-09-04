const score = JSON.parse(localStorage.getItem('score')) || 
                    {
            wins:0,
            losses:0,
            ties :0
        };

            updateScore ();

            /*
            if (score === null) {
                score = {
                    wins:0,
                    losses:0,
                    ties :0
                };
            }
            */

            function playGame (playerMove) {
                const computerMove =  pickcomputerMove();

                console.log(computerMove);
                
                let result = '';

                if (playerMove === 'scissors'){
                
                    if (computerMove === 'rock') {
                    result = 'You Lose.';
                    }
                    else if (computerMove === 'paper') {
                        result = 'You Win.';
                    }
                    else if (computerMove === 'scissors') {
                        result = 'Tie.';
                    }

                } else if (playerMove === 'paper') {
                    if (computerMove === 'rock') {
                        result = 'You Win.';
                    }
                    else if (computerMove === 'paper') {
                        result = 'Tie.';
                    }
                    else if (computerMove === 'scissors') {
                        result = 'You Lose.';
                    }

                } else if (playerMove === 'rock') {
                    if (computerMove === 'rock') {
                        result = 'Tie.';
                    }
                    else if (computerMove === 'paper') {
                        result = 'You Lose.';
                    }
                    else if (computerMove === 'scissors') {
                        result = 'You Win.';
                    } 

                }

                if (result === 'You Win.') {
                    score.wins += 1;
                }
                else if (result === 'You Lose.') {
                    score.losses += 1;
                }
                else if (result === 'Tie.') {
                    score.ties += 1;
                }

                localStorage.setItem('score', JSON.stringify(score));

                updateScore ();

                document.querySelector('.js-result').innerHTML = result;

                document.querySelector('.js-moves').innerHTML = `You 
            <img src = "${playerMove}-emoji.png" class = "icon">
            <img src = "${computerMove}-emoji.png" class = "icon">
            Computer`;

                

            }

            function updateScore () {
                document.querySelector('.js-score')
        .innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
        /*document.querySelector("body").style.background = "red";
        setTimeout(function(){
            document.querySelector("body").style.background = "black";
        },250);*/
            }

            
            function pickcomputerMove () {
                const randNumber = Math.random();

                if (randNumber >= 0 && randNumber < 1/3) {
                    computerMove = 'rock';
                }
                else if (randNumber >= 1/3 && randNumber < 2/3) {
                    computerMove = 'paper';
                }
                else if (randNumber >= 2/3 && randNumber < 1) {
                    computerMove = 'scissors';
                }
                
                return computerMove;
            }