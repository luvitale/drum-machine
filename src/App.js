import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render = () => {
    return (
      <div className="App">
        <div id="drum-machine"></div>
      </div>
    );
  };
}

export default App;
