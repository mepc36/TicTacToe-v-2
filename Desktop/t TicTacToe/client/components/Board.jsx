import React from 'react';
import Square from './Square'

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Square position="0" board={this.props.board} flipPiece={this.props.flipPiece}></Square>
        <Square position="1" board={this.props.board} flipPiece={this.props.flipPiece}></Square>
        <Square position="2" board={this.props.board} flipPiece={this.props.flipPiece}></Square>
        <br />
        <Square position="3" board={this.props.board} flipPiece={this.props.flipPiece}></Square>
        <Square position="4" board={this.props.board} flipPiece={this.props.flipPiece}></Square>
        <Square position="5" board={this.props.board} flipPiece={this.props.flipPiece}></Square>
        <br />
        <Square position="6" board={this.props.board} flipPiece={this.props.flipPiece}></Square>
        <Square position="7" board={this.props.board} flipPiece={this.props.flipPiece}></Square>
        <Square position="8" board={this.props.board} flipPiece={this.props.flipPiece}></Square>
        <br />
      </div>
    )
  }
}

export default Board;

// return (
//   <div>
//   <table border="1" width="500px" height="500px">
//     <tbody>
//       <tr> 
//         <td onClick={(e) => {this.props.flipPiece(e, 0)}}></td>
//         <td onClick={(e) => {this.props.flipPiece(e, 1)}}></td>
//         <td onClick={(e) => {this.props.flipPiece(e, 2)}}></td>
//       </tr>
//       <tr> 
//         <td onClick={(e) => {this.props.flipPiece(e, 3)}}></td>
//         <td onClick={(e) => {this.props.flipPiece(e, 4)}}></td>
//         <td onClick={(e) => {this.props.flipPiece(e, 5)}}></td>
//       </tr>
//       <tr> 
//         <td onClick={(e) => {this.props.flipPiece(e, 6)}}></td>
//         <td onClick={(e) => {this.props.flipPiece(e, 7)}}></td>
//         <td onClick={(e) => {this.props.flipPiece(e, 8)}}></td>
//       </tr>
//     </tbody>
//   </table>
//   <button onClick={(e) => this.props.startNewGame(e)}>Start new game!</button>
//   </div>
// )