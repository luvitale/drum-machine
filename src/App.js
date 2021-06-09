import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render = () => {
    const letters = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

    const drumPads = letters.map(letter => {
            return (
              <div className="drum-pad" id={`drum-pad-${letter.toLowerCase()}`}>
                {letter}
              </div>
            );
    })

    return (
      <div className="App">
        <div id="drum-machine">
          <div id="display"></div>

          {drumPads}
        </div>
      </div>
    );
  };
}

export default App;
