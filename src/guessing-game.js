class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }
  
    guess() {
      this.isGuess = Math.round((this.min + this.max) / 2);
      return this.isGuess;
    }
  
    lower() {
      this.max = this.isGuess;
    }
  
    greater() {
      this.min = this.isGuess;
    }
}

module.exports = GuessingGame;
