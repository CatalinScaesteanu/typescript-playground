"use strict";
var Player = (function () {
    function Player() {
    }
    Player.prototype.formatName = function () {
        return this.name.toUpperCase();
    };
    return Player;
}());
var defaultPlayer = 'MultiMath Player';
var startGame = function () {
    var playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(100, playerName);
    postScore(-5, playerName);
};
var logPlayer = function (name) {
    if (name === void 0) { name = defaultPlayer; }
    return console.log("New game starting for player: " + name);
};
var getInputValue = function (elementId) {
    var inputElement = document.getElementById(elementId);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
};
var postScore = function (score, playerName) {
    if (playerName === void 0) { playerName = defaultPlayer; }
    var logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    var scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = score + " - " + playerName;
    logger("Score " + score);
};
document.getElementById('startGame').addEventListener('click', startGame);
var logMessage = function (message) { return console.log(message); };
logMessage('Welcome to MultiMath');
function logError(err) {
    console.error(err);
}
var firstPlayer = new Player();
firstPlayer.name = 'Lanier';
console.log(firstPlayer.formatName());
//# sourceMappingURL=app.js.map