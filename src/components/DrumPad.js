import React from 'react';

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const {letter, audio} = this.props;
    const id = `drum-pad-${letter.toLowerCase()}`;

    return (
      <div className="DrumPad drum-pad" id={id}>
        {letter}

        <audio src={audio} className="clip" id={letter}></audio>
      </div>
    )
  }
}

export default DrumPad;