import React, { Component } from 'react';
import BoardItem from './BoardItem';

class Board extends Component {

  render() {
  let boardRow=[];
  let item=this.props.boardvalue;
//  console.log(item);
  var cur;
  for (var i = 0; i < 10; i++) {
    let boardItem=[];
    for (var j = 0; j < 10; j++) {
      cur=i*10+j;
      boardItem.push(<td > <BoardItem onClick={(i)=>this.props.onClick(i)} titem={item[cur]}></BoardItem>
      </td>);
    }
    boardRow.push(<tr> {boardItem} </tr>);
    }

    return (
      <div className="Table">
      <table><tbody>
      {boardRow}</tbody></table>
            </div>
    );
  }
}

export default Board;
