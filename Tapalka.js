let totalCoins = 0; 
let coinsPerClick = 20; 
let passiveIncome = 5; // Пассивный доход

const clickButton = document.querySelector('.game-button');
const totalCoinsDisplay = document.querySelector('.stats-container div:first-child'); 
const userCoinsDisplay = document.querySelector('.user-info span:last-child');

clickButton.addEventListener('click', () => {
    totalCoins += coinsPerClick; 
    totalCoinsDisplay.innerHTML = `💰 ${totalCoins}<br>Total ClickCoins`; //  отображение в игровом блоке
    userCoinsDisplay.innerHTML = `💰 ${totalCoins}`; // отображение в верхнем правом углу
});

//  пассивное начисления монет
setInterval(() => {
    totalCoins += passiveIncome;
    totalCoinsDisplay.innerHTML = `💰 ${totalCoins}<br>Total ClickCoins`; //  отображение в игровом блоке
    userCoinsDisplay.innerHTML = `💰 ${totalCoins}`; //  отображение в верхнем правом углу
}, 1000); 
