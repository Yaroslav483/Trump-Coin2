let totalCoins = 0; 
let coinsPerClick = 20; 
let passiveIncome = 5; // Пассивный доход

const clickButton = document.querySelector('.game-button');
const totalCoinsDisplay = document.querySelector('.stats-container div:first-child'); // Для отображения в игровом блоке
const userCoinsDisplay = document.querySelector('.user-info span:last-child'); // Для отображения в верхнем правом углу

clickButton.addEventListener('click', () => {
    totalCoins += coinsPerClick; 
    totalCoinsDisplay.innerHTML = `💰 ${totalCoins}<br>Total ClickCoins`; // Обновляем отображение в игровом блоке
    userCoinsDisplay.innerHTML = `💰 ${totalCoins}`; // Обновляем отображение в верхнем правом углу
});

// Функция для пассивного начисления монет
setInterval(() => {
    totalCoins += passiveIncome;
    totalCoinsDisplay.innerHTML = `💰 ${totalCoins}<br>Total ClickCoins`; // Обновляем отображение в игровом блоке
    userCoinsDisplay.innerHTML = `💰 ${totalCoins}`; // Обновляем отображение в верхнем правом углу
}, 1000); // Каждые 1000 миллисекунд (1 секунда)
