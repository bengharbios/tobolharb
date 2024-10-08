const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let player1 = {
    x: 50,
    y: 300,
    width: 50,
    height: 50,
    color: 'blue',
    score: 0
};

let player2 = {
    x: 700,
    y: 300,
    width: 50,
    height: 50,
    color: 'red',
    score: 0
};

let gameRunning = false;

function drawPlayers() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // مسح الشاشة
    ctx.fillStyle = player1.color;
    ctx.fillRect(player1.x, player1.y, player1.width, player1.height); // رسم اللاعب 1
    ctx.fillStyle = player2.color;
    ctx.fillRect(player2.x, player2.y, player2.width, player2.height); // رسم اللاعب 2
}

function updateScores() {
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText(`اللاعب الأزرق: ${player1.score}`, 10, 20);
    ctx.fillText(`اللاعب الأحمر: ${player2.score}`, canvas.width - 150, 20);
}

function gameLoop() {
    if (gameRunning) {
        drawPlayers();
        updateScores();
        requestAnimationFrame(gameLoop); // تكرار حلقة اللعبة
    }
}

document.getElementById('startButton').addEventListener('click', function() {
    gameRunning = true;
    player1.score = 0;
    player2.score = 0;
    gameLoop(); // بدء اللعبة
});
