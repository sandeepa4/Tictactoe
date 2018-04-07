import React, { Component } from 'react';


class Winner extends Component {
  onClick(i){
    console.log(i);
  }


  render() {
    return (
        <div> <div className="winner">     Winner:{this.props.win}</div></div>
    );
  }
}

export default Winner;
