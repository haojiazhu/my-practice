import React from 'react';
class MoveBtn extends React.Component {  
    render(){
        const history=this.props.history;
        const moves =history.map((step, move) => {
            const c=1+Math.trunc(step.where/3);
            const r=1+step.where%3;
            const desc = move ?
              'Go to move #' + move +' col:'+c+' row:'+r:
              'Go to game start';
            const classButton = move === this.props.stepnum ? 'buttonstyle' : '';
            return (       
              <li key={move}>
                <button className={`${classButton}`} onClick={()=>this.props.onClick(move)}>{desc}</button>
              </li>    
            );
          });
        if(this.props.isrev){
            moves.reverse();
        }
        return(
                <ol>{moves}</ol>
            );
    }
}
export default MoveBtn;