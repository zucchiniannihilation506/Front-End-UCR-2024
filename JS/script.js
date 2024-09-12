const  ['camion', 'laptop', 'futbol', 'sillon', 'camisa', 'goloso'];

let selectedWord = '';
let hiddenWordArray = [];
let remainAttemps = 5;
let guessedLetters = [];
let wrongGuesses = 0;

const hangmanImage = document.getElementById('hangman-image');
const hiddenWordElement = document.getElementById('hidden-word');
const letterInput = document.getElementById('letter-input');
const guessButton = document.getElementById('guess-button');
const remainingAttempsElement = document.getElementById('remaining-attemps');
const messageElement = document.getElementById('message');
const restartButton = document.getElementById('restart-button');

function startGame(){
    selectedWord = words[Math.floor(Math.random()*words.length)];
    console.log('Palabra seleccionada: ', selectedWord);

//inicializando la palabra oculta con guiones    
    hiddenWordArray = Array(selectedWord.length).fill('_');
    hiddenWordElement.textContent = hiddenWordArray.join(' ');
    remainAttemps = 5;
    wrongGuesses = 0;
    guessedLetters = [];
    hangmanImage.src = '/Juego_ahorcado/media/0A.jpeg';
    remainingAttempsElement.textContent = `Errores restantes: ${remainAttemps}`;
    messageElement.textContent = '';
    letterInput.value = '';
    letterInput.focus();
    restartButton.style.display = 'none';
}

//Ahora se hace un fancion para manejar el intento de adivinar una letra

function guessletter(){
    const guessedletter = letterInput.value.toLowerCase();

    if(!guessedletter || guessedletter.length !==1 || guessedletter.includes(guessedletter)){

        messageElement.textContent = 'Por favor ingresar una letra valida'
        letterInput.value = '';
        return;
    }

    guessedLetters.push(guessedletter);
    letterInput.value = '';
    
    
    //Verificar si la letra esta en la palabra
    
    if (selectedWord.includes(guessedletter)){

    for(let i = 0; i< selectedWord.length; i++){
        if(selectedWord[i] === guessedletter){
            hiddenWordArray[i] = guessedletter;
        }
    }

    hiddenWordElement.textContent = hiddenWordArray.join(' ');

    
}
}