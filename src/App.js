import './App.css';
import DrumPad from './components/DrumPad.js';
import Display from './components/Display.js';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: 'Click a drum pad to play sound'
    }
    this.changeDisplayText = this.changeDisplayText.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this)
  };

  render = () => {
    const drumPadsInfo = [
      {letter: 'Q', audio: "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Guitars/17[kb]electric_guitarpluck.wav.mp3"},
      {letter: 'W', audio: "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Guitars/23[kb]mellow-guitar-chord-3.wav.mp3"},
      {letter: 'E', audio: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20SH09/247[kb]longlow.wav.mp3"},
      {letter: 'A', audio: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Kawai%20R50/102[kb]CRASH.wav.mp3"},
      {letter: 'S', audio: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Hammond%20Drum%20Machine/17[kb]ham-bd-02.wav.mp3"},
      {letter: 'D', audio: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Hammond%20Drum%20Machine/34[kb]ham-cym-no-1.wav.mp3"},
      {letter: 'Z', audio: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Hammond%20Drum%20Machine/29[kb]ham-hho01.wav.mp3"},
      {letter: 'X', audio: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Hammond%20Drum%20Machine/14[kb]ham-sd-05.wav.mp3"},
      {letter: 'C', audio: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Korg%20ER-1/166[kb]er1-cymbnoiz.wav.mp3"}
    ];

    const drumPads = drumPadsInfo.map(elem => {
      return (
        <DrumPad
          key={elem.letter}
          letter={elem.letter}
          audio={elem.audio}
          updateDisplay={this.changeDisplayText}
        />
      );
    })

    return (
      <div>
        <div id="drum-machine">
          <Display displayText={this.state.displayText} />

          {drumPads}
        </div>
      </div>
    );
  };

  changeDisplayText(message, duration) {
    this.setState({
      displayText: message
    })

    setTimeout(
      () => this.clearDisplay(),
      duration
    )
  }

  clearDisplay() {
    this.setState({
      displayText: ""
    })
  }
}

export default App;
