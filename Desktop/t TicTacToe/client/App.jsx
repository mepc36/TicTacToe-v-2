import React from 'react';
import Board from './components/Board';
import GameInfo from './components/GameInfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playersTurn: 1,
      board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      gameOver: false,
    }
  }

  flipPiece(e, boxNumber) {
    var newPlayersTurn;
    var newBoard = this.state.board;
    e.preventDefault();

    if (this.state.gameOver) {
      console.log('Start a new game!');
      return;
    }

    if (this.state.playersTurn === 1) {
      newPlayersTurn = 2;
    } else {
      newPlayersTurn = 1;
    }

    if (this.state.playersTurn === 1 && newBoard[boxNumber] === 0) {
      newBoard[boxNumber] = 1;
    } else if (this.state.playersTurn === 2 && newBoard[boxNumber] === 0) {
      newBoard[boxNumber] = 2;
    } else {
      console.log('Oops, try going somewhere else!')
    }

    this.setState({
      playersTurn: newPlayersTurn,
      board: newBoard,
    })
  }

  startNewGame(e) {
    e.preventDefault();
    console.log('Starting new game!');
    this.setState({
      playersTurn: 1,
      board: newBoard,
      gameOver: false,
    })
  }

  render() {
    return (
      <div>
        <GameInfo playersTurn={this.state.playersTurn}/>
        <Board board={this.state.board} startNewGame={this.startNewGame.bind(this)} flipPiece={this.flipPiece.bind(this)}/>
      </div>
    )
  }
}

export default App;
