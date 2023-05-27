import Game from "./game.js";

const myGame = new Game(0, 0);
let plOption: Option;
let cmOption: Option;
const initApp = () => {
  stopReload();
  playerOption();
  swapButtons();
  clearResult();
  playAgain();
};
type Option = "ROCK🪨" | "PAPER📃" | "SCISSORS✂️" | "";

document.addEventListener("DOMContentLoaded", initApp);

const stopReload = () => {
  const lock = document.getElementById("lock__btn") as HTMLButtonElement;
  lock.addEventListener("click", (event) => {
    event.preventDefault();
  });
};

const playerOption = () => {
  const btn = document.getElementById("lock__btn") as HTMLButtonElement;
  const radio: NodeListOf<HTMLInputElement> = document.querySelectorAll(
    'input[name="player__option"]'
  );
  btn.addEventListener("click", () => {
    radio.forEach((i) => {
      if (i.checked) {
        plOption = i.value as Option;
      } else {
        i.setAttribute("disabled", "true");
      }
    });
    checkPlOption(plOption);
  });
  return plOption;
};

const checkPlOption = (plOption: string) => {
  if (plOption === undefined) {
    alert("Select an option you illiterate mf");
  } else {
    computerOption();
  }
};

const computerOption = () => {
  const options = ["ROCK🪨", "PAPER📃", "SCISSORS✂️"];
  let index = Math.floor(Math.random() * 3);
  cmOption = options[index] as Option;
  const input = document.getElementById("computer__option") as HTMLInputElement;
  input.textContent = cmOption;
  gameResult(plOption, cmOption);
};

const gameResult = (pl: Option, cm: Option) => {
  let result =
    pl === cm
      ? "Tie Match🤝"
      : pl === "ROCK🪨" && cm === "SCISSORS✂️"
      ? "Player Wins"
      : pl === "PAPER📃" && cm === "ROCK🪨"
      ? "Player Wins"
      : pl === "SCISSORS✂️" && cm === "PAPER📃"
      ? "Player Wins"
      : "Computer Wins";
  const form__result = document.getElementById(
    "game__result"
  ) as HTMLParagraphElement;
  form__result.textContent = result;
  result === "Player Wins"
    ? myGame.plWins()
    : result === "Computer Wins"
    ? myGame.cpWins()
    : myGame.showScore();
  ScoreboardUpdate();
};

const swapButtons = () => {
  const lock = document.getElementById("lock__btn") as HTMLButtonElement;
  const reset = document.getElementById("reset__btn") as HTMLButtonElement;
  lock.addEventListener("click", () => {
    lock.setAttribute("hidden", "true");
    reset.removeAttribute("hidden");
  });
  reset.addEventListener("click", () => {
    reset.setAttribute("hidden", "true");
    lock.removeAttribute("hidden");
  });
};

const ScoreboardUpdate = () => {
  const setPlayerScore = document.getElementById(
    "player__score"
  ) as HTMLDivElement;
  const setComputerScore = document.getElementById(
    "computer__score"
  ) as HTMLDivElement;
  let getComputerScore = myGame.getComputerScore().toString();
  let getPlayerScore = myGame.getPlayerScore().toString();
  setComputerScore.textContent = getComputerScore;
  setPlayerScore.textContent = getPlayerScore;
};

const playAgain = () => {
  const btn = document.getElementById("reset__btn") as HTMLButtonElement;
  const radio: NodeListOf<HTMLInputElement> = document.querySelectorAll(
    'input[name="player__option"]'
  );
  btn.addEventListener("click", () => {
    radio.forEach((i) => {
      i.removeAttribute("disabled");
    });
  });
};

const clearResult = () => {
  const btn = document.getElementById("reset__btn") as HTMLButtonElement;
  const cpOption = document.getElementById(
    "computer__option"
  ) as HTMLParagraphElement;
  const result = document.getElementById(
    "game__result"
  ) as HTMLParagraphElement;
  btn.addEventListener("click", () => {
    plOption = "";
    cpOption.textContent = "...";
    result.textContent = "...";
  });
};
