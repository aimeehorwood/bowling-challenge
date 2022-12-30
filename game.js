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

  get #currentFrame(){
   return this.frames[this.frames.length - 1];
  }



}


module.exports = Game;
