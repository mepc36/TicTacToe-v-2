import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    if (this.props.board[this.props.position] === 1) {
      return (
        <span onClick={(e) => this.props.flipPiece(e, this.props.position)} width="200px" height="200px" border="1"> X </span>
      )
    } else if (this.props.board[this.props.position] === 2) {
      return (
        <span onClick={(e) => this.props.flipPiece(e, this.props.position)} width="200px" height="200px" border="1"> O </span>
      )
    } else {
      return (
        <span onClick={(e) => this.props.flipPiece(e, this.props.position)} width="200px" height="200px" border="1"> L </span>
      )
    }
  }
}

export default Square;
