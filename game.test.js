const Game = require("./game");

describe("Game", () => {
  describe("addRoll", () => {
    it("can receive a roll", () => {
      const game = new Game();
      game.addRoll(5);
    });

    it("should have multiple frames where necessary", () =>{
        const game = new Game();
        game.addRoll(1);
        game.addRoll(1);
        game.addRoll(1);
        expect(game.frames.length).toEqual(2);

    });

    it("should have multiple frames where necessary,including strikes", () =>{
        const game = new Game();
        game.addRoll(10);
        game.addRoll(1);
        expect(game.frames.length).toEqual(2);

    });


  });
});
