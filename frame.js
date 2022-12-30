const {sum} = require ('lodash');

class Frame {
  constructor() {
    this.rolls = [];
  }

  addRoll(pins) {
    this.rolls.push(pins);
  }

  score(nextRoll = 0, subsequentRoll = 0) {
    if(this.isSpare()){
      return sum(this.rolls) + nextRoll;
    }
    if(this.isStrike()){
      return sum(this.rolls) + nextRoll + subsequentRoll;
    }
   return sum(this.rolls);
  }

  isStrike() {
    return this.rolls[0] === 10;
  }

  isSpare() {
    if(this.isStrike()) return false;
    return this.rolls[0] + this.rolls[1] === 10;
  }

  isComplete() {
    return this.rolls.length === 2 || this.isStrike() ;
  }
}

module.exports = Frame;
