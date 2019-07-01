import React from 'react';

class GameInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <ul>
        <li>Player's Turn: {this.props.playersTurn}</li>
      </ul>
    )
  }
}

export default GameInfo;