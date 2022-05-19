# keys.js 🎹
A helper library written in Javascript to help with the development of music-oriented web applications. It is very basic at the moment due to it only being used for a personal project that simply needs these common functions so far, but it can:
- [x] Calculate a frequency based on the number of semitones away from A4 (assumed 440Hz tune)
- [x] Calculate a frequency based on a MIDI note number (not piano note)

I hope in the future I can get it to:
- [ ] Take into account different tuning frequencies for its base calculation
- [ ] Calculate a frequency based on a musical note and octave i.e. F#4, D2
- [ ] Allow detuning by cents to alter frequency calculation bias
- [ ] Convert a musical note to semitone difference from root
- [ ] Convert a MIDI note to a musical note
- [ ] And any other conversions in between
- [ ] Be available as an ES Module

# Install & usage
Install with either
````bash
npm i @liamjcooper/keys.js
````
or...
```bash
yarn add @liamjcooper/keys.js
```

And then to use, you can either
```js
const { frequency } = require("@liamjcooper/keys.js");
```
or...
```js
const frequency = require("@liamjcooper/keys.js/frequency");
```

# Documentation
Currently, you only have the choice of converting a semitone difference or MIDI note to a frequency as a float.

To do either conversion:
```js
frequency.forSemitoneFromRoot(3) // 523.251... (3 notes up from A4)
frequency.forMidiNote(66) // 369.994... (3 notes down from A4)
```

# Notes
All PRs welcome! Don't be afraid to say hi if this has helped you in any way, all feedback is also welcome 🙂
