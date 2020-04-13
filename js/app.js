"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("./player");
var game_1 = require("./game");
var Helpers = require("./utility");
var newGame;
(_a = document.getElementById('startGame')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var player = new player_1.Player();
    player.name = Helpers.getValue('playername');
    var problemCount = Number(Helpers.getValue('problemCount'));
    var factor = Number(Helpers.getValue('factor'));
    newGame = new game_1.Game(player, problemCount, factor);
    newGame.displayGame();
});
document.getElementById('calculate').addEventListener('click', function () {
    newGame.calculateScore();
});
//# sourceMappingURL=app.js.map