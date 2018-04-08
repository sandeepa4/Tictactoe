import React, { Component } from 'react';


class Reset extends Component {
  onClick(i){
    console.log(i);
  }


  render() {
    return (
        <div> <div className="reset" onClick={()=>this.props.onClick()}>     Reset</div></div>
    );
  }
}

export default Reset;
