import React from 'react';

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
    window.focus()
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

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
    
    const DURATION = 1600
    this.props.updateDisplay(this.props.letter, DURATION)
  }

  handleKeyDown(event) {
    console.log(event)
    if (event.key.toUpperCase() === this.props.letter) {
      this.playSound()
    }
  }
}

export default DrumPad;