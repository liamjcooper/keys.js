function forSemitoneFromRoot(semitonesFromRoot) {
  return 440 * Math.pow(2, semitonesFromRoot / 12);
}

function forMidiNote(midiNote) {
  return 440 * Math.pow(2, (midiNote - 69) / 12);
}

module.exports = { forSemitoneFromRoot, forMidiNote };
