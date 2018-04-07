import React, { Component } from 'react';


class BoardItem extends Component {

  render() {
    const value=this.props.titem.value;
    var item;
    if(value=="X"){
      item= <div className="valx">{value}</div>;
    }
    else if(value=="O"){
      item= <div className="valo">{value}</div>;
    }
    else{
    item=  <div className="vale">{value}</div>;
    }

    return (
        <div className="board-item" onClick={() => this.props.onClick(this.props.titem.key)}>
        {item}
        </div>
    );
  }
}

export default BoardItem;
