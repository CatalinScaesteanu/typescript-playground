/// <reference path="player.ts" />

const defaultPlayer: string = 'MultiMath Player';

const startGame = () => {
  // start game

  let playerName: string | undefined = getInputValue('playername');
  logPlayer(playerName);

  postScore(100, playerName);
  postScore(-5, playerName);
  // let msgEl = document.getElementById('messages');
  // msgEl!.innerText = 'Welcome 2';
}

const logPlayer = (name: string = defaultPlayer) => console.log(`New game starting for player: ${name}`);

const getInputValue = (elementId: string): string | undefined => {
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);

  if (inputElement.value === '') {
    return undefined;
  } else {
    return inputElement.value;
  }
}

const postScore = (score: number, playerName: string = defaultPlayer): void => {
  let logger: (value: string) => void;

  if (score < 0) {
    logger = logError;
  } else {
    logger = logMessage;
  }

  const scoreElement: HTMLElement | null = document.getElementById('postedScores');
  scoreElement!.innerText = `${score} - ${playerName}`;

  logger(`Score ${score}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message: string): void => console.log(message);
logMessage('Welcome to MultiMath');

function logError(err: string): void {
  console.error(err);
}

// let myResult: Result = {
//   playerName: 'Marie',
//   score: 5,
//   problemCount: 5,
//   factor: 7
// };

// let player: Person = {
//   name: 'Daniel',
//   formatName: () => 'Dan'
// }

const firstPlayer: Player = new Player();
firstPlayer.name = 'Lanier';
console.log(firstPlayer.formatName());