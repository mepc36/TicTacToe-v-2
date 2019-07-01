import React from 'react';
import Board from './components/Board';
import GameInfo from './components/GameInfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playersTurn: 1,
      board: [0, 0, 0, 0, 0, 0, 0, 0, 0], // 0, 3, 6 // 1, 4, 7
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

    if (this.state.playersTurn === 1) {
      if (this.checkRows(newBoard, 1) === true) {
        console.log('Congrats, player 1 wins on rows!')
        this.setState({
          gameOver: true,
        })
      };
      if (this.checkVerticals(newBoard, 1) === true) {
        console.log('Congrats, player 1 wins on verticals!')
        this.setState({
          gameOver: true,
        })
      };
      if (this.checkMajorDiagonals(newBoard, 1) === true) {
        console.log('Congrats, player 1 wins on diagonals!')
        this.setState({
          gameOver: true,
        })
      };
      if (this.checkMinorDiagonals(newBoard, 1) === true) {
        console.log('Congrats, player 1 wins on diagonals!')
        this.setState({
          gameOver: true,
        })
      };
    } else {
      if (this.checkRows(newBoard, 2) === true) {
        console.log('Congrats, player 2 wins on rows!')
        this.setState({
          gameOver: true,
        })
      };
      if (this.checkVerticals(newBoard, 2) === true) {
        console.log('Congrats, player 2 wins on verticals!')
        this.setState({
          gameOver: true,
        })
      };
      if (this.checkMajorDiagonals(newBoard, 2) === true) {
        console.log('Congrats, player 2 wins on diagonals!')
        this.setState({
          gameOver: true,
        })
      };
      if (this.checkMinorDiagonals(newBoard, 2) === true) {
        console.log('Congrats, player 2 wins on diagonals!')
        this.setState({
          gameOver: true,
        })
      };
    }

    this.setState({
      playersTurn: newPlayersTurn,
      board: newBoard,
    })
  }

  startNewGame(e) {
    e.preventDefault();
    this.setState({
      playersTurn: 1,
      board: newBoard,
      gameOver: false,
    })
  }

  checkRows(lastBoard, player) {
    var threeInARow = 0;
    var isSolved = false;
  
    for (var k = 0; k < 9; k += 3) {
      for (var i = 0; i < 3; i++) {
        if (lastBoard[i + k] !== player) {
          isSolved = false;
        } else {
          threeInARow++;
          if (threeInARow === 3) {
            return true;
          }
        }
      }
      threeInARow = 0;
    };
    return isSolved;
  }

  checkVerticals(lastBoard, player) {
    var threeInARow = 0;
    var isSolved = false;
  
    for (var i = 0; i < 3; i++) {
      for (var k = 0; k < 9; k += 3) {
        if (lastBoard[i + k] !== player) {
          isSolved = false;
        } else {
          threeInARow++;
          if (threeInARow === 3) {
            return true;
          }
        }
      }
      threeInARow = 0;
    };
    return isSolved;
  }

  checkMajorDiagonals(lastBoard, player) {
    var threeInARow = 0;
    var isSolved = false;
    for (var i = 0; i < 9; i += 4) {
      if (lastBoard[i] !== player) {
        return false;
      } else {
        threeInARow++;
        if (threeInARow === 3) {
          return true;
        }
      }
    };
    return isSolved;
  }

  checkMinorDiagonals(lastBoard, player) {
    var threeInARow = 0;
    var isSolved = false;
    for (var i = 2; i < 7; i += 2) {
      if (lastBoard[i] !== player) {
        return false;
      } else {
        threeInARow++;
        if (threeInARow === 3) {
          return true;
        }
      }
    };
    return isSolved;
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
