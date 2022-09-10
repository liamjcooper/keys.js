export function forSemitoneFromRoot(semitonesFromRoot: number) {
  return 440 * Math.pow(2, semitonesFromRoot / 12);
}

export function forMidiNote(midiNote: number) {
  return 440 * Math.pow(2, (midiNote - 69) / 12);
}
