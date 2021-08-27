import React from 'react';

class Display extends React.Component {
  render() {
    return (
      <div className="display" id="display">
        <h1>{this.props.displayText}</h1>
      </div>
    )
  }
}

export default Display;