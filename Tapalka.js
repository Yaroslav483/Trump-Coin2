let totalCoins = 19247; 
let coinsPerClick = 20; 

const clickButton = document.querySelector('.click-button');
const totalCoinsDisplay = document.querySelector('#total-coins');

clickButton.addEventListener('click', () => {
    totalCoins += coinsPerClick; 
    totalCoinsDisplay.innerHTML = totalCoins; 
});
