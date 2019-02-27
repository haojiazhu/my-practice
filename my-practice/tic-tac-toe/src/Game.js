import React from 'react';
import Board from './Board.js';
import MoveBtn from './MoveBtn';
class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [
          {
            squares: Array(9).fill(null),
            where:-1
          }
        ],
        stepNumber: 0,
        xIsNext: true,    
        isReverse:false
      };
    }
  
    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      
      if (calculateWinner(squares) || squares[i]) {
          
        return;
      }
      squares[i] = this.state.xIsNext ? "X" : "O";
      this.setState({
        history: history.concat([
          {
            squares: squares,
            where:i
          }
        ]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
    }

    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      });
    }

     reverse(){
       this.state.isReverse?this.setState({isReverse:false}):this.setState({isReverse:true})
     }
  
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      var winner='';
      if(calculateWinner(current.squares)!=null){
        winner = calculateWinner(current.squares)[0];
      }
      let status;
      if (winner) {
        status = "Winner: " + winner;        
      } else if(this.state.stepNumber===9){
        status = "draw";
      }else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }
  
      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={i => this.handleClick(i)}
              winGrid={calculateWinner(current.squares)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
                <MoveBtn history={this.state.history} 
                  onClick={move => this.jumpTo(move)}
                  isrev={this.state.isReverse} 
                  stepnum={this.state.stepNumber}/>
            <button onClick={()=>this.reverse()}>reverse</button>
          </div>
        </div>
      );
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return [squares[a],lines[i]];
      }
    }
    return null;
  }
  export default Game;
  