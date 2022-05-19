const assert = require("assert");
const frequency = require("../src/frequency");

describe("music", function () {
  describe("#frequencyForSemitoneFromRoot()", function () {
    it("returns correct frequency for root note", function () {
      assert.equal(frequency.forSemitoneFromRoot(0), 440);
    });

    it("returns correct frequency for note 3 semitones up from root", function () {
      assert.equal(frequency.forSemitoneFromRoot(3).toFixed(3), 523.251);
    });

    it("returns correct frequency for note 3 semitones down from root", function () {
      assert.equal(frequency.forSemitoneFromRoot(-3).toFixed(3), 369.994);
    });
  });

  describe("#frequencyForMidiNote()", function () {
    it("returns correct frequency for root note", function () {
      assert.equal(frequency.forMidiNote(69), 440);
    });

    it("returns correct frequency for midi note 3 semitones up from root", function () {
      assert.equal(frequency.forMidiNote(72).toFixed(3), 523.251);
    });

    it("returns correct frequency for midi note 3 semitones down from root", function () {
      assert.equal(frequency.forMidiNote(66).toFixed(3), 369.994);
    });
  });
});
