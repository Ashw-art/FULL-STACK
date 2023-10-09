const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('guessButton').addEventListener('click', () => {
    const userGuess = parseInt(document.getElementById('userGuess').value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        setMessage('Please enter a valid number between 1 and 100.');
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        setMessage(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
        document.getElementById('guessButton').setAttribute('disabled', 'true');
        document.getElementById('userGuess').setAttribute('disabled', 'true');
    } else if (userGuess < randomNumber) {
        setMessage('Try a higher number.');
    } else {
        setMessage('Try a lower number.');
    }
});

function setMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.color = "#333";
}
