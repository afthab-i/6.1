export default class Game {
  constructor(private playerScore: number, private computerScore: number) {
    this.playerScore = 0;
    this.computerScore = 0;
  }
  getPlayerScore() {
    return this.playerScore;
  }

  getComputerScore() {
    return this.computerScore;
  }

  plWins() {
    this.playerScore += 1;
  }

  cpWins() {
    this.computerScore += 1;
  }

  showScore() {
    console.log(this.playerScore);
    console.log(this.computerScore);
  }
}
