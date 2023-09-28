const randomNumber=Math.floor(Math.random()*100)+1
console.log(randomNumber);

const btn=document.getElementById('butt');
const inputNumber=document.getElementById('inputNum')
const guessRsult=document.querySelector('.guess-num')
const chanceNum=document.querySelector('.guess-rem')
const hint=document.querySelector('.hint')
const result=document.querySelector('.result')
const element=document.getElementById('new-game')

const p=document.createElement('p')

let previousGuess=[];
let numGuesses=1;
let playGame=true;


if(playGame){
    butt.addEventListener('click',(e)=>{
        e.preventDefault();
       
    

    const guess=parseInt(inputNumber.value)
    validateGuessNumber(guess)
})
}

function validateGuessNumber(guess){
    if (isNaN(guess)){
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1!');
    } else if (guess > 100){
        alert('Please enter a number less than 500!')
    } else{

        previousGuess.push(guess)

    if(numGuesses === 11){
        displayChances(guess)
       displayMessage(`Game Over ! Number was ${randomNumber}`)
       endGame()
    }
    else{
     displayChances(guess)

     checkGuess(guess)
    }
}
}



function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You Guessed Correctlly ${guess}`)
    }
    // else if(((guess/2)<randomNumber) && ((randomNumber-15) < (guess/2)))
    //        {
    //         displayMessage(`You Guessed Incorrectlly And You are So far away...`)
    //        }
    // else if(((guess/2)<randomNumber) && ((randomNumber-15) >= (guess/2)))
    //        {
    //         displayMessage(`You Guessed Incorrectlly And You are So near away...`)
    //        }
    // else if(((guess*2)<randomNumber) && ((randomNumber/2) < (guess*2)))
    //        {
    //         displayMessage(`You Guessed Incorrectlly And You are So far away...`)
    //        }
    // else if(((guess*2)<randomNumber) && ((randomNumber/2) > (guess*2)))
    //        {
    //         displayMessage(`You Guessed Incorrectlly And You are So near way...`)
    //        }
    //        else{
    //         displayMessage(`You Guessed Incorrectlly And You are just near way...`)

    //        }
    else if (guess < randomNumber) {
    displayMessage(`Too low! Try again!`);
} else if (guess > randomNumber) {
    displayMessage(`Too High! Try again!`);
}

}

function displayChances(guess){
    inputNumber.value='';
    guessRsult.innerHTML+=`${guess} `
    numGuesses++;
    chanceNum.innerHTML = `${11 - numGuesses}  `;
}


function displayMessage(message){
    hint.innerHTML=`<h1>${message}</h1>`
}


function endGame(){
    
    userInput.value = '';
    userInput.value = '';
    //Disable user input button
    userInput.setAttribute('disabled', '');
    //Display Start new Game Button
    p.classList.add('button');
          p.innerHTML = `<h1 id="newGame">Start New Game</h1>`
    playGame = false;
    newGame();

}

function newGame(){
    
    newgamebtn.addEventListener('click', function(){
      
        randomNumber = parseInt((Math.random()*100)+1);
        previousGuess = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        lowOrHi.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses}  `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}




















// //Generate a random number between 1 and 500
// let randomNumber = parseInt((Math.random()*100)+1);
// const submit = document.querySelector('#butt');
// const userInput = document.querySelector('#inputNum');
// const guessSlot = document.querySelector('.guess-num');
// const remaining = document.querySelector('.guess-rem');
// const startOver = document.querySelector('.result');
// const lowOrHi = document.querySelector('.hint');
// const p = document.createElement('p');
// let previousGuesses = [];
// let numGuesses = 1;
// let playGame = true;

// if (playGame){
//     butt.addEventListener('click', function(e){
//         e.preventDefault();
//         //Grab guess from user
//         const guess = parseInt(userInput.value);
//         validateGuess(guess);
//     });
// }

// function validateGuess(guess){
//     if (isNaN(guess)){
//         alert('Please enter a valid number');
//     } else if (guess < 1) {
//         alert('Please enter a number greater than 1!');
//     } else if (guess > 100){
//         alert('Please enter a number less than 500!')
//     } else {
//         //Keep record of number of attempted guesses
//         previousGuesses.push(guess);
//         //Check to see if game is over
//         if (numGuesses === 11){
//             displayGuesses(guess);
//             displayMessage(`Game Over! Number was ${randomNumber}`);
//             endGame();
//         } else {
//         //Display previous guessed numbers
//         displayGuesses(guess);
//         //Check guess and display if wrong
//         checkGuess(guess);
//         }
//     }
// }

// function checkGuess(guess){
//     //Display clue if guess is too high or too low
//     if (guess === randomNumber){
//         displayMessage(`You guessed correctly!`);
//         endGame();
//     } else if (guess < randomNumber) {
//         displayMessage(`Too low! Try again!`);
//     } else if (guess > randomNumber) {
//         displayMessage(`Too High! Try again!`);
//     }
// }

// function displayGuesses(guess){
//     userInput.value = '';
//     guessSlot.innerHTML += `${guess}  `;
//     numGuesses++
//     remaining.innerHTML = `${11 - numGuesses}  `;
// }

// function displayMessage(message){
//         lowOrHi.innerHTML = `<h1>${message}</h1>`
// }

// function endGame(){
//     //Clear user input
//     userInput.value = '';
//     //Disable user input button
//     userInput.setAttribute('disabled', '');
//     //Display Start new Game Button
//           p.classList.add('button');
//           p.innerHTML = `<h1 id="newGame">Start New Game</h1>`
//     startOver.appendChild(p);
//     playGame = false;
//     newGame();
// }

// function newGame(){
//     const newGameButton = document.querySelector('#newGame');
//     newGameButton.addEventListener('click', function(){
//         //Pick a new random number
//         randomNumber = parseInt((Math.random()*100)+1);
//         previousGuesses = [];
//         numGuesses = 1;
//         guessSlot.innerHTML = '';
//         lowOrHi.innerHTML = '';
//         remaining.innerHTML = `${11 - numGuesses}  `;
//         userInput.removeAttribute('disabled');
//         startOver.removeChild(p);
//         playGame = true;
//     })
// }
// //Allow to restart game with restart button
// //Change DIV to a form so it can accept the enter key

// //NOTES:
// //NaN != NaN



