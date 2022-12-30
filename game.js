const Frame = require("./frame");

class Game {
    constructor() {
        this.frames = [new Frame()];
    }

  addRoll(pins) {
    if(this.#currentFrame.isComplete()) {
      this.frames.push(new Frame());
    }
    this.#currentFrame.addRoll(pins);
  }

  score(){
    let score = 0
    for(let i = 0; i < this.frames.length; i++) {
        const frame = this.frames[i]
        const nextFrame = this.frames[i + 1];    
        score += frame.score(nextFrame?.rolls[0], nextFrame?.rolls[1]);
        }
        return score;
        
    }

  get #currentFrame(){
   return this.frames[this.frames.length - 1];
  }

}


module.exports = Game;
