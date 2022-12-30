const Frame = require("./frame");

describe("Frame", () => {
  describe("addRoll", () => {
    it("can receive a roll", () => {
      const frame = new Frame();
      frame.addRoll(5);
    });

    it("can receive two rolls", () => {
      const frame = new Frame();
      frame.addRoll(5);
      frame.addRoll(4);
      expect(frame.rolls.length).toEqual(2);
    });
  });

  describe("score", () => {
    it("can return the score from a frame with two rolls", () => {
      const frame = new Frame();
      frame.addRoll(5);
      frame.addRoll(4);
      expect(frame.score()).toEqual(9);
    });
  });

  describe("isStrike", () => {
    it("returns false if no strike", () => {
      const frame = new Frame();
      frame.addRoll(5);
      frame.addRoll(4);
      expect(frame.isStrike()).toEqual(false);
    });

    it("returns true if  strike", () => {
      const frame = new Frame();
      frame.addRoll(10);
      expect(frame.isStrike()).toEqual(true);
    });
  });
  describe("isSpare", () => {
    it("returns false if no spare", () => {
      const frame = new Frame();
      frame.addRoll(5);
      frame.addRoll(4);
      expect(frame.isSpare()).toEqual(false);
    });
    
    it("returns true if spare", () => {
      const frame = new Frame();
      frame.addRoll(5);
      frame.addRoll(5);
      expect(frame.isSpare()).toEqual(true);
    });

    it("returns false when a strike has been scored", () => {
            const frame = new Frame();
            frame.addRoll(10);
            expect(frame.isSpare()).toEqual(false);
          

        });
    })
});
