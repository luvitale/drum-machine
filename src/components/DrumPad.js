import React from 'react';

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
  };

  render() {
    const {letter, audio} = this.props;
    const id = `drum-pad-${letter.toLowerCase()}`;

    return (
      <button className="DrumPad drum-pad" id={id}
        onClick={this.playSound}>
        {letter}
        <audio
          ref={
            ref => this.audioPlayer = ref
          }
          id={letter}
          className="clip"
          src={audio}>
        </audio>
      </button>
    )
  }

  playSound() {
    this.audioPlayer.currentTime = 0
    this.audioPlayer.play()
    
    const DURATION = 1000
    this.props.updateDisplay(this.props.letter, DURATION)
  }
}

export default DrumPad;