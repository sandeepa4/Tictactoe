import React, { Component } from 'react';


class Turn extends Component {
  onClick(i){
    console.log(i);
  }


  render() {
    return (
        <div> <div className="winner">Current Turn:{this.props.turnvalue}</div></div>
    );
  }
}

export default Turn;
