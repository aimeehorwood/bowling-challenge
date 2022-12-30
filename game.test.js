const Game = require("./game");

describe("Game", () => {
  describe("addRoll", () => {
    it("can receive a roll", () => {
      const game = new Game();
      game.addRoll(5);
    });

    it("should have multiple frames where necessary", () => {
      const game = new Game();
      game.addRoll(1);
      game.addRoll(1);
      game.addRoll(1);
      expect(game.frames.length).toEqual(2);
    });

    it("should have multiple frames where necessary,including strikes", () => {
      const game = new Game();
      game.addRoll(10);
      game.addRoll(1);
      expect(game.frames.length).toEqual(2);
    });
  });

  describe("score", () => {
    it("can score a game with a single roll", () => {
      const game = new Game();
      game.addRoll(4);
      expect(game.score()).toEqual(4);
    });
    it("can score a game with two rolls", () => {
      const game = new Game();
      game.addRoll(4);
      game.addRoll(4);
      expect(game.score()).toEqual(8);
    });

    it("can score a game with three rolls", () => {
      const game = new Game();
      game.addRoll(4);
      game.addRoll(4);
      game.addRoll(4);
      expect(game.score()).toEqual(12);
    });

    it("can score a game with a spare", () => {
      const game = new Game();
      game.addRoll(4);
      game.addRoll(6);
      game.addRoll(4);
      expect(game.score()).toEqual(18);
    });

    it("can score a game with a strike", () => {
      const game = new Game();
      game.addRoll(10);
      game.addRoll(3);
      game.addRoll(3);
      expect(game.score()).toEqual(22);
    });
  });

  it("can score a gutter game", () => {
    const game = new Game();
    for (let i = 0; i < 20; i++) {
      game.addRoll(0);
    }
    expect(game.score()).toEqual(0);
  });
  it("can score a game with all 1's", () => {
    const game = new Game();
    for (let i = 0; i < 20; i++) {
      game.addRoll(1);
    }
    expect(game.score()).toEqual(20);
  });
});
