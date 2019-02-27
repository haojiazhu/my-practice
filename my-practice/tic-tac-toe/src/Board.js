import React from 'react';
import Square from './Square.js';
class Board extends React.Component {
    renderSquare(i,flag) {
        return (
          <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
            win={flag}
          />
        );
    }

    creatDiv(index){
      const divs=[];
      for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
          if(this.props.winGrid&&(i*3+j===this.props.winGrid[1][0]||i*3+j===this.props.winGrid[1][1]||i*3+j===this.props.winGrid[1][2]))
          {
            divs[i*3+j]=this.renderSquare(i*3+j,true);
          }else{
            divs[i*3+j]=this.renderSquare(i*3+j,false);
          }
        }
      }
      return <div className="board-row">{divs[index]}{divs[index+1]}{divs[index+2]}</div>;
    }
  
    render() {
      return (
        <div>
          {this.creatDiv(0)}
          {this.creatDiv(3)}
          {this.creatDiv(6)}
        </div> 
      );
    }
  }
  export default Board;