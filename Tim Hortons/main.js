// Event Listeners
document.getElementById('simulation').addEventListener('click', prize);

// Variables
let result = document.getElementById('result');
let personInput = document.getElementById('input');

// Functions
function prize() {
    console.log('hi');
    let x = Math.random();
    if (personInput.innerHTML == 'British Columbia') {
        if (x < 0.7) {
            result.innerHTML = 'Please play again.';
        } else if (x < 0.8) {
            result.innerHTML = 'Free Coffee';
        } else if (x < 0.9) {
            result.innerHTML = 'Free Donut';
        } else {
            result.innerHTML = 'Grand Prize';
        }
    } else if (personInput.innerHTML == 'Alberta') {
        if (x < 0.15) {
            result.innerHTML = 'Please play again.';
        } else if (x < 0.55) {
            result.innerHTML = 'Free Coffee';
        } else if (x < 0.95) {
            result.innerHTML = 'Free Donut';
        } else {
            result.innerHTML = 'Grand Prize';
        }
    } else if (personInput.innerHTML == 'Saskatchewan') {
        if (x < 0.70) {
            result.innerHTML = 'Please play again.';
        } else if (x < 0.71) {
            result.innerHTML = 'Free Coffee';
        } else if (x < 0.72) {
            result.innerHTML = 'Free Donut';
        } else {
            result.innerHTML = 'Grand Prize';
        }
    }
}