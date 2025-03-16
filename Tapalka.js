let totalCoins = 0; 
let coinsPerClick = 20; 
let passiveIncome = 5; // Пассивный доход
let coinsPerClickUpgradeCost = 100; // Cost for upgrading coins per click
let passiveIncomeUpgradeCost = 200; // Cost for upgrading passive income

function upgradeCoinsPerClick() {
    if (totalCoins >= coinsPerClickUpgradeCost) {
        totalCoins -= coinsPerClickUpgradeCost;
        coinsPerClick += 10; // Increase coins per click
        coinsPerClickUpgradeCost *= 2; // Double the cost for next upgrade
        alert(`Coins per click upgraded to ${coinsPerClick}!`);
    } else {
        alert("Not enough coins to upgrade coins per click.");
    }
}

function upgradePassiveIncome() {
    if (totalCoins >= passiveIncomeUpgradeCost) {
        totalCoins -= passiveIncomeUpgradeCost;
        passiveIncome += 5; // Increase passive income
        passiveIncomeUpgradeCost *= 2; // Double the cost for next upgrade
        alert(`Passive income upgraded to ${passiveIncome}!`);
    } else {
        alert("Not enough coins to upgrade passive income.");
    }
}


const clickButton = document.querySelector('.game-button');
const totalCoinsDisplay = document.querySelector('.stats-container div:first-child'); // Для отображения в игровом блоке
const userCoinsDisplay = document.querySelector('.user-info span:last-child'); // Для отображения в верхнем правом углу

clickButton.addEventListener('click', () => {
    totalCoins += coinsPerClick; 
    totalCoinsDisplay.innerHTML = `💰 ${totalCoins}<br>Total ClickCoins`; // Обновляем отображение в игровом блоке
    userCoinsDisplay.innerHTML = `💰 ${totalCoins}`; // Обновляем отображение в верхнем правом углу
});

setInterval(() => {
    totalCoins += passiveIncome;
    totalCoinsDisplay.innerHTML = `💰 ${totalCoins}<br>Total ClickCoins`; // Обновляем отображение в игровом блоке
    userCoinsDisplay.innerHTML = `💰 ${totalCoins}`; // Обновляем отображение в верхнем правом углу
}, 1000); // Каждые 1000 миллисекунд (1 секунда)

document.querySelector('#upgrade-coins-per-click').addEventListener('click', upgradeCoinsPerClick);
document.querySelector('#upgrade-passive-income').addEventListener('click', upgradePassiveIncome);

setInterval(() => {
    totalCoins += passiveIncome;
    totalCoinsDisplay.innerHTML = `💰 ${totalCoins}<br>Total ClickCoins`; // Обновляем отображение в игровом блоке
    userCoinsDisplay.innerHTML = `💰 ${totalCoins}`; // Обновляем отображение в верхнем правом углу
}, 1000); // Каждые 1000 миллисекунд (1 секунда)
