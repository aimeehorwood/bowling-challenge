const Frame = require("./frame");

class Game {
    constructor() {
        this.frames = [new Frame()];
    }

  addRoll(pins) {
    if(this.#currentFrame.rolls.length == 2 || this.#currentFrame.isStrike()) {
      this.frames.push(new Frame());
    }
    this.#currentFrame.addRoll(pins);
  }

  score (){
    let score = 0
    for(let i = 0; i < this.frames.length; i++) {
        const frame = this.frames[i]
        score += frame.score()
    }
    return score
  }



  get #currentFrame(){
   return this.frames[this.frames.length - 1];
  }

}


module.exports = Game;
