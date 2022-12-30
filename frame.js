class Frame {
  constructor() {
    this.rolls = [];
  }

  addRoll(pins) {
    this.rolls.push(pins);
  }

  score() {
    let sum = 0;
    for (let i = 0; i < this.rolls.length; i++) {
      sum += this.rolls[i];
    }
    return sum;
  }

  isStrike() {
    return this.rolls[0] === 10;
  }

  isSpare() {
    if(this.isStrike()) return false;
    return this.rolls[0] + this.rolls[1] === 10;
  }
}

module.exports = Frame;
