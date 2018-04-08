import React, { Component } from 'react';


class Winner extends Component {
  onClick(i){
    console.log(i);
  }


  render() {
    const value=this.props.win;
    var item;
    if(value=="X"){
      item= <div> Winner:<span className="valx">{value}</span></div>;
    }
    else if(value=="O"){
      item= <div> Winner:<span className="valo">{value}</span></div>;
    }else{
      item=<div></div>
    }
    return (
        <div> <div className="winner">{item}</div></div>
    );
  }
}

export default Winner;
