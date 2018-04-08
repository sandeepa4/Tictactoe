import React, { Component } from 'react';


class Turn extends Component {
  render() {
    const value=this.props.turnvalue;
    var item;
    if(value=="X"){
      item= <div> Current Turn:<span className="valx">{value}</span></div>;
    }
    else if(value=="O"){
      item= <div> Current Turn:<span className="valo">{value}</span></div>;
    }else{
      item=<div></div>
    }
    return (
        <div> <div className="winner">{item}</div></div>
    );
  }
}

export default Turn;
