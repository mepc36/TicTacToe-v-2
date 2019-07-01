import React from 'react';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>

      <button onClick={(e) => this.props.startNewGame(e)}>Start new game!</button>
      </div>
    )
  }
}

export default Board;

{/* <table border="1" width="500px" height="500px">
<tbody>
  <tr> 
    <td onClick={(e) => {this.props.flipPiece(e, 0)}}></td>
    <td onClick={(e) => {this.props.flipPiece(e, 1)}}></td>
    <td onClick={(e) => {this.props.flipPiece(e, 2)}}></td>
  </tr>
  <tr> 
    <td onClick={(e) => {this.props.flipPiece(e, 3)}}></td>
    <td onClick={(e) => {this.props.flipPiece(e, 4)}}></td>
    <td onClick={(e) => {this.props.flipPiece(e, 5)}}></td>
  </tr>
  <tr> 
    <td onClick={(e) => {this.props.flipPiece(e, 6)}}></td>
    <td onClick={(e) => {this.props.flipPiece(e, 7)}}></td>
    <td onClick={(e) => {this.props.flipPiece(e, 8)}}></td>
  </tr>
</tbody>
</table> */}
